var userText = document.querySelector("#textarea") ;
var btn = document.querySelector("#btn-translate") ;
var output = document.querySelector("#output-div") ;

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandeler(error) {
    console.log("error occured" , error)
    alert("something is not right. try again after some time")
}

btn.addEventListener("click" , function(){

    function urlConstructor(){
        return serverURL + "?text=" + userText.value
    }
var newURL = urlConstructor(userText)
console.log(newURL)
fetch(newURL)
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated
    output.innerHTML = translatedText;})
.catch(errorHandeler)
})
console.log("HELLO BERLIN ");




