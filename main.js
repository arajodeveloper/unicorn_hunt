
// bombPosition = (pick some random)
// unicornPosition = (pick some random in loop until not equal to bombposition)
// everything else is donkey by default
var unicornPosition = Math.floor(Math.random() * 17)
var bombPosition = Math.floor(Math.random() * 17) 
while(bombPosition === unicornPosition) {
    bombPosition = Math.floor(Math.random() * 17) 
}

var count = 8;

var showImage = (elementId) => {
    count -= 1;
    if (count < 0){
        alert('You suck at this!');
        setTimeout(function(){ location.reload(); }, 1000);
    }
    var countElement = document.getElementById("count");
    countElement.innerHTML = count;
    var element = document.getElementById(elementId);
    if (elementId == bombPosition){
        setTimeout(function(){ alert("You lose!"); }, 300);
        element.innerHTML = '<img src="https://pngimg.com/uploads/bomb/bomb_PNG40.png" width="20px" class="animals">';
        
    }   

    else if (elementId == unicornPosition){
        element.innerHTML = '<img src="https://storage.needpix.com/rsynced_images/unicorn-4127196_1280.png" width="20px" class="animals">';
        setTimeout(function(){ alert("You win!"); }, 300);

    }
    else {
        element.innerHTML = '<img src="https://freesvg.org/img/scecco.png" width="20px" class="animals"></img>';
    }
}


var reloadPage = () => {
    location.reload();
}



