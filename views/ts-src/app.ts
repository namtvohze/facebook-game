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
            facebookAPI.fbInvite();
            setInterval(()=>{
                facebookAPI.fbInvite();
            },5000);
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
