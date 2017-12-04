/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuState;
(function (MenuState) {
    var MainMenuState = (function (_super) {
        __extends(MainMenuState, _super);
        //unused variables
        //public Phaser.Sound;
        //public Phaser.Sprite;
        function MainMenuState() {
            _super.call(this);
        }
        MainMenuState.prototype.create = function () {
            var _this = this;
            this.START_KEY = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            /*these are following parameters for the add() function: listenerContext?:any, priority?:number, args:any[]*/
            this.fixture = this.game.add.tileSprite(0, 0, 800, 600, 'background');
            var x = this.fixture;
            this.set = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player_one');
            this.set.anchor.setTo(0, 2);
            this.set2 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'game_title');
            this.set2.anchor.setTo(0.5, 0.5);
            this.set3 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'start_message');
            this.set3.anchor.setTo(.5, -2);
            this.START_KEY.onUp.addOnce(function () {
                //this.input.onTap.addOnce(() => {
                _this.game.state.start("LevelOne", true);
            }, this);
            //var title_track = this.game.add.audio('title_music');
            //title_track.volume = 100;
            //title_track.loop = true;
            //title_track.play();
        };
        MainMenuState.prototype.update = function () {
            //var z = this.ReturnAlias();
            //this.fixture.tilePosition.y += 2;
            this.fixture.tilePosition.y += 2;
        };
        return MainMenuState;
    }(Phaser.State));
    MenuState.MainMenuState = MainMenuState;
})(MenuState || (MenuState = {}));
//Determine if you can add a popup within the Phaser 
//Framework, try using alert() or z-indexing
//function enterKey() {
//    alert("Present menu options here...");
//} 
//# sourceMappingURL=MainMenuState.js.map