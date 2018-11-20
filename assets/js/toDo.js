//Check off the specific todos by clicking on them
$("ul").on("click","li",function(event){
    //Prevents the other event to bubbling up 
    event.stopPropagation()
    //Turning the "doneTodo" class On and Off by clicking on the specific todo
    $(this).toggleClass("doneTodo");
});


//Deleting the todo by  click on the trashcan
$("ul").on("click","span",function() { 
    //Fade out/remove the todo 
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
});

 
//Adding new todo to the list by clicking Enter key
$("input[type='text']").keypress(function(e){
    if(e.which==13){
        //Getting the new item entered
        var newToDo = $(this).val(); 
        //Just to clear the new itme we added from text input
        $(this).val(""); 
        //Add new to dos to the list
        $("ul").append("<li><span><i class='fas fa-minus-square'></i></span> " + newToDo + "</li>");    };
});

//Make our button to fade in and out the text input  
$(".fa-plus-circle").on("click",function() {
    $("input[type='text']").fadeToggle("slow","linear");
});

//Getting updated yaear for footer
var year = new Date().getFullYear();
$("footer").append(year);


