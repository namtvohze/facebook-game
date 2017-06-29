/**
 * Created by NamTV on 6/6/2017.
 */
// import * as $ from 'jquery';
declare var $: any;
import {FacebookAPI} from "./FacebookAPI";
export class SinglePage {
    facebookAPI = new FacebookAPI();

    public run() {
        var facebookAPI:FacebookAPI;
        this.facebookAPI.on('readyFacebook', () => {
            facebookAPI = this.facebookAPI;
        });

        this.facebookAPI.on('readyShowFriend', () => {
            facebookAPI.fbInvite(function (response) {
                if (response.data) {
                    $('.friend-invite').show();
                    var eOwlCarouselFriends: any = $('.list-friend-wrapper .owl-carousel');
                    var eSampleFriend = $('.list-friend-wrapper .sample').first();
                    response.data.forEach((friend) => {
                        var e = eSampleFriend.clone().removeClass('sample');
                        e.find('.avatar').attr('src', friend.picture.data.url);
                        e.find('.name').text(friend.name).attr('title',friend.name);
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
            $('.facebook-invite .btnInvite').click(() => {
                facebookAPI.appRequests();
            });
            $('.list-friend-wrapper').on('click','.item.friend .btnInvite',function(){
                var eSelft = this;
                facebookAPI.appRequestToUser($(this).attr('friendId'),function (response) {
                    if(response && response.error_message){

                    }else{
                        eSelft.addClass('invited');
                    }
                });
            });
        });
    }

}
new SinglePage().run();
