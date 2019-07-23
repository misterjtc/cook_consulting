$(function(){
    // Flickity hero slider config. for header
    $('.hero').flickity({
        arrowShape: { 
        x0: 10,
        x1: 60, y1: 50,
        x2: 70, y2: 40,
        x3: 30
        },
        pageDots: false,
        contain: true
    });
    // Flickity hero slider config for certain portfolio items
    $('.portHero').flickity({
        pageDots: true,
        contain: true,
        autoPlay: 4000,
        cellSelector: '.portCell',
        prevNextButtons: false,
    });
    // Smoothscroll config.
    $(".scrollDown a, .headText a, .smoothWork a, .scroll a").smoothScroll ({
        offset: -55,
        speed: 700,
        easing: 'linear',
    });
    $(".smoothAbout a").smoothScroll ({
        offset: -200,
        speed: 700,
        easing: 'linear',
    });
    $(".smoothProject a").smoothScroll ({
        offset: -75,
        speed: 700,
        easing: 'linear',
    });
    // Hide/show specific site features depending on the users scroll position
    // Make sure the secondary header is hidden when the page is loaded
    $('.headerAfter').hide(function(){
    });
    $(document).scroll(function(){
        // Show after the user scrolls 800px
        var y = $(this).scrollTop();
        if (y > 800) {
            // This is for the scroll to the top button
            $('.overTheTop').fadeIn();
            // This is for the secondary header
            $('.headerAfter').fadeIn();
        // Otherwise hide featyres
        } else {
            //  This is for the scroll to the top button
            $('.overTheTop').fadeOut();
            // This is for the secondary header
            $('.headerAfter').fadeOut();
        }
    });
    // Toggling of button styling for filtering of content in the project section
    $('.projSort').on("click", function(){
        $('.projSort').removeClass('activeCategory');
        $(this).addClass("activeCategory");
    });
    // Hide/show portfolio items based on content selector
    $('.showAll').on("click", function(){
        $('.portfolioItem').removeClass('activePortfolioItem');
    });
    $('.design').on("click", function(){
        $('.portfolioItem').addClass('activePortfolioItem');
        $('.designItem').removeClass('activePortfolioItem');
    });
    $('.printing').on("click", function(){
        $('.portfolioItem').addClass('activePortfolioItem');
        $('.printItem').removeClass('activePortfolioItem');
    });
    $('.rendering').on("click", function(){
        $('.portfolioItem').addClass('activePortfolioItem');
        $('.renderItem').removeClass('activePortfolioItem');
    });
    $('.fea').on("click", function(){
        $('.portfolioItem').addClass('activePortfolioItem');
        $('.feaItem').removeClass('activePortfolioItem');
    });
    $('.drone').on("click", function(){
        $('.portfolioItem').addClass('activePortfolioItem');
        $('.droneItem').removeClass('activePortfolioItem');
    });
});