"use strict";
/**
 * Created by NamTV on 6/6/2017.
 */
var $ = require('jquery');
var FacebookAPI_1 = require("./FacebookAPI");
var SinglePage = (function () {
    function SinglePage() {
        this.facebookAPI = new FacebookAPI_1.FacebookAPI();
    }
    SinglePage.prototype.run = function () {
        var _this = this;
        var facebookAPI;
        this.facebookAPI.on('readyFacebook', function () {
            console.log('22222222222222222222222222222-123');
            facebookAPI = _this.facebookAPI;
        });
        this.facebookAPI.on('readyShowFriend', function () {
            console.log('111111111111111111111111111111');
            facebookAPI.fbInvite(function (response) {
                console.log('----------------------------', response);
                if (response.data) {
                    var eOwlCarouselFriends = $('.list-friend-wrapper .owl-carousel');
                    var eSampleFriend = eOwlCarouselFriends.find('.sample').first();
                    response.data.forEach(function (friend) {
                        console.log(friend);
                        var e = eSampleFriend.clone().removeClass('sample');
                        e.find('.avatar').attr('src', friend.picture.data.url);
                        e.find('.name').attr('src', friend.name);
                        e.find('.btnInvite').attr('friendId', friend.id);
                    });
                }
            });
        });
        this.facebookAPI.init();
        $(document).ready(function () {
            $('.facebook-invite .btnInvite').click(function () {
                facebookAPI.fbInvite();
            });
        });
    };
    return SinglePage;
}());
exports.SinglePage = SinglePage;
new SinglePage().run();
//# sourceMappingURL=app.js.map