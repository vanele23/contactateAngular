'use strict';
var app=angular.module("myApp",[]);
app.controller("ContactContr",function($http,$scope,ContactService)
{
    $scope.cargarContactos=function()
  {

      ContactService.recuperarContactos().then(function(response){
      $scope.contactos=response.data.lista;
    });
  };
  $scope.cargarContactos();
  $scope.delete = function (id) {
        ContactService.eliminarContacto(id).then(function(response)
        {
            $scope.cargarContactos();
            alert("Contacto eliminado con exito");
            

        }, function(response){

            alert("El Contacto no pudo ser eliminado");
       
        });     
       
  };
 

});
