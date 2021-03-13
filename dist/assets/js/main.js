$(document).ready(function () {
	menuComponent.init()
	header.init()
	owlCarousel.init()
	rangeSliderJs.init()
	amountProduct.init()
});

const menuComponent = {
	init: function () {
		this.setupMenu('.dropdown-menu')
		this.setupMenu('.sub-menu-wrapper')
		this.toggleCategory()
		this.checkShowMenuDefault()
		// this.mainMenuMobile()
		// this.subMenuMobile()
		// this.subMenuMobileLv2()
	},
	setupMenu: function (target) {
		var $menu = $(target);
		$menu.menuAim({
			activate: activateSubmenu,
			deactivate: deactivateSubmenu
		});

		function activateSubmenu(row) {
			var $row = $(row),
				submenuId = $row.data("submenuId"),
				$submenu = $("#" + submenuId),
				height = $menu.outerHeight(),
				width = $menu.outerWidth();

			$submenu.css({
				display: "block",
				top: -1,
				left: width - 3,
				height: height - 4
			});

			$row.find("a").addClass("maintainHover");
		}

		function deactivateSubmenu(row) {
			var $row = $(row),
				submenuId = $row.data("submenuId"),
				$submenu = $("#" + submenuId);

			$submenu.css("display", "none");
			$row.find("a").removeClass("maintainHover");
		}
		$(`${target} li`).click(function (e) {
			e.stopPropagation();
		});

		$(`.menu__category ${target}`).mouseleave(function () {
			$(".popover").css("display", "none");
			$("a.maintainHover").removeClass("maintainHover");
		})

		$(document).click(function () {
			$(".popover").css("display", "none");
			$("a.maintainHover").removeClass("maintainHover");
		});
	},
	toggleCategory: function () {
		const categoryBtn = document.querySelector('.menu-category')
		categoryBtn.addEventListener('click', () => {
			categoryBtn.classList.toggle('active')
		})
	},
	checkShowMenuDefault: function() {
		const categoryBtn = document.querySelector('.menu-category')
		const isOpenCategory = document.querySelector('#isOpenCategory')
		if (isOpenCategory) {
			categoryBtn.classList.add('active')
		} else {
			categoryBtn.classList.remove('active')
		}
	},
	mainMenuMobile: function () {
		const body = document.querySelector('body')
		const menuBtn = document.querySelector('.header__button.menu')
		const menuWrap = document.querySelector('.menu__list-mobile')
		const menuOverlay = document.querySelector('.menu__list__overlay')
		if (menuBtn && menuOverlay) {
			menuBtn.addEventListener('click', () => {
				menuWrap.classList.add('active')
				body.classList.add('modal-open')
			})
			menuOverlay.addEventListener('click', () => {
				menuWrap.classList.remove('active')
				body.classList.remove('modal-open')
			})
		}
	},
	subMenuMobile: function () {
		const categoryLink = $(".menu__list-mobile .menu__list__wrap > li a")
		categoryLink.bind("click", function (e) {
			const isExistSubmenu = $(this).parent().find(".popover__submenu")
			if (isExistSubmenu.length != 0) {
				e.preventDefault();
				$(this).parent().toggleClass('active');
				isExistSubmenu.slideToggle("fast");
			}
		})
	},
	subMenuMobileLv2: function () {
		const categoryLink = $(".menu__list-mobile .popover__submenu li > .category__link")
		categoryLink.bind("click", function (e) {
			const isExistSubmenu = $(this).parent().find(".submenu__item")
			if (isExistSubmenu.length != 0) {
				e.preventDefault();
				isExistSubmenu.slideToggle("fast", function () {
					if (isExistSubmenu.css('display') == 'none') {
						$(this).parent().removeClass('active');
					} else {
						$(this).parent().addClass('active');
					}
				})
			}
		})
	},
}

const header = {
	init: function() {
		this.eventSeenProducts()
	},
	eventSeenProducts: function() {
		const btn = document.querySelector('#seen-products')
		const main = document.querySelector('.seen-products-wrapper')
		btn.addEventListener('click', () => {
			main.classList.toggle('active')
		})
	}
}



