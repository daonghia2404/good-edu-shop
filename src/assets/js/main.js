$(document).ready(function () {
	menuComponent.init()
	header.init()
	owlCarousel.init()
});

const menuComponent = {
	init: function () {
		this.setupMenu('.dropdown-menu')
		this.setupMenu('.sub-menu-wrapper')
		this.toggleCategory()
		this.mainMenuMobile()
		this.subMenuMobile()
		this.subMenuMobileLv2()
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
		const categoryBtn = $('.menu__category');
		if (categoryBtn.hasClass('menu__index')) {
			categoryBtn.addClass('active');
		} else {
			categoryBtn.hover(() => {
				categoryBtn.toggleClass('active');
			})
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
      margin: 20,
    });
  },
  setupCarouselSectionProduct: function() {
		$("section.section-product .owl-carousel").owlCarousel({
			responsive: {
				0: { items: 5 },
			},
			loop: true,
			dots: true,
			nav: false,
			margin: 15,
		});
  },
}