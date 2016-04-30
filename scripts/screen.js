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

    };

    airconsole.onMessage = function(device_id, data) {
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
        if (player != undefined && data.move !== undefined) {
            //appendTextToElement(document.getElementById("parag"), device_id + " says " + data.move);
            document.getElementById("parag").innerHTML = data.move;
            var box = document.getElementById("shape");
            if (data.move != 0) {
                box.style.background = "#0000FF";
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

var appendTextToElement = function(parent_ele, text) {
    var ele = document.createElement('DIV');
    ele.innerHTML = text;
    parent_ele.appendChild(ele);
};
