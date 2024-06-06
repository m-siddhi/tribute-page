let scroll = document.getElementById("scroll");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
};

scroll.onclick = function() {
    window.scrollTo({ top:0, behavior: 'smooth'});
};