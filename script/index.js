var modal = false;

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
  document.getElementById("modal-video").style.display = "none"
}