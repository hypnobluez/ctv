//SCROLLSPY PAGE - 5_7_scrollspy.html
$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
    // Check for a hash value
    if (this.hash !== '') {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            // Add hash to URL after scroll
            window.location.hash = hash;
        });
    }
});
//SCROLLSPY PAGE END - 5_7_scrollspy.html

//3_7_alerts_progress.html PAGE

$('#myAlert').on('closed.bs.alert', function () {
    console.log('Alert closed...');
})
//3_7_alerts_progress.html PAGE end

/////**********5_4_tooltips.html

// Init tooltips
$('[data-toggle="tooltip"]').tooltip();

function showTooltip() {
    $('#hello').tooltip('show');
}

function hideTooltip() {
    $('#hello').tooltip('hide');
}

function toggleTooltip() {
    $('#hello').tooltip('toggle');
}

// Tooltip Events
$('#hello').on('show.bs.tooltip', function () {
    console.log('Tooltip Show');
});

$('#hello').on('shown.bs.tooltip', function () {
    console.log('Tooltip Shown');
});

$('#hello').on('hide.bs.tooltip', function () {
    console.log('Tooltip Hide');
});

$('#hello').on('hidden.bs.tooltip', function () {
    console.log('Tooltip Hidden');
});

/////**********5_4_tooltips.html end

///////POPOVER page 5_5_popovers.html
// Init Popover
$('[data-toggle="popover"]').popover();

function showPopover() {
    $('#hello').popover('show');
}

function hidePopover() {
    $('#hello').popover('hide');
}

function togglePopover() {
    $('#hello').popover('toggle');
}

// Popover events
$('#hello').on('show.bs.popover', function () {
    console.log('Popover show');
});

$('#hello').on('shown.bs.popover', function () {
    console.log('Popover shown');
});

$('#hello').on('hide.bs.popover', function () {
    console.log('Popover hide');
});

$('#hello').on('hidden.bs.popover', function () {
    console.log('Popover hidden');
});
///////POPOVER page 5_5_popovers.html end
///////////

///////////5_2_carousel.html
$('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});

$('#slider4').on('slide.bs.carousel', function () {
    console.log('SLIDE!');
});

$('#slider4').on('slid.bs.carousel', function () {
    console.log('SLID!');
});
  ///////////5_2_carousel.html


