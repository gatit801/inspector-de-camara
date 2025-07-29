//https://teachablemachine.withgoogle.com/models/0fKt82lsN/

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/0fKt82lsN/model.json',modelLoader)

function modelLoader(){
    console.log('Model Loader')
}

function check(){
    img =document.getElementById('selfie_image')
    classifier.classify(img, gotResult)
}

function gotResult(error, results){

    if(error){
        console.log(error);} 
        else{console.log(results)
    console.log(results[0].label)
    console.log(results[0].confidence)
    document.getElementById("result_object_name").innerHTML= "<h3 class='btn btn-danger'>"+results[0].label+"</h3>" 
    document.getElementById("result_object_accuracy").innerHTML= "<h3 class='btn btn-danger'>"+results[0].confidence.toFixed(3)+"</h3>" }
    
}

    Webcam.attach(camera);
    setTimeout(function(){
    }, 5000)

camera =document.getElementById("camera")

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality:90
})

function snap()
{
    
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_url+'"/>'
    })

};

