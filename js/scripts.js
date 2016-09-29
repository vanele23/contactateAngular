'use strict';
var app=angular.module("myApp",[]);
app.controller("ContactContr",function($http,$scope,ContactService)
{
   $scope.inicio=0;
  $scope.cantidad=20;
  $scope.filtro=null;
  $scope.cargarContactos= function(){
    ContactService.todosContactos($scope.inicio,$scope.cantidad,$scope.filtro).then(function(response){
      $scope.contactos=response.data.lista;
      $scope.pages = response.data.total;
      if (response.data.total==0)
      {
        alert ("No se encontraron resultados");

        $scope.filtro=null;
        $scope.cargarContactos();

      }
    });
  };
  $scope.nextPage = function() {
    if ($scope.inicio < $scope.pages) {
        $scope.inicio=$scope.inicio+$scope.cantidad;

        $scope.cargarContactos();
    }
  };
            
  $scope.previousPage = function() {
    if ($scope.inicio > 0) {
        $scope.inicio=$scope.inicio-$scope.cantidad;
        $scope.cargarContactos();
    }
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
