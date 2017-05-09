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
     .directive('minhaFoto', function () {
        /* objetos directive data object */
       var ddo = {}
        /* Utilizado como atributo ou elemento */
       ddo.restrict = 'AE'
       ddo.transclude = true

       ddo.scope = {
         url: '@',
         titulo: '@'
       }

       ddo.templateUrl = 'js/directives/minha-foto.html'

       return ddo
     })
       .directive('meuBotaoPerigo', function () {
        /* objetos directive data object */
         var ddo = {}
        /* Utilizado como atributo ou elemento */
         ddo.restrict = 'E'

         ddo.scope = {
           nome: '@',
           acao: '&'
         }

         ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>'

         return ddo
       })
