const papers = document.querySelectorAll(".paper");

papers.forEach(paper => {
    paper.addEventListener("touchstart", startDrag, { passive: false });

    function startDrag(e) {
        e.preventDefault();
        let startX = e.touches[0].clientX - paper.offsetLeft;
        let startY = e.touches[0].clientY - paper.offsetTop;

        document.addEventListener("touchmove", drag, { passive: false });
        document.addEventListener("touchend", stopDrag);

        function drag(e) {
            let x = e.touches[0].clientX - startX;
            let y = e.touches[0].clientY - startY;
            paper.style.transform = `translate(${x}px, ${y}px) rotateZ(-5deg)`;
        }

        function stopDrag() {
            document.removeEventListener("touchmove", drag);
            document.removeEventListener("touchend", stopDrag);
        }
    }
});
