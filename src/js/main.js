var mainJs = new MainJsClass();

function MainJsClass() {
    var scope = this;

	this.initVideoPlayer = function () {
		if($('.jsVideoPlayer').length){
			var videoPlayer = $('.jsVideoPlayer');
			videoPlayer.each(function(){
				var videoPlayerImg = $('img', videoPlayer);
				var videoPlayBtn = $('.jsPlayBtn', videoPlayer);
				var playerIframe = $('.myPlayer', videoPlayer);
				var srcPlayer = playerIframe.attr('src');
				playerIframe.attr('src','');

				videoPlayBtn.on({
					'click': function(e){
						var thisBtn= $(this);
						var srcPlayerFromBtn = thisBtn.attr('data-video');
//            thisBtn.nextAll('img').fadeOut(300);
//            thisBtn.fadeOut(300);
            thisBtn.parent(videoPlayer).addClass('video-player_active');
            thisBtn.nextAll('iframe').attr('src',srcPlayerFromBtn+'?autoplay=1');
						e.preventDefault();
					}
				});
			});
		}
	};

  this.initBxSlider = function () {
    if($('.jsBxSlider').length){
			var bxSlider = $('.jsBxSlider');
				bxSlider.bxSlider({
					controls:false,
					onSliderLoad: function(){
						bxSlider.parent().parent('.bx-wrapper').addClass('bx-wrapper_post');
				}
			});
    }
  };

	this.initPostSlider = function () {
		if($('.jsPostSlider').length){
			var slider = $('.jsPostSlider');
				slider.bxSlider({
					controls:false,
					onSliderLoad: function(){
						slider.parent().parent('.bx-wrapper').addClass('bx-wrapper_small');
				}
			});
		}
	};

  this.initSlideshowControls = function () {
    if($('.slideshow').length){
      var slideshow = $('.slideshow');
      var prevBtn = $('.slideshow__prev',slideshow);
      var nextBtn = $('.slideshow__next',slideshow);
      var playerIframe = $('.myPlayer', slideshow);


      prevBtn.click(function(e){
        $('.video-player').removeClass('video-player_active');
        playerIframe.attr('src','');
        e.preventDefault();
      });

      nextBtn.click(function(e){
        $('.video-player').removeClass('video-player_active');
        playerIframe.attr('src','');
        e.preventDefault();
      })
    }
  };

  this.initVideoSlider = function () {
    if($('.jsVideoSlider').length){
      var videoSlider = $('.jsVideoSlider');
      var videoPlayer = $('.video-player', videoSlider);
      var videoLink = $('.video-player__link', videoSlider);
      var videoplayerIframe = $('#videoFrame', videoPlayer);
      var srcPlayer = videoplayerIframe.attr('src');
      videoplayerIframe.attr('src','');
      var videoPlayerBtn = $('.video-player__btn', videoSlider);
      var btnUp = $('.video-slider__up', videoSlider);
      var btnDown = $('.video-slider__down', videoSlider);
      var pagingItem = $('.video-slider__paging-item', videoSlider);
      var pagingItemHeight = pagingItem.outerHeight();
      var pagingList = $('.video-slider__paging-list', videoSlider);
      var stepsCount = 0;
			var currentStep = 3;



      pagingItem.each(function(e){
        var index = $(this).index();
        $(this).attr('data-pagingnum', 'item'+index);
				stepsCount = $(this).index() + 1;
      });

      videoLink.click(function(e){
        $(this).fadeOut(300);
        videoplayerIframe.attr('src',srcPlayer);
        e.preventDefault();
      });

      videoPlayerBtn.click(function(e){
        videoLink.fadeOut(300);
        var newSrc = $(this).attr('data-video');
        videoplayerIframe.attr('src',newSrc+'?autoplay=1');
        e.preventDefault();
      });

      btnUp.click(function(e){
        var marginTopVal = parseInt(pagingList.css('margin-top'));
        if (currentStep < stepsCount ) {
          pagingList.css({
            'margin-top': marginTopVal-pagingItemHeight
          });
          currentStep = currentStep + 1;
        } else {
          return false;
        }
        e.preventDefault();
      });

      btnDown.click(function(e){
        var marginTopVal = parseInt(pagingList.css('margin-top'));
          if (currentStep > 3 ) {
            pagingList.css({
              'margin-top': marginTopVal+pagingItemHeight
            });
            currentStep = currentStep - 1;
          } else {
            return false;
          }
        e.preventDefault();
      });
    }
  };

  this.initVideoMain = function () {
    if($('.jsVideoPlayerMain').length){
      var videoBox = $('.jsVideoPlayerMain');
      var videoPlayer = $('.video-player', videoBox);
      var videoLink = $('.video-player__link', videoBox);
      var videoplayerIframe = $('#videoFrameMain', videoBox);
      var srcPlayer = videoplayerIframe.attr('src');
      videoplayerIframe.attr('src','');

      videoLink.click(function(e){
        $(this).fadeOut(300);
        videoplayerIframe.attr('src',srcPlayer);
        e.preventDefault();
      });
    }
  };

  this.initTooltip = function () {
    if($('.jsTooltipContainer').length){
      var tooltip = $('#jsTooltip');
      var tooltipTitle = $('.carousel-tooltip__ttl', tooltip);
      var tooltipText = $('.carousel-tooltip__txt', tooltip);
      var tooltipMore = $('.carousel-tooltip__more', tooltip);
      var tooltipContainer = $('.jsTooltipContainer');
      var carouselItem = $('.carousel-item');

      if (!carouselItem.hasClass('.jsTooltipContainer')) {
        carouselItem.click(function(e){
          tooltip.removeClass('carousel-tooltip_visible');
          e.preventDefault();
        });
      }


      tooltipContainer.on({
        'click': function(e){
          var container = $(this);
          var wWidth = $(window).width();

          if(wWidth < 1440) {
            if (container.hasClass('active')){
              var containerTop = container.position().top + (container.height()/2)*2.5;
              var containerLeft = container.position().left + (container.width()/2)*2.5;
              tooltip.removeClass('right-side');
            } else {
              if(container.position().left > 350) {
                var containerTop = container.position().top + (container.height()/1.5)*2.19;
                var containerLeft = container.position().left - 100;
                tooltip.addClass('right-side');
              } else {
                var containerTop = container.position().top + (container.height()/1.5)*2.19;
                var containerLeft = container.position().left + 100;
                tooltip.removeClass('right-side');
              }
            }
          } else {
            if (container.hasClass('active')){
              var containerTop = container.position().top + (container.height()/2)*2.5;
              var containerLeft = container.position().left + (container.width()/2)*2.5;
              tooltip.removeClass('right-side');
            } else {
              if(container.position().left > 350) {
                var containerTop = container.position().top + (container.height()/1.5)*2.19;
                var containerLeft = container.position().left;
                tooltip.addClass('right-side');
              } else {
                var containerTop = container.position().top + (container.height()/1.5)*2.19;
                var containerLeft = container.position().left + (container.width()/2)*2.19;
                tooltip.removeClass('right-side');
              }
            }
          }



          var containerItem = $('.carousel-box', container);
          var newTitle = containerItem.attr('data-title');
          var newText = containerItem.attr('data-text');
          var newLink = containerItem.attr('data-link');

          tooltipTitle.text(newTitle);
          tooltipText.text(newText);
          tooltipMore.attr('href', newLink);

          tooltip.removeClass('carousel-tooltip_visible');

          tooltip.css({
            top:containerTop,
            left:containerLeft
          });

          tooltip.addClass('carousel-tooltip_visible');

          e.preventDefault();
        }
      })
    }
  };

  this.initScrollpane = function () {
    if($('.scroll-pane').length){
      $('.scroll-pane').jScrollPane();
    }
  };

  this.initRulesPopup = function () {
    if($('.jsOpenRules').length){
      var opener = $('.jsOpenRules');
      var rulesPopup = $('#jsPopupRules');
      var closePopup = $('.b-popup__close', rulesPopup);
      opener.click(function(e){
        rulesPopup.fadeIn();
        scope.initScrollpane();
        e.preventDefault();
      });
      closePopup.click(function(e){
        rulesPopup.fadeOut();
      });
    }
  };

  this.initAddPopup = function () {
    if($('.jsAddWork').length){
      var opener = $('.jsAddWork');
      var addWorksPopup = $('#jsPopupAddWork');
      var closePopup = $('.b-popup__close', addWorksPopup);
      opener.click(function(e){
        addWorksPopup.fadeIn();
        e.preventDefault();
      });
      closePopup.click(function(e){
        addWorksPopup.fadeOut();
        e.preventDefault();
      });
    }
  };

  this.initCarousel = function () {
    if ($(".jsBxCarousel").length) {
      var configSlider = {
        mode: 'horizontal',
        pager: false,
        slideWidth: 240,
        minSlides: 4,
        maxSlides: 4,
        slideMargin: 35,
        moveSlides: 1,
        infiniteLoop: false,
        responsive:false
      };

      var sliders = new Array();
      $('.jsBxCarousel').each(function (i, slider) {
        sliders[i] = $(slider).bxSlider(configSlider);
      });
    }
  };

//  this.initWorksSlider = function () {
//    if ($(".jsWorksSlider").length) {
//      var configSlider = {
//        mode: 'horizontal',
//        pager: false,
//        slideWidth: 375,
//        minSlides: 1,
//        maxSlides: 1,
//        slideMargin: 0,
//        moveSlides: 1,
//        infiniteLoop: false,
//        responsive:false
//      };
//
//      var sliders = new Array();
//      $('.jsWorksSlider').each(function (i, slider) {
//        sliders[i] = $(slider).bxSlider(configSlider);
//      });
//    }
//  };

  this.initSingleWorkPopup = function () {
    if($('.jsSingleWork').length){
      var opener = $('.jsSingleWork');
      var singleWorkPopup = $('#jsSingleWork');
      var closePopup = $('.b-popup__close', singleWorkPopup);
      opener.click(function(e){
        singleWorkPopup.fadeIn();
        e.preventDefault();
      });
      closePopup.click(function(e){
        singleWorkPopup.fadeOut();
        e.preventDefault();
      });
    }
  };

  this.initSliderWorksPopup = function () {
    if($('.jsOpenWorksSlider').length){
      var opener = $('.jsOpenWorksSlider');
      var sliderWorkPopup = $('#jsWorksSliderPopup');
      var closePopup = $('.b-popup__close', sliderWorkPopup);
      opener.click(function(e){
        sliderWorkPopup.fadeIn();
        var slider = $('.jsWorksSlider').bxSlider({
          mode: 'horizontal',
          pager: false,
          slideWidth: 375,
          minSlides: 1,
          maxSlides: 1,
          slideMargin: 0,
          moveSlides: 1,
          infiniteLoop: false,
          responsive:false
        });
        e.preventDefault();
      });
      closePopup.click(function(e){
        sliderWorkPopup.fadeOut();
        e.preventDefault();
        slider = $('.jsWorksSlider').destroySlider();
      });
    }
  };

  this.initSingleWorkPopup = function () {
    if($('.jsSingleWork').length){
      var opener = $('.jsSingleWork');
      var singleWorkPopup = $('#jsSingleWork');
      var closePopup = $('.b-popup__close', singleWorkPopup);
      opener.click(function(e){
        singleWorkPopup.fadeIn();
        e.preventDefault();
      });
      closePopup.click(function(e){
        singleWorkPopup.fadeOut();
        e.preventDefault();
      });
    }
  };

	$(function(){
		 scope.initVideoPlayer();
		 scope.initBxSlider();
		 scope.initPostSlider();
		 scope.initSlideshowControls();
     scope.initVideoSlider();
     scope.initVideoMain();
     scope.initTooltip();
//     scope.initScrollpane();
     scope.initRulesPopup();
     scope.initAddPopup();
     scope.initCarousel();
//     scope.initWorksSlider();
     scope.initSingleWorkPopup();
     scope.initSliderWorksPopup();


    $(window).resize(function(){
      scope.initTooltip();
    });
	});
}