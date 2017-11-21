/*
*   Author - Max W. Nakel
*   Date - 4/20/2016
*/

module FinalFrontier {

    export class LevelOne extends MainMenuState {

        constructor() {
            super();
        }

        preload() {

            this.game.load.image('player_one', '/Graphics/redRazor.png');
            this.game.load.image('commonE', '/Graphics/scytharWarship.png');
            this.game.load.image('user_main_weapon', '/Graphics/phasers.png');
            this.game.load.image('commonW', '/Graphics/plasmaBolts.png');
            this.game.load.image('health', '/Graphics/recovery.png');
            this.game.load.image('rockets', '/Graphics/rockets.png');

        }

        //This will take our preloaded data, and create a state
        create() {

        }

        update() {

        }

    }

}