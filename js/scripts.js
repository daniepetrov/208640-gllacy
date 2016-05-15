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







/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.16
 */
(function(){if(window&&window.addEventListener){var a=Object.create(null),m,h,d=function(){clearTimeout(h);h=setTimeout(m,100)},q=function(){},r=function(){var a;window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);window.MutationObserver?(a=new MutationObserver(d),a.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),q=function(){try{a.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",d,
!1)}catch(p){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),q=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)})};m=function(){function d(){--k;0===k&&r()}function p(b){return function(){!0!==a[b.base]&&b.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+b.hash)}}function m(b){return function(){var c=document.body,a=document.createElement("x");
b.onload=null;a.innerHTML=b.responseText;if(a=a.getElementsByTagName("svg")[0])a.setAttribute("aria-hidden","true"),a.style.position="absolute",a.style.width=0,a.style.height=0,a.style.overflow="hidden",c.insertBefore(a,c.firstChild);d()}}function h(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var c,e,f,g,n,k=0,b,l;window.XMLHttpRequest&&(n=new XMLHttpRequest,n=void 0!==n.withCredentials?XMLHttpRequest:XDomainRequest||void 0);if(void 0!==n){q();l=document.getElementsByTagName("use");
for(g=0;g<l.length;g+=1){try{e=l[g].getBoundingClientRect()}catch(t){e=!1}f=l[g].getAttributeNS("http://www.w3.org/1999/xlink","href").split("#");c=f[0];f=f[1];b=e&&0===e.left&&0===e.right&&0===e.top&&0===e.bottom;e&&0===e.width&&0===e.height&&!b?(c.length||!f||document.getElementById(f)||(c=""),c.length&&(b=a[c],!0!==b&&setTimeout(p({useEl:l[g],base:c,hash:f}),0),void 0===b&&(b=new n,a[c]=b,b.onload=m(b),b.onerror=h(b),b.ontimeout=h(b),b.open("GET",c),b.send(),k+=1))):b||(void 0===a[c]?
a[c]=!0:a[c].onload&&(a[c].abort(),a[c].onload=void 0,a[c]=!0))}l="";k+=1;d()}};window.addEventListener("load",function p(){window.removeEventListener("load",p,!1);h=setTimeout(m,0)},!1)}})();