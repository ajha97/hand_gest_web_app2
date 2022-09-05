Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image"'+data_uri+'"/>"'
    });
}

console.log('ml5 version:', ml5.version);


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BonfLPjPq/model.json",modelLoaded);
function modelLoaded()

{ console.log ("model.Loaded")}

function check ()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results){
    if (error) {
        console.error(error);
    } else  {
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML=results[0].label;  
    document.getElementById("result_gesture_name2").innerHTML=results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[2].label;
    speak();
    if(results[0].label =="all the best")
    {
        document.getElementById("update_gesture").innerHTML
    }
    if (results[0].label=="that is looking amazing")
    {
        document.getElementById("update_gesture").innerHTML

        if (results[0].label=="that was a marvelous victory")
    {
        document.getElementById("update_gesture").innerHTML   
    } 
    if(results[1].label=="all the best")
    {
        document.getElementById("update_gesture2")

        if(results[1].label=="that is looking amazing")
    {
        document.getElementById("update_gesture2")
    } 

    if(results[1].label=="that was a mavreluos victory")
    {
        document.getElementById("update_gesture2")
    } 
    } 
    }
    }
}