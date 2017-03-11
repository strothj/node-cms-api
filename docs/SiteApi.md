# NodeCms.SiteApi

All URIs are relative to *https://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**siteGet**](SiteApi.md#siteGet) | **GET** /site | 


<a name="siteGet"></a>
# **siteGet**
> SiteMeta siteGet()



Returns site setup status and meta information.   If site setup is complete, a 200 status code is returned with site information.   If site has not been setup yet, a 404 status is returned. 

### Example
```javascript
var NodeCms = require('node_cms');

var apiInstance = new NodeCms.SiteApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.siteGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SiteMeta**](SiteMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

