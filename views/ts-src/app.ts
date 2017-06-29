/**
 * Created by NamTV on 6/6/2017.
 */
import * as $ from 'jquery';
import {Event} from "typescript.events"
import {FacebookAPI} from "./FacebookAPI";
declare var parser: any;
export class SinglePage extends Event {
    facebookAPI = new FacebookAPI();

    public run() {
        var facebookAPI;
        this.facebookAPI.on('readyFacebook', () => {
            console.log('22222222222222222222222222222');
            facebookAPI = this.facebookAPI;
        });
        this.facebookAPI.on('readyShowFriend',()=>{
            console.log('111111111111111111111111111111');
            facebookAPI.fbInvite(function (response) {
                console.log('----------------------------',response);
                if (response.data) {
                    var eOwlCarouselFriends:any = $('.list-friend-wrapper .owl-carousel');
                    var eSampleFriend = eOwlCarouselFriends.find('sample').first();
                    response.data.forEach((friend) => {
                        var e = eSampleFriend.clone().removeClass('sample');
                        e.find('.avatar').attr('src',friend.picture.data.url);
                        e.find('.name').attr('src',friend.name);
                        e.find('.btnInvite').attr('friendId',friend.id);
                        eOwlCarouselFriends.append(e);
                    });
                    eOwlCarouselFriends.owlCarousel({
                        items: 7,
                        rewindNav: false,
                        margin: 10,
                    });
                }
            });
        })
        this.facebookAPI.init();
        $(document).ready(function () {
            $('.facebook-invite .btnInvite').click(() => {
                facebookAPI.fbInvite();
            });
        });
    }

}
new SinglePage().run();
