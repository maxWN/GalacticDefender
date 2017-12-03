/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/
var FinalFrontier;
(function (FinalFrontier) {
    var MainState = (function () {
        function MainState() {
            this.beginState = { preload: this.preload, create: this.create, update: this.update() };
            this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'object', this.beginState);
        }
        MainState.prototype.GameObjectsAlias = function (x) {
            var y = x;
            function ReturnAlias() {
                return x;
            }
        };
        MainState.prototype.preload = function () {
            //Load all of our assets before the game starts
            //Graphics
            this.game.load.image('background', '/Graphics/space.png');
            //Music
            this.game.load.audio('title_music', '/Music/02 Paranoid Android.mp3');
            //Sprites
            this.game.load.image('player_one', '/Graphics/redRazor.png');
            this.game.load.image('commonE', '/Graphics/scytharWarship.png');
            this.game.load.image('user_main_weapon', '/Graphics/phasers.png');
            this.game.load.image('commonW', '/Graphics/plasmaBolts.png');
            this.game.load.image('health', '/Graphics/recovery.png');
            this.game.load.image('rockets', '/Graphics/rockets.png');
            this.game.load.image('game_title', '/Graphics/game_title.png');
            this.game.load.image('start_message', '/Graphics/start_message.png');
        };
        MainState.prototype.create = function () {
            //create states
            this.game.state.add('MenuState', MenuState.MainMenuState, true);
            //this.game.state.start;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        MainState.prototype.update = function () {
        };
        return MainState;
    }());
    FinalFrontier.MainState = MainState;
})(FinalFrontier || (FinalFrontier = {}));
//loads game class ('MainState') from browser
window.onload = function () {
    var game = new FinalFrontier.MainState();
};
//# sourceMappingURL=MainState.js.map