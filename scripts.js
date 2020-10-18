// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    

    function confirmTakeOff () {
        let confirmWindow = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirmWindow) {
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


}

window.onload = init;



