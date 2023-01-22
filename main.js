prediction_1 = "";
prediction_2 = "";
Webcam.set ({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById("webcam");
Webcam.attach('#webcam');

function camm(){
    Webcam.snap(function(data_uri){
        document.getElementById("ssnapshot").innerHTML = "<img id='captured_image' src='"+data_uri+"'>"
    });
}

console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/izxaXDSRJ/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_1 = "The first prediction is that it's " + prediction_1;
    speak_2 = "The second prediction is that it's " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utterThis);
}
function predict(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error, results){
    if (error) {
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("ded").innerHTML = results[0].label;
        document.getElementById("ded1").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "GOOD"){
            document.getElementById('hoond').innerHTML = "👍";
        }
        if (results[0].label == "BAD"){
           document.getElementById("hoond").innerHTML = "👎";
        }
        if (results[0].label == "VICTORY"){
            document.getElementById("hoond").innerHTML = "✌";
        }
        if (results[0].label == "SUPER"){
            document.getElementById("heend").innerHTML = "👌";
        }
        if (results[0].label == "PUNCH THE SKY"){
            document.getElementById("hoond").innerHTML = "✊";
        }
        if (results[1].label == "GOOD"){
            document.getElementById('hoond1').innerHTML = "👍";
        }
        if (results[1].label == "BAD"){
           document.getElementById("hoond1").innerHTML = "👎";
        }
        if (results[1].label == "VICTORY"){
            document.getElementById("hoond1").innerHTML = "✌";
        }
        if (results[1].label == "SUPER"){
            document.getElementById("hoond1").innerHTML = "👌";
        }
        if (results[1].label == "PUNCH THE SKY"){
            document.getElementById("hoond1").innerHTML = "✊";
        }
    }
    }