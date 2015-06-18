angular.module('Steamify').directive('steamFriends',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SteamFriendsController",
			controllerAs :"steamFriends",
			templateUrl : "app/components/steamFriends/steamFriends.html",
			scope : true
		};
	}
);