upstream apiGroup {
    server api:4000;
}

server {
    listen [::]:80;
    listen 80 default_server;

    server_name localhost;

    keepalive_timeout 300;
    client_max_body_size 32m;

	default_type text/html;
    root /srv/sites;

    location / {
        proxy_set_header Upgrade $http_upgrade;
        proxy_http_version 1.1;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://client:3000;
    }

    location /api {
        proxy_set_header Upgrade $http_upgrade;
        proxy_http_version 1.1;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://apiGroup;
    }

    location /socket.io/ {
        proxy_set_header Upgrade $http_upgrade;
        proxy_http_version 1.1;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://api:4000;
    }

    #Specify a charset
    charset utf-8;
    autoindex off;

    gzip on;
    gzip_disable "msie6";
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript;
}
