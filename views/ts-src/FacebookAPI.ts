/**
 * Created by NamTV on 6/8/2017.
 */
import events = require('events');
declare var FB: any;
export class FacebookAPI extends  events.EventEmitter  {
    isReady;
    private loadFacebookSDK() {
        FB.init({
            // appId: '304062223380557',
            appId: '1081935061865457',
            cookie: true,  // enable cookies to allow the server to access
                           // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.9' // use graph api version 2.8
        });
        this.isReady = true;
        this.emit('readyFacebook');
        this.getLoginStatus();
        this.fbLogin();
    }

    init() {
        this.loadFacebookSDK();

    }

    public getLoginStatus() {
        FB.getLoginStatus((response) => {
            // console.log(response);
            // this.fbPermission();
            // this.fbListFriends();
            // // this.fbFeed();
            // this.fbInvite();
            this.emit('readyShowFriend');
        });
    }

    public fbLogin() {
        FB.login(function (response) {
            console.log(response);
        }, {scope: 'public_profile,email,user_friends'});
    }

    public fbPermission() {
        FB.api('/me/permissions', function (response) {
                console.log(response);
            }
        );
    }

    public fbListFriends() {
        FB.api(
            '/me',
            'GET',
            {"fields": "id,name,friends,picture"},
            function (response) {
                console.log(response);
            }
        );
    }

    public fbShare() {
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


    }

    public fbFeed() {
        FB.ui({
            method: 'feed',
            link: 'https://developers.facebook.com/docs/',
            caption: 'Your Caption here',
            description: 'some sort of your own description',
            message: 'Your Message goes here mate'
        }, function (response) {
            console.log(response);
        });
    }

    public fbInvite(callback = null) {
        FB.api(
            "/me/invitable_friends",
            function (response) {
                console.log(response);
                if (callback) {
                    callback(response);
                }
            }
        );
    }
    public appRequests(callback=null){
        FB.ui({method: 'apprequests',
            message: 'Vào chơi cùng mình nhé! Game rất hay'
        }, function(response){
            if(callback){
                callback(response);
            }
        });
    }
    public appRequestToUser(userId,callback=null){
        FB.ui({method: 'apprequests',
            message: 'Vào chơi cùng mình nhé! Game rất hay',
            to: userId
        }, function(response){
            if(callback){
                callback(response);
            }
        });
    }
}