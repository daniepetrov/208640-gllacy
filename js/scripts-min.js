var link=document.querySelector(".contact-us"),popup=document.querySelector(".modal-content"),overlay=document.querySelector(".modal-overlay"),close=popup.querySelector(".modal-content-close");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-content-show"),overlay.classList.add("modal-overlay-show")}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),overlay.classList.remove("modal-overlay-show"))});