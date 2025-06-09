function startCounter(counter) {
    let target = parseInt(counter.getAttribute("data-target"));
    let count = 0;
    let speed = Math.ceil(target / 100);
    let interval = setInterval(() => {
        count += speed;
        counter.innerText = count;
        if (count >= target) {
            counter.innerText = target;
            clearInterval(interval);
        }
    }, 35);
}

function checkScroll() {
    let counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        let position = counter.getBoundingClientRect().top;

        if (position < window.innerHeight && counter.innerText == "0") {
            startCounter(counter);
        }
    });
}
window.addEventListener("scroll", checkScroll);
