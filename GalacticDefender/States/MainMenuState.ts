/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/

module MenuState {

    export class MainMenuState extends Phaser.State
    {
        //class variables
        public fixture: Phaser.TileSprite;
        public set: Phaser.Sprite;
        public set2: Phaser.Sprite;

        //unused variables
        //public Phaser.Sound;
        //public Phaser.Sprite;

        constructor()
        {
            super();
        }

        public create(): void
        {
            this.fixture = this.game.add.tileSprite(0, 0, 800, 600, 'background');
            let x = this.fixture;

            this.set = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player_one');
            this.set.anchor.setTo(0, 2);

            this.set2 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'game_title');
            this.set2.anchor.setTo(0.5, 0.5);

            //var title_track = this.game.add.audio('title_music');
            //title_track.volume = 100;
            //title_track.loop = true;
            //title_track.play();
        }

        public update(): void {
            //var z = this.ReturnAlias();
            //this.fixture.tilePosition.y += 2;
            this.fixture.tilePosition.y += 2;
        }

    }

}