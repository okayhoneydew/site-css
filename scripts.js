<script>
document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const prevIcon = document.querySelector('.prev');
    const nextIcon = document.querySelector('.next');
    const slider = document.querySelector('.slider');

    // Initialize Hammer.js on the slider
    const hammer = new Hammer(slider);

    // Event listener function for swipe left
    hammer.on('swipeleft', function() {
        activate({ target: nextIcon }); // Simulate click on nextIcon
    });

    // Event listener function for swipe right
    hammer.on('swiperight', function() {
        activate({ target: prevIcon }); // Simulate click on prevIcon
    });

    // Event listener function
    function activate(e) {
        const items = slider.querySelectorAll('.new-item');

        // Ensure there are items in the slider
        if (items.length > 0) {
            // Move the first or last item based on the clicked icon
            if (e.target.classList.contains('prev')) {
                slider.prepend(items[items.length - 1]);
            } else if (e.target.classList.contains('next')) {
                slider.append(items[0]);
            }
        }
    }

    // Adding event listeners to prevIcon and nextIcon
    prevIcon.addEventListener('click', activate);
    nextIcon.addEventListener('click', activate);
});
</script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const player = new Plyr('video', {captions: {active: true}});
    window.player = player;
  });
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Find the volume input element by its data-plyr attribute
    var volumeInput = document.querySelector('input[data-plyr="volume"]');
    
    // Set the value of the volume input to 1 (100%)
    if (volumeInput) {
        volumeInput.setAttribute('aria-valuenow', '100');
        volumeInput.value = '1';
    }
});
</script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const customButton = document.getElementById('button-widget-1710376551235');

    // Function to play or pause the Plyr player
    function togglePlayPause() {
      if (window.player.paused) {
        window.player.play();
      } else {
        window.player.pause();
      }
    }

    // Add click event listener to the custom button
    customButton.addEventListener('click', function(event) {
      // Prevent default form submission behavior
      event.preventDefault();
      
      // Toggle play/pause
      togglePlayPause();
    });
  });
</script>
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js"></script>


  document.addEventListener('DOMContentLoaded', function () {
    function animateHeading(entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        anime({
          targets: '#heading-widget-1710905677756',
          opacity: [0, 1],
          translateX: [30, -25, 10, -5],
          translateY: [0, entry.intersectionRatio * 50],
          easing: 'easeInOutQuad',
          duration: 1000,
        });
      }
    }

    const observer = new IntersectionObserver(animateHeading, {
      threshold: 1.0,
    });

    const headingWidget = document.querySelector('#heading-widget-1710905677756');
    observer.observe(headingWidget);
  });
</script>
