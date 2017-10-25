/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'object');

var BeginState = {
    preload: function () {
        //Graphics
        game.load.image('background', '/Graphics/space.png');
        //Music
        game.load.audio('title_music', '/Music/02 Paranoid Android.mp3');
        //Sprites
        game.load.image('player_one', '/Graphics/redRazor.png');
        game.load.image('commonE', '/Graphics/scytharWarship.png');
        game.load.image('user_main_weapon', '/Graphics/phasers.png');
        game.load.image('commonW', '/Graphics/plasmaBolts.png');
        game.load.image('health', '/Graphics/recovery.png');
        game.load.image('rockets', '/Graphics/rockets.png');
        game.load.image('game_title', '/Graphics/game_title.png');
    },
    create: function () { //create states
        this.titleScreen = game.add.tileSprite(0, 0, 800, 600, 'background');

        this.fixture = game.add.sprite(game.world.centerX, game.world.centerY, 'player_one');
        this.fixture.anchor.setTo(0, 2);

        this.title = game.add.sprite(game.world.centerX, game.world.centerY, 'game_title');
        this.title.anchor.setTo(0.5, 0.5);

        this.titleTrack = game.add.audio('title_music');
        this.titleTrack.volume = 100;
        this.titleTrack.loop = true;
        this.titleTrack.play();

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    update: function () {
        this.titleScreen.tilePosition.y += 2;
    },

}

game.state.add('BeginState', BeginState);
game.state.start('BeginState');

//when people are really fake, my response is always: how can I get away with murder...?