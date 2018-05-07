var a = "dwarf";
var players = ["Lance Stephenson", "Lebron James","Tim Duncan", "Shaquille O'Neal", "Glen Davis", "Michael Jordan", "Stephen Curry", "Kobe Bryant"];
var altimages = [];
window.onload = function displaybuttons() {
    console.log("sfwefwefw");
    
    for (var i = 0; i < players.length; i++) {
        $("#buttons").append("<button type = 'button' class='btn btn-info' value = '" + players[i] + "' onclick='getgiph("+'value'+")'>" + players[i] + "</button>");

    }

}
function getgiph(p){
    var player = p;
    altimages = [];
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+player+"&api_key=FqAts90Kyz891zZQvqDhD77F613BMXMN&limit=10";
   
    var div = document.getElementById('giphs');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
    $.ajax({url: queryURL, method:'GET'}).done(function(response){
        for (var i = 0; i < response.data.length; i++){
        var imgURL = response.data[i].images.fixed_height_still.url;
        altimages.push(response.data[i].images.fixed_height.url);
        $("#giphs").append("<p>Rating: " + response.data[i].rating + "</p>");
        $("#giphs").append("<img id = "+i+" class = 'image' src = '" + imgURL + "'>");
        
        
        }
    })


}
function addnewplayer(){
    var newplayer = $("#newname").eq(0).val();
    players.push(newplayer)
    $("#buttons").append("<button type = 'button' class='btn btn-info' value = '" + players[players.length-1] + "' onclick='getgiph("+'value'+")'>" + players[players.length-1] + "</button");
}

$(document).on('click', '.image',function(){
  var id = $(this).attr('id');
  var temp = $(this).attr('src');
  $(this).attr('src',altimages[id]);
  altimages[id] = temp;
})