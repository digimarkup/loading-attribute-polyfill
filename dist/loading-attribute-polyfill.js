var e,t={rootMargin:"0px 0px 256px 0px",threshold:.01,lazyImage:'img[loading="lazy"]',lazyIframe:'iframe[loading="lazy"]'},r="loading"in HTMLImageElement.prototype&&"loading"in HTMLIFrameElement.prototype,a="onscroll"in window;window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"IntersectionObserver"in window&&(e=new IntersectionObserver(function(e,t){e.forEach(function(e){if(0!==e.intersectionRatio){var r=e.target;t.unobserve(r),n(r)}})},t));var o="requestAnimationFrame"in window?window.requestAnimationFrame:function(e){e()};function n(e){var t,r,a=[];"picture"===e.parentNode.tagName.toLowerCase()&&((r=(t=e.parentNode).querySelector("source[data-lazy-remove]"))&&t.removeChild(r),a=Array.prototype.slice.call(e.parentNode.querySelectorAll("source"))),a.push(e),a.forEach(function(e){e.hasAttribute("data-lazy-srcset")&&(e.setAttribute("srcset",e.getAttribute("data-lazy-srcset")),e.removeAttribute("data-lazy-srcset"))}),e.setAttribute("src",e.getAttribute("data-lazy-src")),e.removeAttribute("data-lazy-src")}function i(t){var o=document.createElement("div");for(o.innerHTML=function(t){var o=t.textContent||t.innerHTML,n="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 "+((o.match(/width=['"](\d+)['"]/)||!1)[1]||1)+" "+((o.match(/height=['"](\d+)['"]/)||!1)[1]||1)+"%27%3E%3C/svg%3E";return!r&&a&&(o=void 0===e?o.replace(/(?:\r\n|\r|\n|\t| )src=/g,' lazyload="1" src='):(o=o.replace("<source",'<source srcset="'+n+'" data-lazy-remove="true"></source>\n<source')).replace(/(?:\r\n|\r|\n|\t| )srcset=/g," data-lazy-srcset=").replace(/(?:\r\n|\r|\n|\t| )src=/g,' src="'+n+'" data-lazy-src=')),o}(t);o.firstChild;){var n=o.firstChild;if(!r&&a&&void 0!==e&&n.tagName&&("img"===n.tagName.toLowerCase()||"picture"===n.tagName.toLowerCase()||"iframe"===n.tagName.toLowerCase())){var i="picture"===n.tagName.toLowerCase()?o.querySelector("img"):n;e.observe(i)}t.parentNode.insertBefore(n,t)}t.parentNode.removeChild(t)}var c=function(){document.querySelectorAll("noscript.loading-lazy").forEach(function(e){return i(e)}),void 0!==window.matchMedia&&window.matchMedia("print").addListener(function(e){e.matches&&document.querySelectorAll(t.lazyImage+"[data-lazy-src],"+t.lazyIframe+"[data-lazy-src]").forEach(function(e){n(e)})})};/comp|inter/.test(document.readyState)?o(c):"addEventListener"in document?document.addEventListener("DOMContentLoaded",function(){o(c)}):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),module.exports={prepareElement:i};
//# sourceMappingURL=loading-attribute-polyfill.js.map
