# NodeCms.UserApi

All URIs are relative to *https://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UserApi.md#usersGet) | **GET** /users | 
[**usersIdPut**](UserApi.md#usersIdPut) | **PUT** /users/{id} | 
[**usersPost**](UserApi.md#usersPost) | **POST** /users | 


<a name="usersGet"></a>
# **usersGet**
> [User] usersGet(opts)



Returns the list of users. Returns 200 if the full listing of users was returned. 206 is returned if more user accounts are available. 

### Example
```javascript
var NodeCms = require('node_cms');

var apiInstance = new NodeCms.UserApi();

var opts = { 
  'page': 0, // Number | Which page of results to return.
  'perPage': 20 // Number | How many results per page to return.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Which page of results to return. | [optional] [default to 0]
 **perPage** | **Number**| How many results per page to return. | [optional] [default to 20]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersIdPut"></a>
# **usersIdPut**
> User usersIdPut(id, user)



Update a user account.

### Example
```javascript
var NodeCms = require('node_cms');

var apiInstance = new NodeCms.UserApi();

var id = "id_example"; // String | 

var user = new NodeCms.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersIdPut(id, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(user)



Creates a new user account.

### Example
```javascript
var NodeCms = require('node_cms');

var apiInstance = new NodeCms.UserApi();

var user = new NodeCms.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersPost(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

