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
  function copyIP(e) {
    const ip = "countries-sullivan.gl.joinmc.link";
    const tooltip = document.getElementById("cursor-tooltip");

    navigator.clipboard.writeText(ip).then(() => {
        // Find where the user clicked
        tooltip.style.left = e.clientX + "px";
        tooltip.style.top = (e.clientY - 15) + "px";
        
        // Show the message
        tooltip.style.opacity = "1";

        // Hide it after a second
        setTimeout(() => {
            tooltip.style.opacity = "0";
        }, 1000);
    });
}
