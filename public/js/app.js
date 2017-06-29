/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Event = (function () {
    function Event() {
        this._listeners = [];
        this._maxListeners = null;
    }
    Event.prototype.addListener = function (event, listener) {
        return this.on(event, listener);
    };
    Event.prototype.emit = function (event) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        var listeners = this._listeners.filter(function (item) { return item.event === event; });
        /* istanbul ignore next */
        listeners.forEach(function (item) { return item.listener.apply({}, a || []); });
        this._listeners = listeners.filter(function (item) { return !item.once; });
        return listeners.length !== 0 ? true : false;
    };
    Event.prototype.getMaxListeners = function () {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    };
    Event.prototype.listenerCount = function (event) {
        return this._listeners.filter(function (item) { return item.event === event; })
            .length;
    };
    Event.prototype.listeners = function (event) {
        return this._filterMatchingEvents(event)
            .map(function (item) { return item.listener; })
            .reverse();
    };
    Event.prototype.on = function (event, listener) {
        this._register(event, listener, false);
        return this;
    };
    Event.prototype.once = function (event, listener) {
        this._register(event, listener, true);
        return this;
    };
    Event.prototype.removeAllListeners = function (event) {
        this._listeners = this._filterNonMatchingEvents(event);
        return this;
    };
    Event.prototype.removeListener = function (event, listener) {
        this._listeners = this._listeners.filter(function (item) {
            return !((item.event === event) && (item.listener === listener));
        });
        return this;
    };
    Event.prototype.setMaxListeners = function (thresshold) {
        this._maxListeners = thresshold;
        return this;
    };
    Event.prototype._filterMatchingEvents = function (event) {
        return this._listeners.filter(function (item) { return item.event === event; });
    };
    Event.prototype._filterNonMatchingEvents = function (event) {
        return this._listeners.filter(function (item) { return item.event !== event; });
    };
    Event.prototype._register = function (event, listener, once) {
        !this._checkListenerLimitReached(event) && this._listeners.unshift({ event: event, listener: listener, once: once });
        return;
    };
    Event.prototype._returnListenerLimit = function () {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    };
    Event.prototype._checkListenerLimitReached = function (event) {
        var limitReached = this.listenerCount(event) === this._returnListenerLimit() ? true : false;
        limitReached && console.log("Listener Limit Reached");
        return limitReached;
    };
    Event.defaultMaxListeners = 10;
    return Event;
}());
exports.Event = Event;

//# sourceMappingURL=typescript.events.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = __webpack_require__(0);
var FacebookAPI_1 = __webpack_require__(2);
var SinglePage = (function (_super) {
    __extends(SinglePage, _super);
    function SinglePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facebookAPI = new FacebookAPI_1.FacebookAPI();
        return _this;
    }
    SinglePage.prototype.run = function () {
        this.facebookAPI.on('readyFacebook', function () {
        });
        this.facebookAPI.init();
    };
    return SinglePage;
}(typescript_events_1.Event));
exports.SinglePage = SinglePage;
new SinglePage().run();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by NamTV on 6/8/2017.
 */
var typescript_events_1 = __webpack_require__(0);
var FacebookAPI = (function (_super) {
    __extends(FacebookAPI, _super);
    function FacebookAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacebookAPI.prototype.loadFacebookSDK = function () {
        console.log('333333333333333333333');
        FB.init({
            // appId: '304062223380557',
            appId: '1081935061865457',
            cookie: true,
            // the session
            xfbml: true,
            version: 'v2.9' // use graph api version 2.8
        });
        this.isReady = true;
        this.emit('readyFacebook');
        this.getLoginStatus();
        this.fbLogin();
    };
    FacebookAPI.prototype.init = function () {
        this.loadFacebookSDK();
    };
    FacebookAPI.prototype.getLoginStatus = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            console.log(response);
            _this.fbPermission();
            _this.fbListFriends();
            // this.fbFeed();
            _this.fbInvite();
        });
    };
    FacebookAPI.prototype.fbLogin = function () {
        FB.login(function (response) {
            console.log(response);
        }, { scope: 'public_profile,email,user_friends' });
    };
    FacebookAPI.prototype.fbPermission = function () {
        FB.api('/me/permissions', function (response) {
            console.log(response);
        });
    };
    FacebookAPI.prototype.fbListFriends = function () {
        FB.api('/me', 'GET', { "fields": "id,name,friends,picture" }, function (response) {
            console.log(response);
        });
    };
    FacebookAPI.prototype.fbShare = function () {
        FB.ui({
            method: 'share',
            href: 'https://developers.facebook.com/docs/',
        }, function (response) {
            console.log(response);
        });
        // FB.ui({
        //     method: 'share_open_graph',
        //     action_type: 'og.likes',
        //     action_properties: JSON.stringify({
        //         object:'https://developers.facebook.com/docs/',
        //     })
        // }, function(response){
        //     console.log(response);
        // });
    };
    FacebookAPI.prototype.fbFeed = function () {
        FB.ui({
            method: 'feed',
            link: 'https://developers.facebook.com/docs/',
            caption: 'Your Caption here',
            description: 'some sort of your own description',
            message: 'Your Message goes here mate'
        }, function (response) {
            console.log(response);
        });
    };
    FacebookAPI.prototype.fbInvite = function () {
        FB.api("/me/invitable_friends", function (response) {
            console.log(response);
        });
    };
    return FacebookAPI;
}(typescript_events_1.Event));
exports.FacebookAPI = FacebookAPI;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map