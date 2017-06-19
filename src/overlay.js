
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//image to overlay
$overlay.append($image);

//caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture click event on a link to an img
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the img linked
  $image.attr("src", imageLocation);
  
  $overlay.show();
  
  //Get childs alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();
});










