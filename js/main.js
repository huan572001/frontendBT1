// Initialize and add the map
function initMap() {
    // Your Location
    const loc = { lat: 45.06065, lng: -83.43146 };

    // Centerd map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 14
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Stick menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});