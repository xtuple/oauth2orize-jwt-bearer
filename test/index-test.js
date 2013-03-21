var vows = require('vows');
var assert = require('assert');
var util = require('util');
var jwtBearer = require('oauth2orize-jwt-bearer');


vows.describe('oauth2orize-jwt-bearer').addBatch({

  'module': {
    'should report a version': function (x) {
      assert.isString(jwtBearer.version);
    },

    'should export Exchange': function (x) {
      assert.isFunction(jwtBearer.Exchange);
    },
  },

}).export(module);