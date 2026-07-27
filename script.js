    // Reveal animation
    const boxes = document.querySelectorAll(".box");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
            else entry.target.classList.remove("show");
        });
    }, { threshold: 0.1 });
    boxes.forEach(box => observer.observe(box));

    // Progress bar & Mini-header
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        document.getElementById("scroll-progress").style.width = (scrollTop / scrollHeight) * 100 + "%";
        document.getElementById("mini-header").style.display = window.scrollY > 300 ? "block" : "none";
    });





let currentSlideIndex = 0;

// Chuyển slide Left/Right
function changeSlide(direction) {
    const track = document.getElementById('sliderTrack');
    const totalSlides = track.children.length;

    currentSlideIndex += direction;

    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }

    const amountToMove = -currentSlideIndex * 100;
    track.style.transform = `translateX(${amountToMove}%)`;
}
