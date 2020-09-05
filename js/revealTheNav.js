;(function(window, document, undefined) {
	'use strict';
	
	const supports = 'querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('_');
    if(!supports) return;

    //polyfill 'match' (Global)
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
    };

    
    //global var for offsetTop (Global)
    var getOffsetTop = function ( elem ) {
            var location = 0;
            if (elem.offsetParent) {
                do {            
                    location += elem.offsetTop;            
                    elem = elem.offsetParent;        
                } while (elem);    
            }
            return location >= 0 ? location : 0;
        };
    /*example:
    var elem = document.querySelector( '#some-element' );
    var distance = getOffsetTop( elem );
    */


 //SCROLL NAV
 (function() {
	const scrollLink = document.querySelectorAll('#the-main-nav #nav ul.nav-elements li');
	const _the = document.querySelectorAll('[id^="the-"]');

	scrollLink.forEach(function(el) {
		
		el.addEventListener('click', function(e) {
			e.preventDefault();

			let navPick = e.target.hash;
			
				for (let i = 0; i < _the.length; i++) {
					const elementko = _the[i];
					if(navPick.slice(1) === elementko.id) {
						document.documentElement.scrollTo({
							top: getOffsetTop(elementko),
							behavior: 'smooth',
						});
					}
				}
			}, false);    
		})
})();




// NAVIGATION
(function() {
	const trigger = document.querySelector('.trigger');
	const REVEAL = document.querySelector('.main-nav');
	const MENUITEMS = REVEAL.querySelectorAll('nav a');
	const MENUARRAY = Array.apply(null, MENUITEMS);
	const SITE = document.querySelector('.site');
	let screenReaderText = document.querySelector('.trigger .screen-reader-text');
	
	// Toggle reveal class on body element, set aria-expanded and screen reader text on trigger:
	function revealMenu() {
		SITE.classList.toggle('reveal');
		trigger.getAttribute('aria-expanded') == 'false' ? trigger.setAttribute('aria-expanded', true) : trigger.setAttribute('aria-expanded', false);
		screenReaderText.innerHTML == 'Reveal menu' ? screenReaderText.innerHTML = 'Hide menu' : screenReaderText.innerHTML = 'Reveal menu';
	}
	
	// Hide nav area when focus shifts away:
	function catchFocus() {
		if ( trigger.getAttribute('aria-expanded') == 'true' && !( MENUARRAY.includes(document.activeElement) || document.activeElement === trigger ) ) {
			revealMenu();
		} else {
			return;
		}
	}
	
	// Hide nav area when touch or click happens elsewhere:
	function clickTarget(e) {
		if ( trigger.getAttribute('aria-expanded') == 'true' && !REVEAL.contains(e.target) ) {
			revealMenu();
		}
	}
	
	
	// Liten for clicks on trigger button:
	trigger.addEventListener('click', revealMenu, false);
	
	// Listen for focus changes:
	SITE.addEventListener('focusin', catchFocus, true);
	
	// Listen for clicks:
	SITE.addEventListener('click', function(e) { clickTarget(e); }, true);

})();

			



})(window, document);