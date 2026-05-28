const paragraphElementOne = document.getElementById("paragraph1")
const paragraphElementTwo = document.getElementById("paragraph2")

const buttonElement = document.getElementById("click-me")


var isVisible = true;

function paragraphVisble(){

    if(isVisible){
      paragraphElementOne.style.display = "none";
      paragraphElementTwo.style.color = "red";

    } else {
        paragraphElementOne.style.display = "block"
        paragraphElementTwo.style.color = "chocolate";

    }
  isVisible = !isVisible

}



buttonElement.addEventListener("click", paragraphVisble)
