// src/touchDetection.js
(function (window, document) {
    var htmlElement = document.documentElement;
    var className = 'w-mod-';
    
    htmlElement.classList.add(`${className}js`);
  
    // Check for touch support
    if ('ontouchstart' in window) {
        htmlElement.classList.add(`${className}touch`);
    }
})(window, document);
