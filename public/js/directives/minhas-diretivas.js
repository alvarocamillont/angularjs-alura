/* global angular */
/* Módulo diretivas customizadas */
angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        /* objetos directive data object */
      var ddo = {}
        /* Utilizado como atributo ou elemento */
      ddo.restrict = 'AE'
      ddo.transclude = true

      ddo.scope = {
        titulo: '@'
      }

      ddo.templateUrl = 'js/directives/meu-painel.html'

      return ddo
    })
