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
    if ($scope.inicio+$scope.cantidad < $scope.pages) {
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
  $scope.firstPage=function()
  {
    if ($scope.inicio > 0) {
    $scope.inicio=0;
    $scope.cargarContactos();
    }
  },
  $scope.lastPage=function()
  {
    $scope.inicio=0;
    $scope.inicio=$scope.pages-($scope.pages%$scope.cantidad);
    $scope.cargarContactos();
  },
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
  $scope.datosModelo = {
            "id": 0,
            "nombre": "",
            "apellido": "",
            "alias":"",
            "telefono":"",
            "email":"",
            "direccion":"",
            "fechaCreacion":""

        };
 
 $scope.Guardar=function()
  {
    /*datos que se obtienen del formulario*/
    var data={
      apellido:$scope.nuevoContacto.apellido,
      alias:$scope.nuevoContacto.alias,
      nombre:$scope.nuevoContacto.nombre,
      direccion:$scope.nuevoContacto.direccion,
      telefono:$scope.nuevoContacto.telefono,
      email:$scope.nuevoContacto.email
    }  
    /*se llama a la funcion del post y se obtiene el response del mismo*/
  ContactService.crearContacto(data).then(function(response)
        {
            $scope.contactos.push(response.data);
            $scope.editar(response.data.id);
            $scope.cargarContactos();
            
            alert("Contacto creado con exito");
            /*procedemos a llamar  a la pantalla de editar contacto*/
            
        }, function(response){

            alert("El Contacto no pudo ser creado");
        
        });      
};
  $scope.editar=function(id)
  {
    /*recorremos nuestra lista para obtener nuestro registro*/
    for (var i=$scope.contactos.length-1; i>=0; i--) {
   
      if ( $scope.contactos[i].id ==id) 
      {
          $scope.datosModelo.id=$scope.contactos[i].id;
          $scope.datosModelo.nombre=$scope.contactos[i].nombre;
          $scope.datosModelo.apellido=$scope.contactos[i].apellido;
          $scope.datosModelo.alias=$scope.contactos[i].alias;
          $scope.datosModelo.email=$scope.contactos[i].email;
          $scope.datosModelo.telefono=$scope.contactos[i].telefono;
          $scope.datosModelo.direccion=$scope.contactos[i].direccion;
          $scope.datosModelo.fechacreacion=$scope.contactos[i].fechacreacion;
      }
    }

  };
  $scope.GuardarEdicion=function(id,data)
  {
      ContactService.actualizarContacto(id,data).then(function(response)
        {
            $scope.cargarContactos();
            alert("Contacto actualizado con exito");
            /*procedemos a llamar a llamar a la pantalla de editar contacto*/
            $scope.editar(response.data.id);
        }, function(response){

            alert("El Contacto no pudo ser actualizado");
        
        });     
  };
   $scope.datos = {
            "id": 0,
            "nombre": "",
            "apellido": "",
            "alias":"",
            "telefono":"",
            "email":"",
            "direccion":"",
            "fechaCreacion":""

        };
 
/*este debajo de la funcion GuardarEdicion*/
$scope.detalles=function(id)
  {
      ContactService.verContacto(id).then(function(response)
      {
          $scope.datos.id=response.data.id;
          $scope.datos.nombre=response.data.nombre;
          $scope.datos.apellido=response.data.apellido;
          $scope.datos.alias=response.data.alias;
          $scope.datos.email=response.data.email;
          $scope.datos.telefono=response.data.telefono;
          $scope.datos.direccion=response.data.direccion;
          $scope.datos.fechacreacion=response.data.fechacreacion;
         
      }, function(response)
      {
        alert("El Contacto no pudo ser cargado, intentelo mas tarde");
      });
  };
});


