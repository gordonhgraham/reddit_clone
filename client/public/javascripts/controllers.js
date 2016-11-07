// (function() {
//
//   angular
//     .module('piratesApp')
//     .controller('PiratesController', PiratesController)
//     .controller('ShowPirateController', ShowPirateController)
//     .controller('NewPirateController', NewPirateController)
//
//     function PiratesController(pirates) {
//       var vm = this;
//       vm.pirates = pirates.data;
//     }
//
//     function NewPirateController(PiratesService, $location) {
//       var vm = this;
//       vm.pirates = {}
//
//       vm.addPirate = newPirate => {
//         PirateService.createPirate(newPirate).then(res => {
//           $location.path(`/pirates`)
//         })
//       }
//     }
//
//     function ShowPirateController(PirateService, $route) {
//       var vm = this;
//
//       vm.removePirate = function(id) {
//         PirateService.deletePirate(id).then(function() {
//           $route.reload();
//         })
//       }
//     }
//
//     PiratesController.$inject = ['pirates'];
//     ShowPirateController.$inject = ['PirateService', '$route'];
//     NewPirateController.$inject = ['PirateService', '$location'];
//
// })()
