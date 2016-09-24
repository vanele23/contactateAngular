'use strict';
 
app.factory( 'ContactService', ['$http', function($http){
 
 return{
     recuperarContactos:function()
     {
        return $http.get('http://localhost:1337/163.172.218.124/pwf/rest/agenda'); 
     }
 }
 
}]);