// Generated by CoffeeScript 1.7.1
(function() {
  var assert, onvif, serverMockup, util;

  assert = require('assert');

  onvif = require('../lib/onvif');

  serverMockup = require('./serverMockup');

  util = require('util');

  describe('Imaging', function() {
    var cam, settings;
    cam = null;
    before(function(done) {
      var options;
      options = {
        hostname: process.env.HOSTNAME || 'localhost',
        username: process.env.USERNAME || 'admin',
        password: process.env.PASSWORD || '9999',
        port: process.env.PORT ? parseInt(process.env.PORT) : 10101
      };
      return cam = new onvif.Cam(options, done);
    });
    settings = null;
    it('should request imaging settings with options object', function(done) {
      return cam.getImagingSettings({}, function(err, res) {
        assert.equal(err, null);
        ['brightness', 'colorSaturation', 'contrast', 'focus', 'sharpness'].every(function(prop) {
          return res[prop];
        });
        settings = res;
        return done();
      });
    });
    it('should do the same without options object', function(done) {
      return cam.getImagingSettings(function(err, res) {
        assert.equal(err, null);
        ['brightness', 'colorSaturation', 'contrast', 'focus', 'sharpness'].every(function(prop) {
          return res[prop];
        });
        return done();
      });
    });
    return it('should set imaging configuration', function(done) {
      if (settings === null) {
        throw 'getImagingSettings failed';
      }
      return cam.setImagingSettings(settings, function(err, res) {
        assert.equal(err, null);
        assert.equal(res, '');
        return done();
      });
    });
  });

}).call(this);

//# sourceMappingURL=imaging.map
