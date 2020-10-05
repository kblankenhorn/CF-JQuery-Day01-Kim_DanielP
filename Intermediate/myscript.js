$(document).ready(function() {
    //$("form").remove(); //Remove the form from the page
    //$("form").css("display", "none"); //Remove the form from the page

    $("article").prepend("<div>Test</div>", "<div>Test</div>", "<div>Test</div>", "<div>Test</div>", "<div>Test</div>"); //Create 5 new DIVs in the article element
    $("#msg").val("Search for..."); //Within the input field change the value to "Search for..."
    $("div").addClass("box"); //Add a class name of "box" to each new DIV
    $("p a").attr("href", "https://www.codefactory.wien"); //Change the link to "www.codefactory.wien"
});