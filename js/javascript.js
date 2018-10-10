
$().ready(function() {
    
    $("button").click(function() {//method is exceuted when button gets clicked
        // do things for when button is clicked
        var inputValue = $("#txt").val(); // gives us reference then puts the value of the input box into a thing...?
        $("label").text(inputValue);
    }) 
}) //JQuery
 






// function loaded() {
//     document.getElementById("lbl").innerHTML = "Mom";
//     // puts "Rachael" in the lbl before any of the following text gets interpreted
// }

// function clicked() {
//     var inputCtrl = document.getElementById("txt");
//     var inputValue = inputCtrl.value;
//     console.log("The value is:", inputValue); // write to the console log
//     var labelCtrl = document.getElementById("lbl");
//     labelCtrl.innerText = inputValue; // innerText is property for content control like paragraphs and stuff
// }