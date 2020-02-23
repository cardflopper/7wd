let tokens = ['agr','arc','eco','law','mas','mat','phi','str','the','urb'];

randomize();

function randomize(){
    let output = document.getElementById("output");
    resetAnimation(output);
    output.hidden = true;
    shuffle();
    output.hidden = false;
    output.classList.add("slide");
}

function shuffle(){

    let output = document.getElementById("output");
    while (output.firstChild) {
        output.removeChild(output.lastChild);
    }    
    shuffleArray(tokens)

    let chosen = tokens.slice(0,5);
   
    for(let i=0; i<chosen.length;i++){
        let pic = document.createElement("img");
        pic.setAttribute("src","img/progress_token_"+chosen[i]+"_cut.png");
        pic.classList.add("token");
        output.append(pic);
    }
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function resetAnimation(el) {
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null; 
}
