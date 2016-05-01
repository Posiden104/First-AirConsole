var airconsole;

var height;

function setupConsole() {
    airconsole = new AirConsole();

    airconsole.onConnect = function(device_id) {
        airconsole.setActivePlayers(2);
    };

    airconsole.onDisconnect = function(device_id) {

    };

    airconsole.onMessage = function(device_id, data) {
        var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
        if (player != undefined && data.move !== undefined) {
            document.getElementById("parag").innerHTML = data.move;

            var box = document.getElementById("shape");
            var player = document.getElementById("player");
            var topPos = player.offsetTop;

            if (data.move != 0) {
                box.style.background = "#0000FF";
                player.style.top = (topPos + 10) + 'px';
            } else {
                box.style.background = "#FF0000";
            }
        }
    };

    height = 100;
}

function loop(){

}

/**
 * body.onload function.
 */
function init() {
    setupConsole();
    loop();
}
