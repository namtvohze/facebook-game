"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by NamTV on 6/6/2017.
 */
var $ = require('jquery');
var typescript_events_1 = require("typescript.events");
var FacebookAPI_1 = require("./FacebookAPI");
var SinglePage = (function (_super) {
    __extends(SinglePage, _super);
    function SinglePage() {
        _super.apply(this, arguments);
        this.facebookAPI = new FacebookAPI_1.FacebookAPI();
    }
    SinglePage.prototype.run = function () {
        var _this = this;
        var facebookAPI;
        this.facebookAPI.on('readyFacebook', function () {
            console.log('22222222222222222222222222222');
            facebookAPI = _this.facebookAPI;
        });
        this.facebookAPI.on('readyShowFriend', function () {
            console.log('111111111111111111111111111111');
            facebookAPI.fbInvite(function (response) {
                console.log('----------------------------', response);
                if (response.data) {
                    var eOwlCarouselFriends = $('.list-friend-wrapper .owl-carousel');
                    var eSampleFriend = eOwlCarouselFriends.find('sample').first();
                    response.data.forEach(function (friend) {
                        var e = eSampleFriend.clone().removeClass('sample');
                        e.find('.avatar').attr('src', friend.picture.data.url);
                        e.find('.name').attr('src', friend.name);
                        e.find('.btnInvite').attr('friendId', friend.id);
                        eOwlCarouselFriends.append(e);
                    });
                    eOwlCarouselFriends.owlCarousel({
                        items: 7,
                        rewindNav: false,
                        margin: 10,
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
}(typescript_events_1.Event));
exports.SinglePage = SinglePage;
new SinglePage().run();
//# sourceMappingURL=app.js.map