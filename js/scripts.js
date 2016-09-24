'use strict';
var app=angular.module("myApp",[]);
app.controller("ContactContr",function($http,$scope,ContactService)
{
    $scope.cargarContactos=function()
  {

      ContactService.recuperarContactos().then(function(response){
      $scope.contactos=response.data.lista;
    });
  }
  $scope.cargarContactos();

});
