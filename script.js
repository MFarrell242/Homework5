var todayDate = document.querySelector("#today");
var lookingAt = document.querySelector("#working");
var days = document.querySelector(".days");
var daysDrop = document.querySelector(".days");
var calendarItem = document.querySelectorAll(".time");
$(function(){
    $(todayDate).text(moment().format('MM/DD/YYYY, h:mm'));
    $(lookingAt).text(moment().format('MM/DD/YYYY'));
    for (q = 1; q < 32; q++) {
        let newDay = $("<button>")
        $(newDay).addClass("dropdown-item aDay");
        $(newDay).text(q);
        $(newDay).attr("type", "button");
        $(newDay).attr("value", q);
        $(daysDrop).append(newDay);
    }
    $(calendarItem).each(function(){
        if (+this.id === +moment().format('h')) {
            $(this).css("background-color", "green");
        }
        else if (+this.id === +moment().format('h') + 1) {
            $(this).css("background-color", "red");
        }
    })
});

var editButton = document.querySelectorAll(".btn-secondary");
$(editButton).on("click", function(){
    $(this).parent().children('.rounded').text(prompt("What you do?"));
});

var newDate = document.querySelectorAll(".dropdown-item");
var toMo = document.querySelector("#goto1");
var toYr = document.querySelector("#goto3");
var toDay = document.querySelector("#goto2");
$(newDate).on("click", function(){
    if ($(this).hasClass("Yr")) {
        $(toYr).text("/ " + this.value);
    }
    else if ($(this).hasClass("Mo")) {
        console.log(this);
        $(toMo).text(this.value);
    }
    else {
        console.log(this.value);
        $(toDay).text("/ " + this.value);
        // okay so I think what's happening here is that newDate is being set 
        // BEFORE the days list is filled, which means it's ignored. Hmm. 
        // could get my code wet, but that'd be shit, so no thank you. Bad enough on the months.
    }
});
