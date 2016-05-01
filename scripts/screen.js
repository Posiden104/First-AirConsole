var airconsole;

var p_height;
var scrn_player;
var grav;
var vspd;
var hangTime;

function setupGame(){
  p_height = 100;
  scrn_player = document.getElementById("player");
  grav = 10;
  vspd = 0;
  hangTime = 0;
}

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

            if(p_height >= 650){
              vspd = -50;
            }

            var box = document.getElementById("shape");
            if (data.move != 0) {
                box.style.background = "#0000FF";
            } else {
                box.style.background = "#FF0000";
            }
        }
    };
}

function loop(){
  vspd += 2;
  vspd = Math.min(vspd, 0);
  p_height += vspd;

  if(p_height < 650){
    hangTime += .1;
    p_height += (1 * grav * hangTime);
  } else {
    hangTime = 0;
  }

  if(p_height > 650) {
    p_height = 650;
  }
  scrn_player.style.top = p_height + 'px';

  document.getElementById("parag").innerHTML = p_height;

  // Basically says "draw the screen, and return to function 'loop' "
  requestAnimationFrame(loop);
}

/**
 * body.onload function.
 */
function init() {
    setupConsole();
    setupGame();
    requestAnimationFrame(loop);
}
