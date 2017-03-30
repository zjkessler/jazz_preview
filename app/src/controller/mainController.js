	'use strict';
	var app = angular.module("jazzApp");

	app.controller('mainCtrl', ("$scope", "$timeout", "$mdSidenav", "$mdBottomSheet", function ($scope, $timeout, $mdSidenav, $mdBottomSheet) {

		$scope.ticketsMenu = [{
			name: "Ticket Central",
			link: "ticketCentral"
    }, {
			name: "Suites & Clubs",
			link: "suites"
    }, {
			name: "Groups",
			link: "groups"
    }, {
			name: "Seating Map",
			link: "seatingMap"
    }, {
			name: "Account Manager",
			link: "accountManager"
    }, {
			name: "Flash Seats",
			link: "flashSeats"
    }];

		$scope.emptyMenu = []

		$scope.navItem = [{
			title: "Tickets",
			icon: 'event_seat',
			submenu: $scope.ticketsMenu,
			link: "tickets"
    }, {
			title: "Schedule",
			icon: 'today',
			submenu: $scope.emptyMenu,
			link: 'schedule'
    }, {
			title: "Team",
			icon: 'recent_actors',
			submenu: $scope.emptyMenu,
			link: "team"
    }, {
			title: "Fans",
			icon: 'thumb_up',
			submenu: $scope.emptyMenu,
			link: "fans"
    }, {
			title: "Video",
			icon: 'theaters',
			submenu: $scope.emptyMenu,
			link: "video"
    }, {
			title: "Game Night",
			icon: 'cast_connected',
			submenu: $scope.emptyMenu,
			link: "gameNight"
    }, {
			title: "Community",
			icon: 'supervisor_account',
			submenu: $scope.emptyMenu,
			link: "community"
    }, {
			title: "Shop",
			icon: 'shopping_cart',
			submenu: $scope.emptyMenu,
			link: "shop"
    }];




		$scope.content = [{
			title: "UTAH JAZZ SUITES",
			header: "Welcome to the very best sports and entertainment Utah has to offer—luxury suites at Vivint Smart Home Arena.",
			description: "Whether you’re entertaining business clients, closing a major deal, or socializing with family and friends, a luxury suite provides all the convenience, comfort and service you desire. As the home of the Utah Jazz and the country’s most popular touring musical acts and family shows, Vivint Smart Home Arena is the place to meet, greet, see and be seen in Utah.",
			header2: "Why become a luxury suite holder?",
			descrption2: "Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Smart Home Arena luxury suite holder.",

			images: ['../../assets/photos/suites/Jazz-Food-066.jpg', '../../assets/photos/suites/Jazz-Food-069.jpg', '../../assets/photos/suites/Jazz-Food-072.jpg', '../../assets/photos/suites/Jazz-Food-090.jpg', '../../assets/photos/CLUBS/607A9784.jpg', '../../assets/photos/CLUBS/607A9785.jpg']
        }, {
			title: "INTERFORM EXECUTIVE CLUB",
			header: "Vivint Smart Home Arena is the place to be for Utah’s top sports and entertainment events.",
			description: "The most exclusive area to experience the excitement of the Utah Jazz, plus top performing acts and artists, is the Executives Club on the suite level. This newly expanded area offers impeccable sightlines, in-seat service, and an exclusive VIP environment with an array of VIP benefits. The Executives Club is the only place to entertain top clients, business associates and friends in Utah’s greatest sports and entertainment facility.",
			points: ["Full-service, in-suite VIP dinner at all Utah Jazz games (soft drinks are included, alcoholic beverages are available for purchase)", "Reserved club parking", "Plenty of room to network, socialize and 'close the deal'", "The first right to purchase your Executives Club seats or other premium tickets for all other Vivint Smart Home Arena events", "Large flat screen TVs located throughout the club", "Incredible suite-level view for Jazz games"],

			images: ['../../assets/photos/CLUBS/607A9805.jpg', '../../assets/photos/CLUBS/607A9804.jpg', '../../assets/photos/CLUBS/607A9797.jpg', '../../assets/photos/CLUBS/607A9783.jpg', '../../assets/photos/CLUBS/607A9784.jpg', '../../assets/photos/suites/t41a9134.jpg']
        }, {
			title: "LEXUS CLUB",
			header: "The Lexus Courtside Club—one of the most prestigious clubs offered—provides the ultimate in luxury and sophistication.",
			description: "Located in the front four rows at center court (behind the scorer’s table), the Lexus Courtside Club enables you to enjoy the excitement of Jazz basketball from the comfort of oversized leather seats equipped with TV monitors. The club also includes elite service and amenities, such as pregame meals and halftime snacks served in the privacy of the Lexus Club dining room.",
			footer: "For more information, please call Chris Barney (Vice President of Premium Seating & VIP Services) at 801.325.2323.",
			images: ['../../assets/photos/CLUBS/607A9783.jpg', '../../assets/photos/CLUBS/607A9785.jpg', '../../assets/photos/CLUBS/607A9789.jpg', '../../assets/photos/CLUBS/607A9790.jpg']
        }];

		//TABS

		$scope.selectedIndex = '';

		//SIDE-NAV

		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.active = 0;

		$scope.toggleLeft = buildToggler('left');
		$scope.toggleRight = buildToggler('right');

		function buildToggler(componentId) {
			return function () {
				$mdSidenav(componentId).toggle();
			};
		}
		//MENU


		//SIDE-NAV menu
		var originatorEv;

		$scope.openMenu = function ($mdMenu, ev) {
			originatorEv = ev;
			$mdMenu.open(ev);
		};

		//NAV-BAR

		$scope.currentNavItem = '';

		//BOTTOM-SHEET

		$scope.showGridBottomSheet = function () {
			$mdBottomSheet.show({
				templateUrl: './src/view/contact_us.html'
			});
		};
	}));
