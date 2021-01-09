/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["No brainer", "Jackie Chan", "Better Now"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artist = ["Dj Khaled", "Tiesto", "Post Malone"];

var lengths = ["4:21", "3:36", "3:52"];

var links = ["https://www.youtube.com/embed/3i2BsXJyXUk", "https://www.youtube.com/embed/t6vBhvlKxMA", "https://www.youtube.com/embed/0tTn95TLIaw"];

function loadSongs() {
    songs.forEach(function(songs) {
        $('#songs').append('<p>' + songs + '</p>');


    });
    artist.forEach(function(artist) {
        $('#artists').append('<p>' + artist + '</p>');

    });
    lengths.forEach(function(length) {
        $('#lengths').append('<p>' + length + '</p>');
    });

    links.forEach(function(link, index) {
        $('#links').append('<img song=' + index + ' src="play.png">');
    });

}
loadSongs();



$("img").on("click", function() {
    console.log("hello")
    var attr = $(this).attr("song");
    console.log($(this));
    $('.song').html('<iframe src=' + ' " ' + links[attr] + ' " ' + 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

/*$('img').click(function(){
var attr=$(this).attr("song");
console.log($(this));
$('.song').html('<iframe src=' + ' " ' + links[attr] + ' " ' + 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

});
*/

function emptySongInfo() {
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

    // Use jQuery to empty all of the remaining divs


}


function addSongInfo() {
    songs.push($('#song').val());
    artist.push($('#artist').val());
    lengths.push($('#length').val());
    links.push($('#link').val());

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    loadSongs();

});
