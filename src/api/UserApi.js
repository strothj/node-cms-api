/**
 * NodeCMS
 * API for Node Content Management System
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.NodeCms) {
      root.NodeCms = {};
    }
    root.NodeCms.UserApi = factory(root.NodeCms.ApiClient, root.NodeCms.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/UserApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of users. Returns 200 if the full listing of users was returned. 206 is returned if more user accounts are available. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page of results to return. (default to 0)
     * @param {Number} opts.perPage How many results per page to return. (default to 20)
     * @param {module:api/UserApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    this.usersGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersIdPut operation.
     * @callback module:api/UserApi~usersIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user account.
     * @param {String} id 
     * @param {module:model/User} user 
     * @param {module:api/UserApi~usersIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersIdPut = function(id, user, callback) {
      var postBody = user;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling usersIdPut");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling usersIdPut");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UserApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new user account.
     * @param {module:model/User} user 
     * @param {module:api/UserApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersPost = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling usersPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
