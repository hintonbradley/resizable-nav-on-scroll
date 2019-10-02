$( document ).ready(function() {
    updateNavbar();
    $('body').click(closeDropdown);
    $('#navToggle').click(toggleNav);
    window.addEventListener('resize', updateNavbar);
});

function toggleNav() {
    let slider = document.getElementById('box');
    if (slider.classList.contains('opened')) {
        slider.classList.remove('opened');
        slider.classList.add('closed');
    } else {
        slider.classList.remove('closed');
        slider.classList.add('opened');
    }
}

function closeDropdown(e) {
    if (e.target.tagName != 'I') {
        $('#box').removeClass("opened").addClass('closed')
    }
}

function updateNavbar() {
    if ($(window).scrollTop()&& $(window).width()>600) {
        $('nav').addClass('black');
    } 
    else if ($(window).width()<600) {
        $('nav').addClass('black');
        resetHamburger();
    }
    else {
        $('nav').removeClass('black')
    }
}

function resetHamburger() {
    if ($( window ).width()<600) {
        let box = $('#box');
        if(box.hasClass( "opened" )) {
            box.removeClass('opened').addClass('closed');
        }
    }
}

$(window).on('scroll', function() {
    updateNavbar();
});