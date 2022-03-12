$(document).ready(function() {
	// Loader 
	$(window).on("load", function () {
		$(".loader").fadeOut();
		$("body").removeClass("overflow-hidden");
		
		if ($(window).width() > 1024) {
	        wow = new WOW({});
	        wow.init();
	    }
	});

    // Menu Mobile
	var menuMobileButton = '.menu-mobile';
	var menuMobileOptions = 'header nav';
	var menuMobileLink = 'header nav a';

	$(document).on('click', menuMobileButton, function () {
		$(this).toggleClass('active');
		$(menuMobileOptions).toggleClass('active');
		//$('body').toggleClass('overflow-hidden');
	});
	$(document).on('click', menuMobileLink, function () {
		$(menuMobileButton).removeClass('active');
		$(menuMobileOptions).removeClass('active');
		//$('body').removeClass('overflow-hidden');
	});

    // Anchors Navigation
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		var url = $(this).attr('href');
		var cuttedUrl = url.substr(url.indexOf("#") + 1);

		$('html, body').animate({
			scrollTop: $('#'+cuttedUrl).offset().top
		}, 500);
	});
	$('.roadmap-token').hide();
	$('.roadmap-nft').show();

	$(document).on('click', '.roadmap-tab-01', function () {
		$('.roadmap-tabs > div').removeClass('active');
		$('.roadmap').removeClass('roadmap-active-02');
		$(this).addClass('active');
		$('.roadmap').addClass('roadmap-active-01');
		$('.roadmap-nft').hide();
		$('.roadmap-token').show();
	});
	$(document).on('click', '.roadmap-tab-02', function () {
		$('.roadmap-tabs > div').removeClass('active');
		$('.roadmap').removeClass('roadmap-active-01');
		$(this).addClass('active');
		$('.roadmap').addClass('roadmap-active-02');
		$('.roadmap-token').hide();
		$('.roadmap-nft').show();
	});
	
    // Scroll anchor classes
	
	function getViewportOffset($e) {
		var $window = $(window),
			scrollLeft = $window.scrollLeft(),
			scrollTop = $window.scrollTop(),
			offset = $e.offset(),
			rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
			rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
		return {
			left: offset.left - scrollLeft,
			top: offset.top - scrollTop,
			insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
		};
	};

	$(window).on("load scroll resize", function() {
		var roadmapContent = getViewportOffset($(".roadmap"));
		
		var winTop = $(window).scrollTop();

		var secHome = $('.home').offset().top; 
		var secAbout = $('.about').offset().top; 
		var secWhitelist = $('.whitelist').offset().top; 
		var secBox = $('.box').offset().top; 
		var secRoadmap = $('.roadmap').offset().top; 
		var secTeam = $('.team').offset().top; 
		var secFaq = $('.faq').offset().top; 
		var roadmapMain = $('.roadmap').offset().top; 
		var roadmapTrailer = $('.roadmap-content5').offset().top; 

		var roadmapContent1 = getViewportOffset($(".roadmap-content1"));
		var roadmapContent2 = getViewportOffset($(".roadmap-content2"));
		var roadmapContent3 = getViewportOffset($(".roadmap-content3"));
		var roadmapContent4 = getViewportOffset($(".roadmap-content4"));
		var roadmapContent5 = getViewportOffset($(".roadmap-content5"));

		if ($(window).width() > 1024) {


			if (winTop > 200) {
				$('header').addClass('scrolling');
			}
			else {
				$('header').removeClass('scrolling');
			}

			if ($('.roadmap').hasClass('roadmap-active-02')) {
				if (roadmapContent1.insideViewport == true) {
					if (Math.abs(roadmapContent1.top) < 200) {
						$('.roadmap-content1 .roadmap-text').css('margin-top', ''+roadmapContent1.top* 0.5 +'px');
						$('.roadmap-content1 .roadmap-point').css('margin-top', ''+roadmapContent1.top * 0.3 +'px');
					}
				}
				if (roadmapContent2.insideViewport == true) {
					$('.roadmap-content2 .roadmap-text').css('margin-top', ''+roadmapContent2.top* 0.5 +'px');
					$('.roadmap-content2 .roadmap-point').css('margin-top', ''+roadmapContent2.top * 0.4 +'px');
					$('.roadmap-content2 .roadmap-box').css('transform', 'rotateY(0deg)');
					$('.roadmap-bg').css('transform', 'scale(1)').css('opacity', '0.15');

				}
				if (roadmapContent3.insideViewport == true) {
					$('.roadmap-content3 .roadmap-text').css('margin-top', ''+roadmapContent3.top* 0.5 +'px');
					$('.roadmap-content3 .roadmap-point').css('margin-top', ''+roadmapContent3.top * 0.4 +'px');
					$('.roadmap-content2 .roadmap-box').css('transform', 'rotateY(180deg)');
					$('.roadmap-content3 .box').css('margin-top', ''+roadmapContent3.top * 0.6 +'px');
					$('.roadmap-content3 .effect').css('margin-top', ''+roadmapContent3.top * 0.9 +'px');
					$('.roadmap-bg').css('transform', 'scale(1.15)').css('opacity', '0.25');
				}
				if (roadmapContent4.insideViewport == true) {
					$('.roadmap-content4 .roadmap-text').css('margin-top', ''+roadmapContent4.top* 0.5 +'px');
					$('.roadmap-content4 .roadmap-point').css('margin-top', ''+roadmapContent4.top * 0.4 +'px');
					$('.roadmap-content4 .egg1').css('margin-top', ''+roadmapContent4.top * 0.8 +'px');
					$('.roadmap-content4 .egg2').css('margin-top', ''+roadmapContent4.top * 0.6 +'px');
					$('.roadmap-content4 .egg2').css({
						'top': '-30px',
						'transform': 'rotate(360deg)',
						'transform-origin': 'bottom left',
					});
					$('.roadmap-bg').css('transform', 'scale(1.30)').css('opacity', '0.35');
				}
				if (roadmapContent5.insideViewport == true) {
					$('.roadmap-content5 .roadmap-text').css('margin-top', ''+roadmapContent5.top* 0.5 +'px');
					$('.roadmap-content5 .roadmap-point').css('margin-top', ''+roadmapContent5.top * 0.4 +'px');
					$('.roadmap-content4 .egg2').css({
						'top': '-60px',
						'transform': 'rotate(330deg)',
						'transform-origin': 'bottom left',
					});
					$('.roadmap-bg').css('transform', 'scale(1.35)').css('opacity', '0.45');
					console.log(Math.abs(roadmapContent5.top))
				}
				if (winTop >= roadmapTrailer - 120){
					$('.roadmap-bg2').css('opacity', '1');
					$('.roadmap-bg').css('opacity', '0');
				}
				else {
					$('.roadmap-bg2').css('opacity', '0');

				}
				// header
				if (winTop >= roadmapMain - 50){
					$('.roadmap h1').css('opacity', '0').css('transform', 'translateY(-100px) scale(0.7)');
					$('.roadmap-tabs').css('opacity', '0').css('transform', 'translateY(-100px) scale(0.7)');
				}
				else {
					$('.roadmap h1').css('opacity', '1').css('transform', 'translateY(0) scale(1)');
					$('.roadmap-tabs').css('opacity', '1').css('transform', 'translateY(0) scale(1)');

				}
			}


			//console.log(winTop);

			if (winTop <= 500){
				var effect1 = winTop * 0.6;
				var effect2 = winTop * 0.1;
				var effect3 = winTop * 0.75;
				$('.hero-img').css('margin-top', '-'+effect1+'px');
				$('.about').css('margin-top', '-'+effect2+'px');
				$('.hero-bg').css('margin-top', ''+effect3+'px');
			}


			if (winTop >= secHome){
				var effect4 = winTop * 0.15;
				$('.about-bunny-img').css('margin-top', '-'+effect4+'px');
			}
			if (winTop >= secAbout - 102){
				var effect5 = winTop * 0.15;
				if (effect5 < 250) {
					$('.bunny img').css('transform', 'translateY(-'+effect5+'px)');
				}
			}	


		};;
		if (winTop >= secHome - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(1) a').addClass('active');
		}	;
		if (winTop >= secAbout - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(2) a').addClass('active');
		}	
		if (winTop >= secWhitelist - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(3) a').addClass('active');
		}	
		if (winTop >= secBox - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(4) a').addClass('active');
		}	
		if (winTop >= secRoadmap - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(5) a').addClass('active');
		}	
		if (winTop >= secTeam - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(6) a').addClass('active');
		}		
		if (winTop >= secFaq - 110){
			$('header nav ul li a').removeClass('active');
			$('header nav ul li:nth-child(7) a').addClass('active');
		}	
	});
});