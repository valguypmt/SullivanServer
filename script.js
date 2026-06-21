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

