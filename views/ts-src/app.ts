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
            facebookAPI = this.facebookAPI;
            facebookAPI.fbInvite(function (response) {
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
            setInterval(() => {
                facebookAPI.fbInvite();
            }, 5000);
        });
        this.facebookAPI.init();
        $(document).ready(function () {
            $('.facebook-invite .btnInvite').click(() => {
                facebookAPI.fbInvite();
            });
        });
    }

}
new SinglePage().run();
