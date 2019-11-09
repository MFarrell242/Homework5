var todayDate = document.querySelector("#today")
var lookingAt = document.querySelector("#working")
$(function(){
    $(todayDate).text(moment().format('MM/DD/YYYY, h:mm'));
    $(lookingAt).text(moment().format('MM/DD/YYYY'));
});

var editButton = document.querySelectorAll(".btn-secondary")
$(editButton).on("click", function(){
    $(this).parent().children('.rounded').text(prompt("What you do?"));
});