const owlCarousel = {
  init: function() {
    this.setupHomeBannerCarousel()
		this.setupCarouselSectionProduct()
		this.setupCarouselSectionBanner()
		this.setupCarouselSectionCourseDetail()
		this.setupCarouselSectionCourseResult()
  },
	setupCarouselSectionCourseDetail: function() {
		const owlPreview = $("#course-preview-carousel").owlCarousel({
      responsive: {
        0: { items: 1 },
      },
      loop: false,
      dots: false,
      nav: false,
			autoHeight:true,
      margin: 0,
    });

		const owlControl = $("#course-control-carousel").owlCarousel({
      responsive: {
        0: { items: 3 },
        425: { items: 4 },
        512: { items: 5 },
      },
      loop: false,
      dots: false,
      nav: false,
      margin: 5,
    });

		const owlControlButton = document.querySelectorAll('#course-control-carousel .course-carousel-item')
		if (owlControlButton.length !== 0) {
			owlControlButton[0].classList.add('active')
			owlControlButton.forEach((item, index) => item.addEventListener('click', () => {
				owlControlButton.forEach(i => i.classList.remove('active'))
				item.classList.add('active')
				owlPreview.trigger('to.owl.carousel', [index, 200])
			}))
		}
	},
  setupHomeBannerCarousel: function() {
    $("#home-banner-carousel").owlCarousel({
      responsive: {
        0: { items: 1 },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      margin: 0,
    });
  },
  setupCarouselSectionBanner: function() {
    $("#section-banner-carousel").owlCarousel({
      responsive: {
        0: { items: 1 },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      margin: 00,
    });
  },
  setupCarouselSectionProduct: function() {
		$("section.section-product .owl-carousel").owlCarousel({
			responsive: {
				0: { items: 1 },
				575: { items: 2 },
				768: { items: 3 },
				991: { items: 4 },
				1200: { items: 5 },
			},
			loop: false,
			dots: true,
			nav: false,
			margin: 15,
		});
  },
  setupCarouselSectionCourseResult: function() {
		$("#result-carousel-section").owlCarousel({
			responsive: {
				0: { items: 1 },
				575: { items: 2 },
				768: { items: 3 },
				991: { items: 4 },
				1200: { items: 5 },
			},
			loop: false,
			dots: true,
			nav: false,
			margin: 15,
		});
  },
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const rangeSliderJs = {
	init:function() {
		this.setupJRange()
	},
	setupJRange:function() {
		const main = document.querySelector('.filter-price-range')
		if (main) {
			const minValue = main.querySelector('#minValue')
			const maxValue = main.querySelector('#maxValue')
			const fromValue = 100000
			const toValue = 1000000

			const target = $('.range-slider').jRange({
				from: fromValue,
				to: toValue,
				step: 1,
				theme: 'theme-red',
				format: (value) => numberWithCommas(value),
				width: 'auto',
				showLabels: false,
				isRange : true,
				onstatechange: (data) => {
					const values = data.split(',')
					minValue.innerHTML = `${numberWithCommas(values[0])}đ`
					maxValue.innerHTML = `${numberWithCommas(values[1])}đ`
				}
			});
			target.jRange('setValue', `${fromValue},${toValue}`)
		}
	},
}

const amountProduct = {
	init: function() {
		this.setupEvent()
	},
	setupEvent: function() {
		const main = document.querySelectorAll('.amount-action')
		if (main.length !== 0) {
			main.forEach((item) => {
				const increaseBtn = item.querySelector('#amountPlus')
				const decreaseBtn = item.querySelector('#amountMinus')
				const value = item.querySelector('#amountValue')
	
				increaseBtn.addEventListener('click', (e) => {
					e.preventDefault()
					value.innerHTML = Number(value.innerHTML) + 1
				})
	
				decreaseBtn.addEventListener('click', (e) => {
					e.preventDefault()
					if (Number(value.innerHTML) === 1) return
					value.innerHTML = Number(value.innerHTML) -1
				})
			})
		}
	}
}