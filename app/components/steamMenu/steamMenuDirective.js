angular.module('Steamify').directive('steamMenu',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SteamMenuController",
			controllerAs :"steamMenu",
			templateUrl : "app/components/steamMenu/steamMenu.html",
			scope : true
		};
	}
);