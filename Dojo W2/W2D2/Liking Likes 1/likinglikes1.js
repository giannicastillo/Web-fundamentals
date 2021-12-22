let likebtn = 3
var likebtnElement = document.querySelector("#three-likes");

console.log(likebtnElement)

function add1(){
    likebtn++;
    likebtnElement.innerText = likebtn + "like(s)"
    console.log(likebtn)
}