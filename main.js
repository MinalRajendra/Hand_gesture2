prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam .attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://https://teachablemachine.withgoogle.com/models/[...]',modelloaded);

function modelloaded(){
    console.log("model has loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first prediction is" + prediction_1;
    speakdata2="the second prediction is" + prediction_2;
    var utter=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utter);
}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("result_name1").innerHTML=results[0].label;
        document.getElementById("result_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="hi"){
            document.getElementById("result_emoji1").innerHTML="&#128400;"
        }
        if(results[0].label=="ok/nice"){
            document.getElementById("result_emoji1").innerHTML="&#128076;"
        } 
        if(results[0].label=="thumbs up"){
            document.getElementById("result_emoji1").innerHTML="&#128077;"
        }
        if(results[0].label=="thumbs down"){
            document.getElementById("result_emoji1").innerHTML="&#128077;"
        }


        if(results[1].label=="hi"){
            document.getElementById("result_emoji2").innerHTML="&#128400;"
        }
        if(results[1].label=="ok/nice"){
            document.getElementById("result_emoji2").innerHTML="&#128076;"
        } 
        if(results[1].label=="thumbs up"){
            document.getElementById("result_emoji2").innerHTML="&#128077;"
        }
        if(results[1].label=="thumbs down"){
            document.getElementById("result_emoji2").innerHTML="&#128077;"
        }

    }
}