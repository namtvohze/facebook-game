/**
 * Created by NamTV on 6/6/2017.
 */
import * as $ from 'jquery';
import {Event} from "typescript.events"
import {FacebookAPI} from "./FacebookAPI";
declare var parser: any;
export class SinglePage extends Event{
    facebookAPI = new FacebookAPI();
    public run() {
        this.facebookAPI.on('readyFacebook',()=>{
            this.facebookAPI.fbInvite();
        });
        this.facebookAPI.init();
    }

}
new SinglePage().run();
