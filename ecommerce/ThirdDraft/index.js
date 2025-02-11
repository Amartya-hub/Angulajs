var app = angular.module("transflower", []);
app.controller("loginController", function($scope) {
    $scope.user = {
        email: "amartya@gmail.com",
        password: "admin"
    }
    $scope.users=[
        {
            email: "amartyak@gmail.com",
            password: "admin"
        },
        {
            email: "test@gmail.com",
            password: "admin"
        },
        {
            email: "john@gmail.com",
            password: "admin"
        },
        {
            email: "user@gmail.com",
            password: "admin"
        }
    ];
    $scope.onValidate = () => {
        if($scope.user){
            console.log("Welcome");
        } else {
            console.log("Invalid User!");
        }
    }
})
app.controller("ProductController", function($scope) {
    $scope.products = [
        {
            name:"Iphone 15",
            price:"54000",
            processor:"IOS",
            brand:"Apple",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjosAWNON6L1dx6Et5OG2Qp76NLVgCwteurQ&s"
        },
        {
            name:"Samsung 25",
            price:"75000",
            processor:"Snapdragon",
            brand:"Samsung",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtSUUTSuPh1o1cG-Qex7LwVG1ne5rJ7Yj9g&s"
        },
        {
            name:"Nothing 2a",
            processor:"Dimensity",
            price:"24000",
            brand:"Nothing",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjosAWNON6L1dx6Et5OG2Qp76NLVgCwteurQ&s"
        },
        {
            name:"Realme 13 Pro",
            processor:"Dimensity",
            price:"20000",
            brand:"Realme",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjosAWNON6L1dx6Et5OG2Qp76NLVgCwteurQ&s"
        },
        {
            name:"POCO F7",
            processor:"Snapdragon",
            price:"27000",
            brand:"POCO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjosAWNON6L1dx6Et5OG2Qp76NLVgCwteurQ&s"
        }
    ]
    // $scope.onValidate = () => {
    //     if($scope.user){
    //         console.log("Welcome");
    //     } else {
    //         console.log("Invalid User!");
    //     }
    // }
})