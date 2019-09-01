
     var arr = [ 
        "<img src ='img/Animals/giraffe.jpg'></img>",
        "<img src ='img/Animals/puppy.jpg'></img>",
        "<img src ='img/Animals/turtle.jpg'></img>",
        "<img src ='img/Animals/seal.jpg'></img>",    
     ];
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



 function Update () {
    $("#div1").html(arr[0])
    $("#div2").html(arr[1])
    $("#div3").html(arr[2])
    $("#div4").html(arr[3])
}

function Shuffle (){
    arr = shuffle(arr);
    Update()
    Log()
    
}

var nameArray = []
function Log(){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === "<img src ='img/Animals/giraffe.jpg'></img>") {
            nameArray[i] = "giraffe"
        }
        if (arr[i] === "<img src ='img/Animals/puppy.jpg'></img>") {
            nameArray[i] = "puppy"
        }
        if (arr[i] === "<img src ='img/Animals/turtle.jpg'></img>") {
            nameArray[i] = "turtle"
        }
        if (arr[i] === "<img src ='img/Animals/seal.jpg'></img>") {
            nameArray[i] = "seal"
        }
    }
    console.log(nameArray[0])
    console.log(nameArray[1])
    console.log(nameArray[2])
    console.log(nameArray[3])
}


divArray1 = ["giraffe"]
divArray2 = ["puppy"]
divArray3 = ["seal"]
divArray4 = ["turtle"]

var losses = 0;

function hasDuplicates(array) {
   
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            console.log("you lost") 
            return true;  
        }
        valuesSoFar[value] = true;
    }
    console.log("still winning")
    return false;
}
    
var animalList = []
$( "#div1" ).click(function() {
   Shuffle()

});

$( "#div2" ).click(function() {
    console.log(nameArray[1])
    Shuffle()
    
    
  
});

$( "#div3" ).click(function() {
   Shuffle()
   
});

$( "#div4" ).click(function() {
   Shuffle()
});