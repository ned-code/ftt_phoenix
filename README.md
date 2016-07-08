# how-to install modules for project
#### !!! All commands write in ubuntu style be careful !!!


## Global install packages

#### Install Nodejs
[nodejs](https://nodejs.org/en/)  

[nodejs install](https://nodejs.org/en/download/package-manager/)  

```bash
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
```
```bash
sudo apt-get install -y nodejs
```

#### Install npm
if u have npm and ur version more then 3.x u can skip this step

[npm install](https://docs.npmjs.com/cli/install)  
```bash
npm install npm -g
```

####  install npm global modules
install better scripts
```bash
npm install better-npm-run -g
```
install concurrently
```bash
npm install concurrently -g
```

####  install npm local modules
in directory with project install local modules
```bash
npm install 
```

# how-to work with project

## npm scripts
for start application in production mode shoud use *npm run prod*  

  start api web service ( localhost:3030/ );  
  build the js/css and images and placed them into dist/ directory;  
  start application ( localhost:8080/ );    

```bash
  npm run prod
```

for start application in dev mode shoud use *npm run dev*  

  start api web service ( localhost:3030/ );     
  start application with devtools in dev mode ( all files will be with source-map in memmory ) ( localhost:3000/ );    
```bash
  npm run dev
```

just build all file in production mode ( part on *npm run prod* )
```bash
  npm run build
```

start mocha test ( future feature, for testing and unit test, now empty )
```bash
  npm run test
```








