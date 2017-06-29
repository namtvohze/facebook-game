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
            console.log('22222222222222222222222222222-123');
            facebookAPI = _this.facebookAPI;
        });
        this.facebookAPI.on('readyShowFriend', function () {
            console.log('111111111111111111111111111111');
            facebookAPI.fbInvite(function (response) {
                console.log('----------------------------', response);
                if (response.data) {
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
            var _this = this;
            $('.facebook-invite .btnInvite').click(function () {
                alert('123');
                facebookAPI.appRequests();
            });
            $('.item.friend .btnInvite').click(function () {
                facebookAPI.appRequestToUser($(_this).attr('friendId'));
            });
        });
    };
    return SinglePage;
}());
exports.SinglePage = SinglePage;
new SinglePage().run();
//# sourceMappingURL=app.js.map