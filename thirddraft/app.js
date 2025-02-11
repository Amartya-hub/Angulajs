//1.define angularjs Module
// line no 3 we need to register module and dependency in []
//js 
//
var app =angular.module("transflower",[]);
app.controller("LoginController",function($scope){          // we are registering controller here and logincontroller is there
    //custom logic is also there 
    //from of dictionary
    //to define a modele : $scope


 
    //define model
    $scope.user={
        email:"amartyakaushik044@gmail.com", // service inbuilt($) 
        password:"seed"
    };


    $scopr.onValidate=function(){ ///event handler
        if(){
            console.log("Welcome");
        }
        else{
            console.log("Invalid user");

        }
    }
});