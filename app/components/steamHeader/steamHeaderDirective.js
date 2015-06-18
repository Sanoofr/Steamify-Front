angular.module('Steamify').directive('steamHeader',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SteamHeaderController",
			controllerAs :"steamHeader",
			templateUrl : "app/components/steamHeader/steamHeader.html",
			scope : true
		};
	}
);