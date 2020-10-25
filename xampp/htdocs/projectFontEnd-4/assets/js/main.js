$('.team .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// xác định 3 thứ: button, menu, class
var menu = {
    init: function() {
        this.clickShowMenu('.humberger', '.header__menu', 'showMenu');
    },
    clickShowMenu: function(button, header, classMenu) {
        var btn = document.querySelector(button)
        var navMenu = document.querySelector(header)
        btn.addEventListener('click', function() {
            navMenu.classList.toggle(classMenu)
        })
    }
}
menu.init();