'use strict';
 
app.factory( 'ContactService', ['$http', function($http){
 
 return{
    eliminarContacto: function(id)
     {
     	return $http.delete('https://desa03.konecta.com.py/pwf/rest/agenda/'+id); 
     },
     todosContactos:function(inicio, cantidad,filtro)
     {
     	if (filtro==null)
     	{
     		return $http.get('https://desa03.konecta.com.py/pwf/rest/agenda?inicio='+inicio+'&cantidad='+cantidad); 
     	}
     	else
     	{
     		return $http.get('https://desa03.konecta.com.py/pwf/rest/agenda?inicio='+inicio+'&cantidad='+cantidad+'&filtro='+filtro); 
     	}

     },
     actualizarContacto: function(id, data)
     {
     	return $http.put('https://desa03.konecta.com.py/pwf/rest/agenda/'+id,data); 
     },
     crearContacto:function(data){
          return $http.post('https://desa03.konecta.com.py/pwf/rest/agenda', data); 
            
        },
     actualizarContacto: function(id, data)
     {
          return $http.put('https://desa03.konecta.com.py/pwf/rest/agenda/'+id,data); 
     },
 }
 
}]);