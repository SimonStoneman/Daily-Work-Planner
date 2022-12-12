

// Acceptance Criteria

// The app should:

// Display the current day at the top of the calendar when a user opens the planner.

// Present timeblocks for standard business hours when the user scrolls down.

    // create a function to write out html element for each hour in standard business hours (9am-5pm)
    // mark elements with correct class for display formating
        // create a loop iterate through 9-5 

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    // Use given css classes to colour 
// Allow a user to enter an event when they click a timeblock.
    //create an event listener on the list block, 
    //target the list item element that the user clicks 
    //enable writting on that ele
    //once saved set to read-only

// Save the event in local storage when the save button is clicked in that timeblock.
    //create an event listener on the save button for the click list item
    //save to local storage

// Persist events between refreshes of a page.

    //prevent refresh of page session from clearing content, but preventing default behaviour


//Global Items

    // local storage def
    // which element clicked
    // working hours 


// GLOBAL VARS START
var workWeekStartHr = '09';
var workWeekEndHr = '17';
var workWeekData = [];
// GLOBAL VARS END

// FUNCTIONS START

//Get current day format it and add to correct html element
function currentDay() {
    var currentDayDisp = moment().format('dddd, MMMM Do');
    var currentDayEl = $('#currentDay');

    console.log(currentDayEl);
    currentDayEl.text(currentDayDisp);
};

//Construct the workday planner view
function displayPlanner() {
    var busTime = moment(workWeekStartHr,'HH');

    while (busTime.hour() <= workWeekEndHr ) {
        console.log (busTime.format('ddd Do hh:mm a'));
        busTime.add(1,'hours');
    };

};
// FUNCTIONS END

// MAIN START

currentDay()
displayPlanner();

// MAIN END