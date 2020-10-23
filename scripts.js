// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    

    function confirmTakeOff () {
        let confirmTakeOffWindow = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirmTakeOffWindow) {
                shuttleBackground.style.backgroundColor = "blue";
                flightStatus.innerHTML = "Shuttle in flight.";
                spaceShuttleHeight.innerHTML = "10000";
            }
    }

        let takeOff = document.getElementById("takeoff");
        takeOff.addEventListener("click", confirmTakeOff);


    function shuttleLanding () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        shuttleBackground.style.backgroundColor = "green"
        flightStatus.innerHTML = "The shuttle has landed.";
        spaceShuttleHeight.innerHTML = "0";
    }

    let landing = document.getElementById("landing");
    landing.addEventListener("click", shuttleLanding);

    function shuttleAbort () {
        let confirmAbortWindow = window.confirm("Confirm that you want to abort the mission.");
            if (confirmAbortWindow) {
                shuttleBackground.style.backgroundColor = "green"
                flightStatus.innerHTML = "Mission aborted.";
                spaceShuttleHeight.innerHTML = "0";                
            }
    }

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", shuttleAbort);

    let rocket = document.getElementById("rocket");
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position = "relative";
    rocketImage.style.top = '20px';
    rocketImage.style.left = '20px';
    rocketImage.style.visibility='visible';

    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    let vertPosString = rocketImage.style.top;
    let vertPos = Number(vertPosString.split('px')[0]);
    let horizonPosString = rocketImage.style.left;
    let horiPos = Number(horizonPosString.split('px')[0]);

    up.addEventListener('click', (event) => {
        if(vertPos > -10) vertPos -= 10;
        rocketImage.style.top = `${vertPos}px`;
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    down.addEventListener('click', (event) => {
        if(vertPos < 250) vertPos += 10;
        rocketImage.style.top = `${vertPos}px`;
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    left.addEventListener('click', (event) => {
        if(horiPos > -160) horiPos -= 10;
        rocketImage.style.left = `${horiPos}px`;
    });

    right.addEventListener('click', (event) => {
        if(horiPos < 160) horiPos += 10;
        rocketImage.style.left = `${horiPos}px`;
    });


}
// bird.style.left += "20px"
window.onload = init;


    
//
// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

//     The rocket image should move 10 px in the direction of the button that was clicked.
//     If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.



