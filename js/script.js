window.addEventListener('load', function () {
  var songList = document.getElementsByClassName('navBar-songlist')[0].style.display,
    email = document.getElementsByClassName('email')[0],
    songSection = document.getElementsByClassName('song-section')[0].style.display;

  
  songList.addEventListener('load', function () {
    document.getElementsByClassName('song-section')[0].style.display = 'flex';
  
  // songList.addEventListener('click', function () {
  //   document.getElementsByClassName('song-section')[0].style.display = 'flex'
  // });
 });
});