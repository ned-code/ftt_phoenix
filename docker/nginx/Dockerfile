FROM nginx:1.10.1

RUN mkdir /srv/sites & rm /etc/nginx/conf.d/default.conf
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./sites-enabled/deffault.com /etc/nginx/sites-enabled/deffault.com
