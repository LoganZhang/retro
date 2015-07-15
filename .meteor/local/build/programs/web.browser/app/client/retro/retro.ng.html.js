(function(){angular.module('angular-meteor').run(['$templateCache', function($templateCache) {$templateCache.put("client/retro/retro.ng.html", "<div class=\"container\"> <section class=\"section\" ng-repeat=\"section in sections\"> <retro-section name=\"section.name\"></retro-section> </section> </div>");}]);

})();
