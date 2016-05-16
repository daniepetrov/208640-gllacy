/*!
 * Скрипты для модального окна
 */

var link = document.querySelector(".contact-us");

var popup = document.querySelector(".modal-content");

var overlay = document.querySelector(".modal-overlay");

var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.remove("modal-content-show");
   overlay.classList.remove("modal-overlay-show");
 });

