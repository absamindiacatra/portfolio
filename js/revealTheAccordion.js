
(function() {
    'use strict';
    let tablinks;
    let tabpanels;
    window.onload=function() {
        tablinks = document.querySelectorAll('#tabs li');//buttons
        tabpanels = document.querySelectorAll('.accord-content div');//content
        displayPanel(tablinks[0]);
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].onclick = function() { 
                displayPanel(this); 
                return false;
            }
            tablinks[i].onfocus = function() { 
                displayPanel(this); 
                return false;
            }
        }
    };
    
    function displayPanel(tabToActivate) {
        for (let i = 0; i < tablinks.length; i++) {
            if (tablinks[i] == tabToActivate) {
                tabpanels[i].classList.add("open");
            } else {
                tabpanels[i].classList.remove("open");
            }
        }
    }
})();



(function() {
    window.addEventListener("load", function () {
               
        const observer = new IntersectionObserver(function(entries) {
            if(entries[0].intersectionRatio > 0 && entries[0].intersectionRect.height > 2 && entries[0].intersectionRatio > 0 && entries[0].intersectionRect.height < 70) {
                entries[0].target.classList.add('fadeInUp');
                entries[0].target.classList.add('animate')
            } 
            if(entries[0].intersectionRatio >= 1) {
                entries[0].target.classList.remove('fadeInUp');
                entries[0].target.classList.remove('animate')
            }   
        },
        {
            "threshold":[0, 1]
        })
        // TODO: Start observing the target element
        observer.observe(document.getElementById('my-card'));
        observer.observe(document.getElementById('my-self'));
        observer.observe(document.getElementById('accr'));
        observer.observe(document.getElementById('the-skills'));
    })
})();