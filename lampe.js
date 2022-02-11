function SwitchFct() 
{
    var lamp = document.getElementById("leteint");
    var contact = document.getElementById("ceteint");
    //var myAudio = document.getElementById("Switch");
    if (contact.src.indexOf("image/SwitchOff.png") ==-1){
        lamp.src="image/lightOff.png";
        document.body.style.background = "#000000"
        document.getElementById("title").style.fontSize = "60px"
        document.getElementById("title").style.color = "#ffffff"

        contact.src="image/SwitchOff.png";
       // myAudio.onplay()
    }
    else{
        lamp.src="image/lightOn.png" ;
        document.body.style.background = "#f1a100"
        document.getElementById("title").style.fontSize = "60px"
        document.getElementById("title").style.color = "000000#"
        contact.src="image/SwitchOn.png";
        //myAudio.onplay()
    }
}