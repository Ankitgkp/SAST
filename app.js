const textElement = document.querySelector(".text");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY; 
    const maxScroll = document.body.scrollHeight - window.innerHeight; 
    const opacity = 1 - scrollTop / maxScroll; 


    textElement.style.opacity = Math.max(0, opacity); 
});

document.addEventListener('DOMContentLoaded', function () {
    const imageWrapper = document.querySelector('.image-wrapper');
    const rectangle = document.querySelector('.image-rectangle');
    const image = document.querySelector('.scroll-image');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
       
                imageWrapper.classList.add('animate');
            } else {
          
                imageWrapper.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2 
    });

    observer.observe(imageWrapper);
});



const video = document.getElementById("scrollVideo");
let lastScrollY = window.scrollY;
let animationFrameId;

function updateVideoPlayback() {
  const scrollY = window.scrollY;
  const delta = scrollY - lastScrollY;

  if (delta !== 0) {
    const direction = delta > 0 ? 1 : -1; // 1 for down, -1 for up
    const newTime = video.currentTime + direction * 0.02; // Smaller increment for smoothness
    video.currentTime = Math.max(0, Math.min(video.duration, newTime));
  }

  lastScrollY = scrollY;
  animationFrameId = null; // Allow new requests
}

window.addEventListener("scroll", () => {
  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(updateVideoPlayback);
  }
});
