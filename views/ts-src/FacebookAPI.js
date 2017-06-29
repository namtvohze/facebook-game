"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by NamTV on 6/8/2017.
 */
var typescript_events_1 = require("typescript.events");
var FacebookAPI = (function (_super) {
    __extends(FacebookAPI, _super);
    function FacebookAPI() {
        _super.apply(this, arguments);
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
    FacebookAPI.prototype.fbInvite = function (callback) {
        FB.api("/me/invitable_friends", callback);
    };
    FacebookAPI.prototype.requestPlay = function () {
        FB.ui({ method: 'apprequests',
            message: 'Chơi game này cùng mình đi! Game hay phết'
        }, function (response) {
            console.log(response);
        });
    };
    return FacebookAPI;
}(typescript_events_1.Event));
exports.FacebookAPI = FacebookAPI;
//# sourceMappingURL=FacebookAPI.js.map