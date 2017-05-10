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
.factory('cadastroDeFotos', function (recursoFoto, $q) {
  var servico = {}

  servico.cadastrar = function (foto) {
    return $q(function (resolve, reject) {
      if (foto._id) {
        recursoFoto.update({fotoId: foto._id}, foto,
          function () {
            resolve({
              mensagem: `Foto ${foto.titulo} alterada com sucesso`,
              inclusao: false
            })
          },
          function (erro) {
            console.log(erro)
            reject({mensagem: `Não foi possível alterar a foto ${foto.titulo}`})
          })
      } else {
        recursoFoto.save(foto,
          function () {
            resolve({
              mensagem: `Foto ${foto.titulo} foi incluida com sucesso`,
              inclusao: true
            })
          },
          function (erro) {
            console.log(erro)
            reject({mensagem: `Não foi possível incluir a foto ${foto.titulo}`})
          })
      }
    })
  }

  return servico
}
)
