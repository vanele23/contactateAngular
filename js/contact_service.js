'use strict';
 
app.factory( 'ContactService', ['$http', function($http){
 
 return{
    eliminarContacto: function(id)
     {
     	return $http.delete('http://163.172.218.124/pwf/rest/agenda/'+id); 
     },
     todosContactos:function(inicio, cantidad,filtro)
     {
     	if (filtro==null)
     	{
     		return $http.get('http://163.172.218.124/pwf/rest/agenda?inicio='+inicio+'&cantidad='+cantidad); 
     	}
     	else
     	{
     		return $http.get('http://163.172.218.124/pwf/rest/agenda?inicio='+inicio+'&cantidad='+cantidad+'&filtro='+filtro); 
     	}

     },
     actualizarContacto: function(id, data)
     {
     	return $http.put('http://163.172.218.124/pwf/rest/agenda/'+id,data); 
     },
     crearContacto:function(data){
          return $http.post('http://163.172.218.124/pwf/rest/agenda', data); 
            
        },
     actualizarContacto: function(id, data)
     {
          return $http.put('http://163.172.218.124/pwf/rest/agenda/'+id,data); 
     },
 }
 
}]);