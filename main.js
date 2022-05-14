Webcam.set({
    width:300,
    height:300,
    image_format :'png',
    png_quality:90,
    constraints: {
        facingMode:"envionment"
    }
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';    

    });
}

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xXdONqOJ3/modeljason', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}