/* global angular */

angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams, $resource) {
  $scope.fotos = {}
  $scope.mensagem = ''

  var recursoFoto = $resource('v1/fotos/:fotoId')

  if ($routeParams.fotoId) {
    $http.get(`v1/fotos/${$routeParams.fotoId}`)
    .success(function (foto) {
      $scope.foto = foto
    })
    .error(function (erro) {
      console.log(erro)
      $scope.mensagem = 'Não foi possível alterar a foto'
    })
  }

  $scope.submeter = function () {
    if ($scope.formulario.$valid) {
      if ($scope.foto._id) {
        $http.put(`v1/fotos/${$scope.foto._id}`, $scope.foto)
        .success(function () {
          $scope.mensagem = `Foto ${$scope.foto.titulo} alterada com sucesso`
        })
        .error(function (erro) {
          console.log(erro)
          $scope.mensagem = `Não foi possível alterar a foto ${$scope.foto.titulo}`
        })
      } else {
        $http.post('v1/fotos', $scope.foto)
        .success(function () {
          $scope.foto = {}
          $scope.mensagem = 'Foto cadastrada com sucesso'
        })
        .error(function (erro) {
          console.log(erro)
          $scope.mensagem = 'Não foi possível cadastrar a foto'
        })
      }
    }
  }
})
