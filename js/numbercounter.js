
var nbr = 0;

$().ready(function() {

    display(nbr);

    $("#minus").click(function() {
        display(--nbr);
    });

    $("#plus").click(function() {
        display(++nbr);
    });
    
});

function display(nbr) {
    $("label").text(nbr)
        // .css("color", "black")
        // .css("font-weight", "normal")
        // .css("font-style", "normal");

    // if(nbr % 2 == 0) {
    //     $("label").css("color", "red");
    // }
    // if(nbr % 3 == 0) {
    //     $("label").css("font-weight", "bold");
    // }
    // if(nbr % 7 == 0) {
    //     $("label").css("font-style", "italic");
    // }
}


// $().ready(function() {
    
    // var count = 1;
    // var countEl = document.getElementById("count");
    // function plus(){
    //     count++;
    //     countEl.value = count;
    // }
    // function minus(){
    //   if (count > 1) {
    //     count--;
    //     countEl.value = count;
    //   }  
    // }

    // $('button').click(function() {
    //     var $btn = $(this);
    //     $('#output').html(function(i, val) {
    //       val = val * 1 + $btn.data('inc');
    //       return (val <= 0 ? '' : '+') + val;
    //     });
    //   });
     

    // $("button").click(function() {//method is exceuted when button gets clicked
    //     // // do things for when button is clicked
    //     // var inputValue = $("#txt").val(); // gives us reference then puts the value of the input box into a thing...?
    //     // $("label").text(inputValue);
    //     var increment = 0;

    // }) 
// })