$(document).ready(()=>{
    $("button").click(()=>{
        let email=$("#email").val();
        let password=$("#email").val();
        if(validate(email,password))
        {
            $("#message").html("Welcome to transflower");
        }
        else
        {
            $("#message").html("Invalid user, please try again");
        }

    })
})