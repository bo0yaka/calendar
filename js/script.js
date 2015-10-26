var today = new Date();
var currentDayInMonth = today.getDate();
var currentDay = today.getDay();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

var February = function () {
	if (currentYear % 4 === 0)
		return "29";
	else
		return "28";
};

var daysEachMonth = ["31", February(), "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
var daysInMonth = daysEachMonth[currentMonth];

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var tableFill = "<table>" + "<tr>";
    for (var i in days){
        tableFill += "<td>" + days[i] + "</td>";
    }
    tableFill += "</tr>" + "</table>";

document.getElementById("daysInWeek").innerHTML = tableFill;

var calendarRows = 5
var calendarFields = 7

var calendarGenerator = function() {
    var counter = 1;
    var calendarFill = "<table>";
    for(i=0; i<calendarRows; i++) {
        calendarFill += "<tr>"
        for(j=0; j<calendarFields; j++) {
            if (counter <= daysInMonth)
                calendarFill += "<td id='" + counter + "'>" + counter +"</td>"
            else
                calendarFill += "<td>" + "</td>"
            counter++;
        }
        calendarFill += "</tr>";
        
    }

    calendarFill += "</table>"
	return calendarFill;
}

document.getElementById("calendar").innerHTML = calendarGenerator();

var weekdayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var writeTodaysDate = function () {
    document.getElementById("todayDate").innerHTML = "Today is " + weekdayNames[currentDay] + " the " + currentDayInMonth + "th of " + monthNames[currentMonth] + " " + currentYear;
    highlightCurrentDay();
}

var getIdOfCurrentDay = document.getElementById("" + currentDayInMonth + "");
function highlightCurrentDay() {
    getIdOfCurrentDay.style.color = "red";
    getIdOfCurrentDay.style.border = "2px solid red";
}


