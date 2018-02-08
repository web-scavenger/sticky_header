window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > '99') {
        document.getElementById('header').classList.add('sticky__header');
    }
    else {
        document.getElementById('header').classList.remove('sticky__header');
    }
}
$('#mobile__btn').click(function () {
    $('.nav').toggle('slow');
})