/* global angular */

angular.module('alurapic').controller('FotoController', function ($scope, $routeParams, cadastroDeFotos, recursoFoto) {
  $scope.fotos = {}
  $scope.mensagem = ''

  if ($routeParams.fotoId) {
    recursoFoto.get({fotoId: $routeParams.fotoId},
    function (foto) {
      $scope.foto = foto
    }, function (erro) {
      console.log(erro)
      $scope.mensagem = 'Não foi possí­vel alterar a foto'
    })
  }

  $scope.submeter = function () {
    if ($scope.formulario.$valid) {
      cadastroDeFotos.cadastrar($scope.foto)
                .then(function (dados) {
                  $scope.mensagem = dados.mensagem
                  if (dados.inclusao) $scope.foto = {}
                })
                .catch(function (erro) {
                  $scope.mensagem = erro.mensagem
                })
    }
  }
})
