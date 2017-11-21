/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/
var FinalFrontier;
(function (FinalFrontier) {
    var MainState = (function () {
        function MainState() {
            this.BeginState = { preload: this.preload, create: this.create, update: this.update };
            this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'object');
            this.begin();
        }
        //var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'object');
        //var BeginState = {
        MainState.prototype.GameObjectsAlias = function (x) {
            var y = x;
            function ReturnAlias() {
                return x;
            }
        };
        MainState.prototype.preload = function () {
            console.log("Pre-load files before execution.");
            //Load all of our assets before the game starts
            //Graphics
            this.game.load.image('background', '/Graphics/space.png');
            //Music
            //this.game.load.audio('title_music', '/Music/02 Paranoid Android.mp3');
            //Sprites
            this.game.load.image('player_one', '/Graphics/redRazor.png');
            this.game.load.image('commonE', '/Graphics/scytharWarship.png');
            this.game.load.image('user_main_weapon', '/Graphics/phasers.png');
            this.game.load.image('commonW', '/Graphics/plasmaBolts.png');
            this.game.load.image('health', '/Graphics/recovery.png');
            this.game.load.image('rockets', '/Graphics/rockets.png');
            this.game.load.image('game_title', '/Graphics/game_title.png');
        };
        MainState.prototype.create = function () {
            this.fixture = this.game.add.tileSprite(0, 0, 800, 600, 'background');
            this.x = this.fixture;
            //this.GameObjectsAlias(fixture);
            var set = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player_one');
            set.anchor.setTo(0, 2);
            var set2 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'game_title');
            set2.anchor.setTo(0.5, 0.5);
            //var title_track = this.game.add.audio('title_music');
            //title_track.volume = 80;
            //title_track.loop = true;
            //title_track.play();
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        MainState.prototype.update = function () {
            //var z = this.ReturnAlias();
            this.fixture.tilePosition.y += 2;
            //this.x.tilePosition.y += 2;
        };
        MainState.prototype.begin = function () {
            this.game.state.add('BeginState', this.BeginState);
            this.game.state.start('BeginState');
        };
        return MainState;
    }());
    FinalFrontier.MainState = MainState;
})(FinalFrontier || (FinalFrontier = {}));
//# sourceMappingURL=MainState.js.map