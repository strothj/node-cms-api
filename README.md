# node_cms

NodeCms - JavaScript client for node_cms
API for Node Content Management System
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install node_cms --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/node_cms
then install it via:

```shell
    npm install YOUR_USERNAME/node_cms --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NodeCms = require('node_cms');

var api = new NodeCms.SiteApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.siteGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:3000/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NodeCms.SiteApi* | [**siteGet**](docs/SiteApi.md#siteGet) | **GET** /site | 
*NodeCms.UserApi* | [**usersGet**](docs/UserApi.md#usersGet) | **GET** /users | 
*NodeCms.UserApi* | [**usersIdPut**](docs/UserApi.md#usersIdPut) | **PUT** /users/{id} | 
*NodeCms.UserApi* | [**usersPost**](docs/UserApi.md#usersPost) | **POST** /users | 


## Documentation for Models

 - [NodeCms.SiteMeta](docs/SiteMeta.md)
 - [NodeCms.User](docs/User.md)
 - [NodeCms.UserName](docs/UserName.md)


## Documentation for Authorization

 All endpoints do not require authorization.

