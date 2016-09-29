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

     }
 }
 
}]);