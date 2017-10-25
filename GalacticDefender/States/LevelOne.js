/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FinalFrontier;
(function (FinalFrontier) {
    var LevelOne = (function (_super) {
        __extends(LevelOne, _super);
        function LevelOne() {
            _super.call(this);
        }
        LevelOne.prototype.preload = function () {
            this.game.load.image('player_one', '/Graphics/redRazor.png');
            this.game.load.image('commonE', '/Graphics/scytharWarship.png');
            this.game.load.image('user_main_weapon', '/Graphics/phasers.png');
            this.game.load.image('commonW', '/Graphics/plasmaBolts.png');
            this.game.load.image('health', '/Graphics/recovery.png');
            this.game.load.image('rockets', '/Graphics/rockets.png');
        };
        //This will take our preloaded data, and create a state
        LevelOne.prototype.create = function () {
        };
        return LevelOne;
    }(FinalFrontier.MainMenuState));
    FinalFrontier.LevelOne = LevelOne;
})(FinalFrontier || (FinalFrontier = {}));
//# sourceMappingURL=LevelOne.js.map