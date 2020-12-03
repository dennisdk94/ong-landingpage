var modal = false;
var video = document.getElementById("myVideo");

document.getElementById("menu-mobile").onclick = openModal;

document.getElementById("close-video").onclick = closeVideo;

function openModal() {
  if(modal) {
     document.getElementById("menu-list").style.display = "none";
     modal = false;
  } else {
    document.getElementById("menu-list").style.display = "block";
    modal = true;
  }
}

function openVideoPlayer() {
  document.getElementById("modal-video").style.display = "block"
}

function closeVideo() {
  stopVideo();
  document.getElementById("modal-video").style.display = "none";
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}