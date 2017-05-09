/* global angular */
angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function ($resource) {
  var recursoFoto = $resource('v1/fotos/:fotoId', null, {
    update: {
      method: 'PUT'
    }
  })
  return recursoFoto
}

)
