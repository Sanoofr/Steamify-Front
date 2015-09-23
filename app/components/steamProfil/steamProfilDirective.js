angular.module('Steamify').directive('steamProfil',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SteamProfilController",
			controllerAs :"steamProfil",
			templateUrl : "app/components/steamProfil/steamProfil.html",
			scope : true
		};
	}
);