$(document).ready(function() {
    $("a").attr("href", "https://www.codefactory.wien"); //1. Change the href attribute to "www.codefactory.wien" for all links
    $("code").css("color", "red"); //2. Change the text color to red for the <code> tags
    $("ol>li").css("background-color", "#2a7b90"); //3. Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element
    $("textarea").attr("placeholder", "Express your opinion"); //4. Within the form, change the placeholder text to "Express your opinion"
    $("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"); //5. Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"
    $("blockquote").css({
        "background-color": "Orange",
        "font-style": "italic"
    }); //6. Change the background color to orange for all blockquote elements and the font-style to italic

    $("#logo").css("color", "black");
    $(".gray").css("color", "white"); //7. At the top of the page, change the logo color "Simple" to black and "Blog" to white
    $(".date").css("display", "none"); //8. Remove the "Oct 01, 2006" Date from the page
    $(".sidemenu:first").append(`<li><a href="#SampleTags">New Templates</a></li>`, `<li><a href="#SampleTags">Order Template</a></li>`, `<li><a href="#SampleTags">Contact Us</a></li>`); //9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"
    $("#sidebar p:first").text(`"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."`); //10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."
});