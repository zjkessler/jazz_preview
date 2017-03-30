var app = angular.module("jazzApp", ["ngMaterial", "ngMdIcons", "ui.bootstrap", "ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$mdThemingProvider", function ($stateProvider, $urlRouterProvider,
	$locationProvider, $mdThemingProvider) {
	'use strict';


	$locationProvider.hashPrefix("")
		.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/view/home.html'
		})
		.state('tickets', {
			url: '/tickets',
			templateUrl: 'src/view/sub-menu/ticketTabs.html'
		})
		.state("tickets.suites", {
			url: '/suites',
			templateUrl: 'src/view/suites.html'
		})
		.state("tickets.ticketCentral", {
			url: '/ticketCentral',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		})
		.state("tickets.groups", {
			url: '/groups',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		})
		.state("tickets.seatingMap", {
			url: '/seatingMap',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state("tickets.accountManager", {
			url: '/accountManager',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state("tickets.flashSeats", {
			url: '/flashSeats',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		})

		.state('schedule', {
			url: '/schedule',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		})
		.state('team', {
			url: '/team',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state('fans', {
			url: '/fans',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state('video', {
			url: '/video',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state('gameNight', {
			url: '/gameNight',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state('community', {
			url: '/community',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		}).state('shop', {
			url: '/shop',
			templateUrl: 'src/view/sub-menu/emptyMenu.html'
		})

	$mdThemingProvider.definePalette('jazzPalette', {
		'50': '0D223F',
		'100': 'ffcdd2',
		'200': 'ef9a9a',
		'300': 'ef9a9a',
		'400': 'ef9a9a',
		'500': 'ef9a9a',
		'600': '0D223F',
		'700': '0D223F',
		'800': '0D223F',
		'900': '0D223F',
		'A100': 'ef9a9a',
		'A200': '0D223F',
		'A400': '0D223F',
		'A700': '0D223F',
		'contrastDefaultColor': 'light', // whether, by default, text (contrast)
		// on this palette should be dark or light

		'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
   '200', '300', '400', 'A100'],
		'contrastLightColors': undefined // could also specify this if default was 'dark'
	});
	$mdThemingProvider.definePalette('jazzAccentPalette', {
		'50': '0D223F',
		'100': 'ffcdd2',
		'200': 'ef9a9a',
		'300': 'ef9a9a',
		'400': 'F89f1f',
		'500': 'F89f1f',
		'600': 'F89f1f',
		'700': 'F89f1f',
		'800': 'F89f1f',
		'900': 'F89f1f',
		'A100': 'F89f1f',
		'A200': 'F89f1f',
		'A400': 'F89f1f',
		'A700': 'F89f1f'
	})

	$mdThemingProvider.theme('default')
		.primaryPalette('jazzPalette')
		.accentPalette('jazzAccentPalette')

}]);
