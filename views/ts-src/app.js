"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        this.facebookAPI.on('readyFacebook', function () {
            _this.facebookAPI.fbInvite();
        });
        this.facebookAPI.init();
    };
    return SinglePage;
}(typescript_events_1.Event));
exports.SinglePage = SinglePage;
new SinglePage().run();
//# sourceMappingURL=app.js.map