const papers = document.querySelectorAll(".paper");

papers.forEach(paper => {
    paper.addEventListener("mousedown", startDrag);

    function startDrag(e) {
        e.preventDefault();
        let startX = e.clientX - paper.offsetLeft;
        let startY = e.clientY - paper.offsetTop;

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDrag);

        function drag(e) {
            let x = e.clientX - startX;
            let y = e.clientY - startY;
            paper.style.transform = `translate(${x}px, ${y}px) rotateZ(-5deg)`;
        }

        function stopDrag() {
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("mouseup", stopDrag);
        }
    }
});
