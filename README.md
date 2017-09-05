# wangpq-vue-webpack-study

> 一个练习的vue-webpack项目，使用啦vue2.0+

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

* * *

## 项目创建

### 安装cnpm
``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
### 安装webpack
``` bash
cnpm install webpack -g
```
### 安装vue脚手架
``` bash
npm install vue-cli -g
```
### 在硬盘上找一个文件夹，在终端中进入该目录
cd 目录路径

### 根据模板创建项目
vue init webpack-simple 工程名字<工程名字不能用中文>

或者创建

vue init webpack 工程名字<工程名字不能用中文>

会有一些初始化的设置，如下输入:

Target directory exists. Continue? (Y/n)直接回车默认(然后会下载 vue2.0模板，这里可能需要连代理)   

Project name (vue-test)直接回车默认

Project description (A Vue.js project) 直接回车默认
    
Author 写自己的名字    

### cd 命令进入创建的工程根目录，安装项目依赖
``` bash
cnpm install
```

### 启动项目
``` bash
npm run dev
```

### 关于更新某个模块
``` bash
npm update -g
```
``` bash
npm update vue-cli
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
