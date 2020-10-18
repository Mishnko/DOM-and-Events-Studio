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
        alertLandingWindow = window.alert("The shuttle is landing. Landing gear engaged.")
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

// FIXME:
    function move () {
        rocket.style.left += "10px";
    }

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", move);
}
// bird.style.left += "20px"
window.onload = init;


    
//
// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

//     The rocket image should move 10 px in the direction of the button that was clicked.
//     If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.



