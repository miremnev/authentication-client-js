/**
 * Authorization API
 * Authorization API
 *
 * OpenAPI spec version: 9.0.000.00.662
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthorizationApi) {
      root.AuthorizationApi = {};
    }
    root.AuthorizationApi.ApiResponseStatus = factory(root.AuthorizationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApiResponseStatus model module.
   * @module model/ApiResponseStatus
   * @version 9.0.000.00.662
   */

  /**
   * Constructs a new <code>ApiResponseStatus</code>.
   * @alias module:model/ApiResponseStatus
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ApiResponseStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseStatus} obj Optional instance to populate.
   * @return {module:model/ApiResponseStatus} The populated <code>ApiResponseStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], Object);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Object} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


