/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/

module FinalFrontier {
    export class MainState {

        public game: Phaser.Game;
        ////start key will only be used in this state
        //public START_KEY: Phaser.Key;

        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'object', this.beginState);
            //this.START_KEY = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            /*these are following parameters for the add() function: listenerContext?:any, priority?:number, args:any[]*/
        }

        GameObjectsAlias(x) {
            var y = x;
            function ReturnAlias() {
                return x;
            }
        } 

        public x: any;
        
        public preload(): void {
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

            //Create the following: 
            /*
            * Add a loading bar here, so that if the loading process takes longer than expected
            * users will know when to expect loading to finish.
            */
        }

        public create(): void {
             //create states

            this.game.state.add('MenuState', MenuState.MainMenuState, true);
            this.game.state.add('LevelOne', FirstLevel.LevelOne, false);
            this.game.state.start;

            //this.START_KEY.onUp.add(() => {
            //    this.game.state.start("LevelOne", true)
            //}, this);

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }

        public update(): void {
        }

        public beginState = { preload: this.preload, create: this.create, update: this.update()};

        //public begin() {
        //    this.game.state.add('BeginState', this.beginState);
        //    this.game.state.start;
        //}

    }

}

//loads game class ('MainState') from browser
window.onload = () => {
    var game = new FinalFrontier.MainState();
};
