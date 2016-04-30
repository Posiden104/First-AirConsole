var airconsole;

/**
 * Sets up the communication to game pads.
 */
function setupConsole() {
    airconsole = new AirConsole();

    airconsole.onConnect = function(device_id) {
        //checkTwoPlayers();
        airconsole.setActivePlayers(2);
    };

    airconsole.onDisconnect = function(device_id) {
        /*
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
        if (player != undefined) {
            // Player that was in game left the game.
            // Setting active players to length 0.
            airconsole.setActivePlayers(0);
        }
        checkTwoPlayers();
        */
    };

    airconsole.onMessage = function(device_id, data) {
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
        if (player != undefined && data.move !== undefined) {
            document.getElementById("parag").innerHTML = data.move;
            var box = document.getElementById("shape");
            if (data.move != 0) {
                box.style.background = "#00FF00";
            } else {
                box.style.background = "#FF0000";
            }
        }
    };

}

/**
 * body.onload function.
 */
function init() {
    setupConsole();
}
