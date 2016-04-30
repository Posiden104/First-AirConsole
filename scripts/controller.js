var airconsole;
/**
 * Sets up the communication to the screen.
 */
function init () {
    airconsole = new AirConsole({
        'orientation': 'portrait'
    })

    /*
     * Checks if this device is part of the active game.
     */
    airconsole.onActivePlayersChange = function (player) {
        var div = document.getElementById('parag');
        if (player !== undefined) {
            div.innerHTML = (['Left Player', 'Right Player'][player]);
        } else {
            div.innerHTML = 'Its a 2 player game!';
        }
    };
    /*
     * Makes the device vibrate if the screen says so.
     */
    airconsole.onMessage = function (from, data) {

    }
}

/**
 * Tells the screen to move the paddle of this player.
 * @param amount
 */
function move (amount) {
    airconsole.message(AirConsole.SCREEN, {
        move: amount
    });
}
