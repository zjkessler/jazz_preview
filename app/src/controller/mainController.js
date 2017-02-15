var app = angular.module( "jazzApp" );

app.controller( 'mainCtrl', ( "$scope", "$timeout", "$mdSidenav", "$mdBottomSheet", function ( $scope, $timeout, $mdSidenav, $mdBottomSheet ) {

    $scope.navItem = [ {
        title: "Tickets",
        icon: 'event_seat'
    }, {
        title: "Schedule",
        icon: 'today'
    }, {
        title: "Team",
        icon: 'recent_actors'
    }, {
        title: "Fans",
        icon: 'thumb_up'
    }, {
        title: "Video",
        icon: 'theaters'
    }, {
        title: "Game Night",
        icon: 'cast_connected'
    }, {
        title: "Community",
        icon: 'supervisor_account'
    }, {
        title: "Shop",
        icon: 'shopping_cart'
    } ]

    $scope.tabsMenu = [ {
        name: "Ticket Central",
        link: "ticket tab"
    }, {
        name: "Suites & Clubs",
        link: "club-card.html"
    }, {
        name: "Groups",
        link: ""
    }, {
        name: "Seating Map",
        link: ""
    }, {
        name: "Account Manager",
        link: ""
    }, {
        name: "Flash Seats",
        link: ""
    } ]


    $scope.content = [ {
        title: "UTAH JAZZ SUITES",
        header: "Welcome to the very best sports and entertainment Utah has to offer—luxury suites at Vivint Smart Home Arena.",
        description: "Whether you’re entertaining business clients, closing a major deal, or socializing with family and friends, a luxury suite provides all the convenience, comfort and service you desire. As the home of the Utah Jazz and the country’s most popular touring musical acts and family shows, Vivint Smart Home Arena is the place to meet, greet, see and be seen in Utah.",
        header2: "Why become a luxury suite holder?",
        descrption2: "Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Smart Home Arena luxury suite holder.",

        images: [ '../../assets/photos/suites/Jazz-Food-066.jpg', '../../assets/photos/suites/Jazz-Food-069.jpg', '../../assets/photos/suites/Jazz-Food-072.jpg', '../../assets/photos/suites/Jazz-Food-090.jpg', '../../assets/photos/CLUBS/607A9784.jpg', '../../assets/photos/CLUBS/607A9785.jpg' ]
        }, {
        title: "INTERFORM EXECUTIVE CLUB",
        header: "Vivint Smart Home Arena is the place to be for Utah’s top sports and entertainment events.",
        description: "The most exclusive area to experience the excitement of the Utah Jazz, plus top performing acts and artists, is the Executives Club on the suite level. This newly expanded area offers impeccable sightlines, in-seat service, and an exclusive VIP environment with an array of VIP benefits. The Executives Club is the only place to entertain top clients, business associates and friends in Utah’s greatest sports and entertainment facility.",
        points: [ "Full-service, in-suite VIP dinner at all Utah Jazz games (soft drinks are included, alcoholic beverages are available for purchase)", "Reserved club parking", "Plenty of room to network, socialize and 'close the deal'", "The first right to purchase your Executives Club seats or other premium tickets for all other Vivint Smart Home Arena events", "Large flat screen TVs located throughout the club", "Incredible suite-level view for Jazz games" ],

        images: [ '../../assets/photos/CLUBS/607A9805.jpg', '../../assets/photos/CLUBS/607A9804.jpg', '../../assets/photos/CLUBS/607A9797.jpg', '../../assets/photos/CLUBS/607A9783.jpg', '../../assets/photos/CLUBS/607A9784.jpg', '../../assets/photos/suites/t41a9134.jpg' ]
        }, {
        title: "LEXUS CLUB",
        header: "The Lexus Courtside Club—one of the most prestigious clubs offered—provides the ultimate in luxury and sophistication.",
        description: "Located in the front four rows at center court (behind the scorer’s table), the Lexus Courtside Club enables you to enjoy the excitement of Jazz basketball from the comfort of oversized leather seats equipped with TV monitors. The club also includes elite service and amenities, such as pregame meals and halftime snacks served in the privacy of the Lexus Club dining room.",
        footer: "For more information, please call Chris Barney (Vice President of Premium Seating & VIP Services) at 801.325.2323.",
        images: [ '../../assets/photos/CLUBS/607A9783.jpg', '../../assets/photos/CLUBS/607A9785.jpg', '../../assets/photos/CLUBS/607A9789.jpg', '../../assets/photos/CLUBS/607A9790.jpg' ]
        } ]
    //TABS
    $scope.selectedIndex = 1;

    //SIDE-NAV
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.toggleLeft = buildToggler( 'left' );
    $scope.toggleRight = buildToggler( 'right' );

    function buildToggler( componentId ) {
        return function () {
            $mdSidenav( componentId ).toggle();
        }
    }
    //SIDE-NAV menu
    $scope.openMenu = function ( $mdMenu, ev ) {
        originatorEv = ev;
        $mdMenu.open( ev );
    };

    //NAV-BAR
    $scope.currentNavItem = 'Tickets';

    //bottom Sheet

    $scope.showGridBottomSheet = function () {
        $mdBottomSheet.show( {
            templateUrl: './src/view/contact_us.html'
        } )
    }




} ) )
