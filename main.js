function goTop(elm, time) {
    const target = document.getElementById(elm);
    target.addEventListener('click', function () {
        const scrollY = window.pageYOffset;
        const step = time / scrollY > 1 ? 10 : 100;
        const timestep = time / scrollY * step;
        const intervalID = setInterval(scrollTop, timestep);

        function scrollTop() {
            const currentY = window.pageYOffset;
            if (currentY === 0) {
                clearInterval(intervalID);
            } else {
                scrollBy(0, -step)
            }
        }
    });
}
goTop('topBtn', 800);

