

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
var tableHeaderCnt = ['Hour','Event','Enter'];
var presentTimeColourClass = 'present';
var currentHourColourClass = 'hour'
var pastTimeColourClass = 'past';
// GLOBAL VARS END

// FUNCTIONS START

//Get current day format it and add to correct html element
function currentDay() {
    var currentDayDisp = moment().format('dddd, MMMM Do');
    var currentDayEl = $('#currentDay');

    // console.log(currentDayEl);
    currentDayEl.text(currentDayDisp);
};

function checkCurrentTime (){
    var currentTime = moment().hour

    return(currentTime);
};

function applyColor(){
    var elementsToChng = '';
    var classToApply = '';

    for () {
        elementsToChng[].addClass(classToApply)
    }
}

function formatScheduler(){
    var allTextareas = $('th textarea');
    var currentHourTextarea = '';
    var pastTextareas = '';

};


//Construct the workday planner view
function displayPlanner() {
    var busTime = moment(workWeekStartHr,'HH');
    var workWeekDataIdx = 0;

    var plannerParentBlk = $('.container');
    var targetEle = '';
    var tableEle = document.createElement('table');
    var tableRowEle = '<tr></tr>';
    var tableHeadEle = '<th></th>';
    // var tableHeadEle = 'th';
    var tableDataEle = document.createElement('td');

    //Add table ele after div with class .container
    plannerParentBlk.append(tableEle);

    //Reset targetele to next level ele e.g. <table>
    targetEle = $(tableEle);

    //Add row ele after table ele
    targetEle.append(tableRowEle);

    //Write out table header
    for (var tableHeaderCntr = 0; tableHeaderCntr < tableHeaderCnt.length; tableHeaderCntr++)  {

        // var targetEleHBlk = $(tableRowEle);
        var targetEleHBlk = $('tr');
        targetEleHBlk.append(tableHeadEle);

        targetEleHBlk = $('th').eq(tableHeaderCntr);

        //Add text to header ele
        targetEleHBlk.text(tableHeaderCnt[tableHeaderCntr]);
    };

    // Create target var and assign to tr created for header data
    var targetElePBlk = $('tr').eq(workWeekDataIdx);

    //console.log (targetElePBlk);
    targetElePBlk.after(tableRowEle);
    //Write out planner 
    while (busTime.hour() <= workWeekEndHr ) {
        var currentTblRow ='';
        var currentTblRowHedr = '';
        // console.log(busTime.hour());
        workWeekDataIdx++
        // Create planner row data based on current hour
        // workWeekData[workWeekDataIdx] = {
        //     hour: busTime,
        //     event: ''
        //     };
        
        // Add row element to previous row element containing header details
        // targetElePBlk.append(tableRowEle);
        currentTblRow = $('tr:eq(workWeekDataIdx)');

        // for (var tableHeaderCntr = 0; tableHeaderCntr < tableHeaderCnt.length; tableHeaderCntr++)  {
            // Add header element to row element
            currentTblRow.append(tableHeadEle);

    //         currentTblRowHedr = $('tr:eq(workWeekDataIdx) th:eq(0)');
    // console.log(currentTblRowHedr);
    //         //Add text to header ele
    //         currentTblRowHedr.text(busTime.hour());
        // };


        // console.log (busTime.format('ddd Do hh:mm a'));
        currentTblRow.after(tableRowEle);
        busTime.add(1,'hours');
    };

};
// FUNCTIONS END

// MAIN START

currentDay()
// displayPlanner();
// console.log (workWeekData[0].hour);

// MAIN END