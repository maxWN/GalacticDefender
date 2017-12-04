/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/

module FirstLevel {

    export class LevelOne extends Phaser.State {

        //class variables
        public fixture: Phaser.TileSprite;


        constructor() {
            super();
        }

        //preload() {

        //    this.game.load.image('player_one', '/Graphics/redRazor.png');
        //    this.game.load.image('commonE', '/Graphics/scytharWarship.png');
        //    this.game.load.image('user_main_weapon', '/Graphics/phasers.png');
        //    this.game.load.image('commonW', '/Graphics/plasmaBolts.png');
        //    this.game.load.image('health', '/Graphics/recovery.png');
        //    this.game.load.image('rockets', '/Graphics/rockets.png');

        //}

        public create(): void
        {
            this.fixture = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        }


    }

}