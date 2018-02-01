/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/

module FirstLevel {

    export class LevelOne extends Phaser.State {

        //class variables
        public fixture: Phaser.TileSprite;
        public player_one: Phaser.Sprite;

        //player controls
        RIGHT_KEY: Phaser.Key;
        LEFT_KEY: Phaser.Key;
        FORWARD_KEY: Phaser.Key;
        BACKWARD_KEY: Phaser.Key;

        //player attributes
        FLIGHT_SPEED: number = 0;

        constructor() {
            super();
        }

        public create(): void
        {
            this.fixture = this.game.add.tileSprite(0, 0, 800, 600, 'background');

            this.player_one = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player_one');
            this.player_one.anchor.setTo(.5, -2);

            this.FORWARD_KEY = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.BACKWARD_KEY = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.RIGHT_KEY = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.LEFT_KEY = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

        }


    }

}