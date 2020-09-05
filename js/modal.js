;(function(window, document, undefined) {
    'use strict';
    const modalOpen = document.querySelectorAll('[href="#modal"]');
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');

    modalOpen.forEach(function(evt) {
        evt.addEventListener('click', function() {
            openContact();
        }, false)
    })

    function openContact() {
       modalOpen.forEach(function(e) {
            e.getAttribute('aria-expanded') == 'false' 
                ? e.setAttribute('aria-expanded', true) 
                : e.setAttribute('aria-expanded', false);
        });
        modal.classList.toggle('activated');
        overlay.classList.toggle('activated');
    }

    window.addEventListener('click', function(e) {
        let outsideClick = document.querySelector('.modal-overlay.activated');
        if (e.target === outsideClick) {
            openContact();
        }
       
    }, false)
})(window, document);

;(function(window, document, undefined) {
    'use strict';
    const labels = document.querySelectorAll('[id^="label-"]');
   window.addEventListener('click', function(el) {
       el.preventDefault;
       function doIf(mycondition, action) {
           if(mycondition) {
                action() 
           }
       } //doIf
        for (let i = 0; i < labels.length; i++) {
           const elem = el.target.nextElementSibling;
           
           doIf(elem.id === 'label-1', function() {
               elem.classList.add('active')
            })
           doIf(elem.id === 'label-2', function() {
            elem.classList.add('active')
            })
            doIf(elem.id === 'label-3', function() {
            elem.classList.add('active')
            })
        }
       
   })
    
   
    
    
    
})(window, document);