var modal = false;

document.getElementById("menu-mobile").onclick = openModal;

function openModal() {
  if(modal) {
     document.getElementById("menu-list").style.display = "none";
     modal = false;
  } else {
    document.getElementById("menu-list").style.display = "block";
    modal = true;
  }
}