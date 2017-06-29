/**
 * Created by NamTV on 6/6/2017.
 */
import * as $ from 'jquery';
import {Event} from "typescript.events"
import {FacebookAPI} from "./FacebookAPI";
declare var parser: any;
export class SinglePage extends Event {
    facebookAPI = new FacebookAPI();
    private renderListFriendCanInvite(){
        this.facebookAPI.fbInvite((response)=>{
            console.log(response);
        });
    }
    public run() {
        var facebookAPI:FacebookAPI;
        this.facebookAPI.on('readyFacebook', () => {
            facebookAPI = this.facebookAPI;
            this.renderListFriendCanInvite();
        });
        this.facebookAPI.init();
        $(document).ready(function () {
            $('.facebook-invite .btnInvite').click(() => {
                facebookAPI.requestPlay();
            });
        });
    }

}
new SinglePage().run();
