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
    // event listener for click
    //upon click perform the function of opening a window.
}

window.onload = init;

// When the "Take off" button is clicked, the following should happen:

//     A window confirm should let the user know "Confirm that the shuttle is ready for takeoff."

//
