document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        allowTouchMove: false,
    });

    var arrowLeft = document.querySelector('.arrow-left');
    var arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', function(event) {
        event.preventDefault();
        swiper.slidePrev();
    });

    arrowRight.addEventListener('click', function(event) {
        event.preventDefault();
        swiper.slideNext();
    });

    var modal = document.getElementById("modal");
    var iframe = document.getElementById("modal-iframe");
    var span = document.getElementsByClassName("close")[0];

    document.querySelector('.navcor').addEventListener('click', function() {
        iframe.src = "contents/ROG/rog.html";
        modal.style.display = "block";
    });

    document.querySelector('.navcv').addEventListener('click', function() {
        iframe.src = "contents/CV/cv.html";
        modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
        iframe.src = "";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    }
});
