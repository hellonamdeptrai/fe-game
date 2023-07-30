
$(document).ready(function() {
	
	"use strict";
	
	PageLoad();
	FirstLoad();
	Showcase();
});



/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {

		if ($('#page-content').hasClass("light-content")) {
			$('.preloader-wrap').addClass('light-content');
		}

		$('body').removeClass('hidden');

		var width = 100,
			perfData = window.performance.timing,
			EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
			time = ((EstimatedTime/1000)%50) * 50

		// Loadbar Animation
		$(".loadbar").animate({
			width: width + "%"
		}, time / 0.7 );


		// Percentage Increment Animation
		var PercentageID = $("#precent"),
				start = 0,
				end = 100,
				durataion = time + 400;
				animateValue(PercentageID, start, end, durataion);

		function animateValue(id, start, end, duration) {

			var range = end - start,
			  current = start,
			  increment = end > start? 1 : -1,
			  stepTime = Math.abs(Math.floor(duration / range)),
			  obj = $(id);

			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current);
			  //obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}

		// Fading Out Loadbar on Finised
		setTimeout(function(){
			$('.loadbar').append('<span class="hold-progress-bar"></span>');

			TweenMax.to($('.hold-progress-bar'), 1, {force3D:true,width:'100%', delay:1, ease:Power2.easeOut, onComplete:function(){  //modified time
				TweenMax.set($(".trackbar"), {visibility:'hidden', opacity:0});
				$('body').waitForImages({
						finished: function() {

							TweenMax.to($(".percentage"),0.5, {force3D:true, opacity:0, y:-30, delay:0, ease:Power1.easeInOut});
							TweenMax.to($(".headphones, .headphones-text"),0.3, {force3D:true, opacity:0, y:-50, delay:0.2, ease:Power2.easeOut});
							TweenMax.to($(".preloader-wrap"),0.7, {force3D:true, yPercent: -101, delay:0.6, ease:Power2.easeInOut});
							TweenMax.set($(".preloader-wrap"), {visibility:'hidden', delay:1.4, opacity:0});

							setTimeout(function(){

								$('body').waitForImages({
									finished: function() {
										TweenMax.to($("#header-container, .header-middle, #footer-container"), 1, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut}); //modified time
										$('body').removeClass('hidden-ball');
									},
									waitForAll: true
								});

								if( $('.hero-video-wrapper').length > 0 ){
									$('#hero-bg-wrapper').find('video').each(function() {
										$(this).get(0).play();
									});
								}

								TweenMax.to($("#main"), 0, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut});//modified time
								if( $('#hero').hasClass("has-image")) {
									TweenMax.to($("#hero-bg-image"), 1, {force3D:true, scale:1.05 , opacity:1, delay:0.2, ease:Power2.easeOut});
									TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 10, opacity:1, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:10, opacity:1, delay:0.95, ease:Power2.easeOut});
									TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:1.1, ease:Power2.easeOut, onComplete:function(){
										$('.hb-left').addClass('enable');
									}});
									TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:1.2, ease:Power2.easeOut});
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1.15, ease:Power2.easeOut});
								} else {
									TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 10, opacity:1, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 10, opacity:1, delay:0.95, ease:Power2.easeOut});
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1, ease:Power2.easeOut});
								}

								// Fading In Showcase elements on Finised
								TweenMax.set($("#showcase-holder"), {opacity:0, scale:1.05});
								TweenMax.to($("#showcase-holder"), 0.4, {force3D:true, opacity:1, scale:1, delay:0.8, ease:Power2.easeOut});

								TweenMax.set($('.stroked .swiper-pagination-bullet-active').prev().find('.title'), {opacity:0, y:-120});
								TweenMax.set($('.no-stroked .swiper-pagination-bullet-active').find('.title'), {opacity:0, y:60});
								TweenMax.set($('.stroked .swiper-pagination-bullet-active').find('.title'), {opacity:0, y:60});
								TweenMax.set($('.stroked .swiper-pagination-bullet-active').next().find('.title'), {opacity:0, y:240});

								var slidertitleheight = $(".title").height()

								TweenMax.to($('.stroked .swiper-pagination-bullet-active').prev().find('.title'), 0.5, {force3D:true, opacity:0.3, y:-slidertitleheight, delay:0.8, ease:Power2.easeOut});
								TweenMax.to($('.no-stroked .swiper-pagination-bullet-active').find('.title'), 0.5, {force3D:true, opacity:1, y:0, delay:0.9, ease:Power2.easeOut});
								TweenMax.to($('.stroked .swiper-pagination-bullet-active').find('.title'), 0.5, {force3D:true, opacity:0.3, y:0, delay:0.9, ease:Power2.easeOut});
								TweenMax.to($('.stroked .swiper-pagination-bullet-active').next().find('.title'), 0.5, {force3D:true, opacity:0.3, y:slidertitleheight, delay:1, ease:Power2.easeOut});

								TweenMax.set($('.swiper-slide-active').find('.title'), {y:slidertitleheight});
								TweenMax.set($('.swiper-slide-active').find('.subtitle'), {y:40});


								TweenMax.to($('.swiper-slide-active').find('.title'), 0.8, {force3D:true, y:0, delay:0.8, ease:Power2.easeOut});
								TweenMax.to($('.swiper-slide-active').find('.subtitle'), 0.7, {force3D:true, y:0, delay:0.9, ease:Power2.easeOut});



								// Fading In Small Carousel elements on Finised
								var tlCarousel = new TimelineLite();
								tlCarousel.set($("#showcase-carousel .swiper-slide"), {x: 300, opacity:0});
								$("#showcase-carousel .swiper-slide").each(function(index, element) {
									tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.9, ease:Power3.easeOut}, index * 0.1)
								});
								// Fading In Large Carousel elements on Finised
								var tlCarousel = new TimelineLite();
								tlCarousel.set($("#large-showcase-carousel .swiper-slide"), {x: 300, opacity:0});
								$("#large-showcase-carousel .swiper-slide").each(function(index, element) {
									tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.9, ease:Power3.easeOut}, index * 0.1)
								});
								TweenMax.set($(".swiper-scrollbar"), {scaleX: 0,});
								TweenMax.to($(".swiper-scrollbar"), 1.2, {force3D:true, scaleX: 1, delay:0.9, ease:Power2.easeOut});

								setTimeout( function(){
									$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
								} , 600 );

								setTimeout( function(){
									$('body').removeClass("load-next-project");
									$('body').addClass("header-visible");
									$('#showcase-holder').removeClass("disabled");
								} , 1600 );

								setTimeout( function(){
									$('body').removeClass("show-loader")
								} , 800 );

							} , 100 );
						},
					waitForAll: true
				});

			}});

		}, time);



	}// End Page Load
		


