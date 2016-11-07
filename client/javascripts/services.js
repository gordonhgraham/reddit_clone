// (function() {
//
//   angular
//     .module('piratesApp')
//     .service('PirateService', PirateService)
//
//     function PirateService($http) {
//       const BASE_URL = '/api/pirates'
//
//       this.getPirates = function() {
//         return $http.get(BASE_URL);
//       }
//
//       this.createPirate = newPirate => {
//         return $http.post(BASE_URL, newPirate)
//       }
//
//     }
//
//     PirateService.$inject = ["$http"];
//
// })()
