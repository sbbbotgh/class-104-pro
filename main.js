function take_snapshot(){
    document.getElementById("go_button").style.visibility = "hidden";
    document.getElementById("step_go").style.visibility = "visible";
    document.getElementById("or_label").style.visibility = "visible";
    document.getElementById("step_back").style.visibility = "visible";
    document.getElementById("camera").style.visibility = "hidden";
    document.getElementById("camera").style.height = "0px";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").style.height = "300px";
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}


function step_back(){
    document.getElementById("go_button").style.visibility = "visible";
    document.getElementById("step_go").style.visibility = "hidden";
    document.getElementById("or_label").style.visibility = "hidden";
    document.getElementById("step_back").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("result").style.height = "0px";
    document.getElementById("camera").style.visibility = "visible";
    document.getElementById("camera").style.height = "300px";
}


function check(){
    document.getElementById("or_label").style.visibility = "hidden";
    document.getElementById("step_back").style.visibility = "hidden";
    document.getElementById("step_go").style.visibility = "hidden";
    document.getElementById("back_button").style.visibility = "visible";
    document.getElementById("Object_box").style.visibility = "visible";
    document.getElementById("Accuracy_box").style.visibility = "visible";
    document.getElementById("result_object_name").innerHTML = "";
    document.getElementById("result_object_Accuracy").innerHTML = "";
}

function back(){
    document.getElementById("go_button").style.visibility = "visible";
    document.getElementById("back_button").style.visibility = "hidden";
    document.getElementById("Object_box").style.visibility = "hidden";
    document.getElementById("Accuracy_box").style.visibility = "hidden";
    document.getElementById("result_object_name").innerHTML = "";
    document.getElementById("result_object_Accuracy").innerHTML = "";
}

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/hZ9GYyER_/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}