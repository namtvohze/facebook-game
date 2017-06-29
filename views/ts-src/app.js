"use strict";
var FacebookAPI_1 = require("./FacebookAPI");
var SinglePage = (function () {
    function SinglePage() {
        this.facebookAPI = new FacebookAPI_1.FacebookAPI();
    }
    SinglePage.prototype.run = function () {
        var _this = this;
        var facebookAPI;
        this.facebookAPI.on('readyFacebook', function () {
            facebookAPI = _this.facebookAPI;
        });
        this.facebookAPI.on('readyShowFriend', function () {
            facebookAPI.fbInvite(function (response) {
                if (response.data) {
                    $('.friend-invite').show();
                    var eOwlCarouselFriends = $('.list-friend-wrapper .owl-carousel');
                    var eSampleFriend = $('.list-friend-wrapper .sample').first();
                    response.data.forEach(function (friend) {
                        var e = eSampleFriend.clone().removeClass('sample');
                        e.find('.avatar').attr('src', friend.picture.data.url);
                        e.find('.name').text(friend.name).attr('title', friend.name);
                        e.find('.btnInvite').attr('friendId', friend.id);
                        eOwlCarouselFriends.append(e);
                    });
                    $('.list-friend-wrapper .owl-carousel').owlCarousel({
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
                facebookAPI.appRequests();
            });
            $('.list-friend-wrapper').on('click', '.item.friend .btnInvite', function () {
                var eSelft = $(this);
                facebookAPI.appRequestToUser($(this).attr('friendId'), function (response) {
                    if (response && response.error_message) {
                    }
                    else {
                        eSelft.addClass('invited');
                    }
                });
            });
        });
    };
    return SinglePage;
}());
exports.SinglePage = SinglePage;
new SinglePage().run();
//# sourceMappingURL=app.js.map