/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {	
		
		
		if ($("body").hasClass("smooth-scroll")) {
			var elem = document.querySelector("#content-scroll");
			var scrollbar = Scrollbar.init(elem,
			{
				renderByPixels: true,
				damping:0.05
			});
		}

		$("html,body").animate({scrollTop: 0}, 1);

		if ($("#page-content").hasClass("light-content")) {
			$("main, nav").css('background-color', '#141414');
			if( $('#hero').length > 0 ){
				if( $('#hero').hasClass("has-image")) {
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		} else {
			$("main").css('background-color', '#fff');
			$("nav").css('background-color', '#141414');
			if( $('#hero').length > 0 ){
				if( $('#hero').hasClass("has-image")) {
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		}
		
		$('.section-image').each(function() {
			var image = $(this).data('src');
			$(this).css({'background-image': 'url(' + image + ')'});
		});

		$('.item').each(function() {
			var image = $(this).find('.item-image').data('src');
			$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
		});

		//Load Default Page
		$('a.ajax-link').on('click', function() {
			$("body").addClass("show-loader");
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-30, opacity:0, ease:Power2.easeIn}, index * 0.03)
			});
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if( $('#showcase-holder').length > 0 ){
				TweenMax.to($(".swiper-pagination-bullet .title"), 0.4, {force3D:true, opacity:0, ease:Power2.easeOut});
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.2, ease:Power0.ease});
			} else {
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.1, ease:Power0.ease});
			}
			TweenMax.to($("#footer-container, .header-middle"), 0.3, {opacity:0, ease:Power0.ease});
		});


		//Load Page From Menu
		$('nav .ajax-link').on('click', function() {
			var tl = new TimelineLite();
			$(".menu-timeline").each(function(index, element) {
				tl.to(element, 0.25, {y:-80, opacity:0, ease:Power1.easeIn }, index * 0.05)
			});
		});

		$('#burger-wrapper').on('click', function() {
			$('#menu-burger, nav').toggleClass('open');
			setTimeout( function(){
				if ($('#menu-burger').hasClass("open")) {
					$('header').addClass('over-sidebar');
					if (!$('#page-content').hasClass("light-content")) {
						$('#magic-cursor').addClass('light-content');
						$('#header-container').addClass('light-content');
					}
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline"), {y: 80, opacity:0});
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.4, ease:Power2.easeOut}, index * 0.1)
					});

				} else {
					//Fade Out Navigation Lists
					var tlMenu = new TimelineLite();
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.25, {y:-80, opacity:0, ease:Power2.easeIn}, index * 0.05)
					});
					if (!$('#page-content').hasClass("light-content")) {
						setTimeout( function(){
							$('#magic-cursor').removeClass('light-content');
							$('#header-container').removeClass('light-content');
						} , 500 );
					}
					setTimeout( function(){
						$(".touch-button.active").trigger("click");
						$('header').removeClass('over-sidebar');
					} , 500 );
				}
			} , 20 );
		});


		
		
		
		// Page  Navigation Events
		$('.next-ajax-link-page').on('click', function() {
			$("body").addClass("load-next-page");
			$("body").addClass("show-loader");
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {
				TweenMax.to(scrollbar, 0.5, {scrollTop :pageheight, ease:Power4.easeIn});
			} else {
                TweenMax.to(window, 0.5, {scrollTo :$("footer").offset().top, ease:Power4.easeIn});
            }
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {
				setTimeout(function(){
					$('body').addClass('light-content');
				} , 300 );
			}
			if ($("body").hasClass("smooth-scroll")) {
				var navmove = $("#content-scroll").height() - $("#hero").height() - $("footer").height() - 10
			} else {
				var navmove = window.innerHeight - $("#hero").height() - $("footer").height() - 10
			}

			TweenMax.to($(".subtitle-info"), 0.3, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".subtitle-name"), 0.3, {force3D:true, opacity:1, y: 0, delay:0.3, ease:Power2.easeOut});

			TweenMax.to($("#main-page-content, #hero"), 0.3, {opacity:0});
			TweenMax.to($("#page-nav"), 0.6, {y: - navmove, ease:Power2.easeInOut});
			TweenMax.to($("footer"), 0.3, {opacity:0, delay:0.2, ease:Power2.easeInOut});
		});


		// Project Navigation Events
		$('.next-ajax-link-project').on('click', function() {
			$("body").addClass("load-next-project");
			$("body").addClass("show-loader");
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {
				TweenMax.to(scrollbar, 0.5, {scrollTop :pageheight, ease:Power4.easeIn});
			} else {
                TweenMax.to(window, 0.5, {scrollTo :$("footer").offset().top, ease:Power4.easeIn});
            }
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {
				setTimeout(function(){
					$('body').addClass('light-content');
				} , 300 );
			}


			TweenMax.to($(".next-subtitle-info"), 0.3, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".next-subtitle-name"), 0.3, {force3D:true, opacity:1, y: 0, delay:0.3, ease:Power2.easeOut});

			TweenMax.to($("#main-page-content"), 0.3, {opacity:0});
			setTimeout(function(){
				TweenMax.to($("#project-nav"), 0.6, {height:"100vh", ease:Power2.easeInOut});
				TweenMax.to($(".next-project-image"), 0.6, {top:"0", y: 0, ease:Power2.easeInOut});
				TweenMax.to($("footer"), 0.3, {opacity:0, ease:Power2.easeInOut});
			} , 50 );
		});


		if( $('#project-nav').length > 0 ){
			$('#main-page-content').addClass('project-page');
		}

		if( $('#portfolio').length > 0 ){
			$('#main-page-content').addClass('portfolio-page');
		}

		// Slider Center on click
		$('.slider').on('click', function() {
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
			if ($("body").hasClass("smooth-scroll")) {
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});
			}
			else{
				$("html, body").animate({ scrollTop: scrollIt }, 350);
			}
		});

		// Carousel Center on click
		$('.carousel').on('click', function() {
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
			if ($("body").hasClass("smooth-scroll")) {
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});
			}
			else{
				$("html, body").animate({ scrollTop: scrollIt }, 350);
			}
		});


		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				$(".white-section").each(function () {
					var $this = $(this),
					elementTop = $this.offset().top;
					if (scrollbar.isVisible(this)) {
						if (elementTop <= 60) {
							$("header").addClass("white-header")
						} else {
							$("header").removeClass("white-header")
						}
					} else {
						$("header").removeClass("white-header")
					}
				});
			});
		}


		// Video Center on click
		$('.video-wrapper').on('click', function() {
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
			if ($("body").hasClass("smooth-scroll")) {
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});
			}
			else{
				$("html, body").animate({ scrollTop: scrollIt }, 350);
			}
		});


		var viewportWidth = $(window).width();
		if (viewportWidth < 1024) {
			$('.hero-video-wrapper').remove();
		}
		
		$('#backtotop').on('click', function() {
			if ($("body").hasClass("smooth-scroll")) {
				TweenLite.to(scrollbar, 1.5, {scrollTop:0, ease:Power4.easeInOut});
			} else {
				$("html,body").animate({scrollTop: 0}, 800);
			}
		});

		$('#scrolldown').on('click', function() {
			var heroheight = $("#hero").height();
			if ($("body").hasClass("smooth-scroll")) {
				TweenLite.to(scrollbar, 1.5, {scrollTop:heroheight, ease:Power4.easeInOut});
			} else {
				TweenLite.to(window, 1.5, {scrollTop:heroheight, ease:Power4.easeInOut});
			}
		});


		// Tilt Showcase Wrapper
		if( $('#hero').hasClass("has-image")) {
			var timeout;
			$(window).resize(changePersective);
			changePersective();
			function changePersective(){
				TweenMax.set('#hero-bg-wrapper', {perspective: $('body').width()});
			}
			$('#hero').mousemove(function(e){
				if(timeout) clearTimeout(timeout);
				setTimeout(callParallaxHero.bind(null, e));
			});
			function callParallaxHero(e){
				parallaxItHero(e, '#hero-bg-image', 0); //5
				moveItHero(e, '#hero-bg-image', - 30); //80
			}
			function parallaxItHero(e, target, movement){
				var $this = $('#hero-bg-wrapper');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;
				TweenMax.to(target, 1, {
					rotationY: (relX - $this.width()/1.5) / $this.width() * movement,
					rotationX: (relY - $this.height()/2) / $this.height() * movement,
				})
			}
			function moveItHero(e, target, movement){
				var $this = $('#hero-bg-wrapper');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;
				TweenMax.to(target, 1, {
					x: (relX - $this.width()/2) / $this.width() * movement,
					y: (relY - $this.height()/2) / $this.height() * movement,
				})
			}
		}

		var heroparallax = TweenMax.to('#hero-image-parallax', 1, {top:"20%", scale:1.2, ease:Linear.easeNone});
		var captionParallax = TweenMax.to('.has-image #hero-caption', 0.5, {top:"25%", ease:Linear.easeNone});
		var bottomParallax = TweenMax.to('.has-image .hero-bottom', 0.5, {opacity:"0", ease:Linear.easeNone});

		var controller = new ScrollMagic.Controller();

		var heroScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(heroparallax)
		.addTo(controller);

		var captionScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(captionParallax)
		.addTo(controller);

		var bottomScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'20%'
		})
		.setTween(bottomParallax)
		.addTo(controller);

		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				heroScene.refresh()
				captionScene.refresh()
				bottomScene.refresh()
			});
		}

		// 	parallax image
		$(".has-parallax").each( function () {
			var $this = $(this);
			var $thisHeight = $(this).height();
			var bg = $this.find("img");

			// Add tweenmax for backgroundParallax
			var parallax = TweenMax.fromTo( bg, 1, {y: '-20%'}, {y: '10%',ease:Linear.easeNone});

			// Create scrollmagic scene
			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: this, // <-- Use this to select current element
				triggerHook: 1,
				duration:'300%'
			})
			.setTween(parallax)
			.addTo(controller);

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					parallaxScene.refresh()
				});
			}

		});
		
		// animate each
		$('.has-animation').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();

			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);

			scene.triggerHook(1)

			scene.on('enter', function(){
				$this.delay($this.attr('data-delay')).queue(function(next){
					TweenMax.to($this, 0.6, {force3D:true, opacity:1, y:0, scale:1, delay:0.1, ease:Power2.easeOut});
					next();
				});
			});

			scene.on('leave', function(event){
				$this.removeClass('active');
			});

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})

		$('.has-mask').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});

		$('.has-mask span').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});

		$('.has-mask').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();

			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);

			scene.triggerHook(1)

			scene.on('enter', function(){

				var tl = new TimelineLite();

				$this.find('span > span').each(function(index, element) {
					tl.to(element, 0.6, {y:0, opacity:1, delay:0.1, ease:Power2.easeOut}, index * 0.03)
				});

			});

			scene.on('leave', function(event){
				$this.removeClass('active');
			});

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})

		$('.item-appear').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();

			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);

			scene.triggerHook(1)

			scene.on('enter', function(){
				$this.addClass('active');
			});

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		
		
	}// End First Load
	

/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function Showcase() {
		
	
		if( $('#showcase-slider').length > 0 ){
			var interleaveOffset = 0.4;

			var swiperOptions = {
				direction: "vertical",
				loop: false,
				resistance : true,
				resistanceRatio : 0,
				autoplay: false,
				effect: "slide",
				mousewheelControl: false,
				hashnav: true,
				replaceState: true
			};
							
			var swiper = new Swiper(".swiper-container", swiperOptions);

			var indicator = new WheelIndicator({
			  elem: document.querySelector('.swiper-container'),
			  callback: function(e){
				if(e.direction == 'up') swiper.slidePrev();
				else swiper.slideNext();
			  }
			});

		}


	}//End Showcase


