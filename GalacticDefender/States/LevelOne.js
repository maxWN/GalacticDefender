/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FirstLevel;
(function (FirstLevel) {
    var LevelOne = (function (_super) {
        __extends(LevelOne, _super);
        function LevelOne() {
            _super.call(this);
        }
        LevelOne.prototype.create = function () {
            this.fixture = this.game.add.tileSprite(0, 0, 800, 600, 'background');
            this.player_one = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player_one');
            this.player_one.anchor.setTo(.5, -2);
        };
        return LevelOne;
    }(Phaser.State));
    FirstLevel.LevelOne = LevelOne;
})(FirstLevel || (FirstLevel = {}));
//# sourceMappingURL=LevelOne.js.map