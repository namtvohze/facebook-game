/**
 * Created by NamTV on 6/6/2017.
 */
import * as $ from 'jquery';
import {FacebookAPI} from "./FacebookAPI";
export class SinglePage{
    facebookAPI = new FacebookAPI();
    public run() {
        var facebookAPI;
        this.facebookAPI.on('readyFacebook', () => {
            console.log('22222222222222222222222222222-123');
            facebookAPI = this.facebookAPI;
        });

        this.facebookAPI.on('readyShowFriend',()=>{
            console.log('111111111111111111111111111111');
            facebookAPI.fbInvite(function (response) {
                console.log('----------------------------',response);
                if (response.data) {
                    var eOwlCarouselFriends:any = $('.list-friend-wrapper .owl-carousel');
                    var eSampleFriend = eOwlCarouselFriends.find('sample').first();
                    console.log(eSampleFriend);
                    response.data.forEach((friend) => {
                        console.log(friend);
                        var e = eSampleFriend.clone().removeClass('sample');
                        e.find('.avatar').attr('src',friend.picture.data.url);
                        e.find('.name').attr('src',friend.name);
                        e.find('.btnInvite').attr('friendId',friend.id);
                        eOwlCarouselFriends.append(e);
                    });
                    // eOwlCarouselFriends.owlCarousel({
                    //     items: 7,
                    //     rewindNav: false,
                    //     margin: 10,
                    // });
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
