const express = require('express');
var bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.json());
bodyParser.urlencoded({extended: false});
const port = 3000;
const util = require('util'); 
const fs = require('fs'); 
const TrainingApiClient = require("azure-cognitiveservices-customvision-training"); 
const PredictionApiClient = require("azure-cognitiveservices-customvision-prediction"); 
const setTimeoutPromise = util.promisify(setTimeout); 
//const trainingKey = "4c7eb965e7cc4e6aa9e2b741b36e8974"; 
const predictionKey = "6cd2b7b137f4419880844fd916cef75f"; 
//const predictionResourceId = "<your prediction resource id>"; 
const sampleDataRoot = "C:/Users/v.a.palanichamy/Documents/Seed Guard/Image Preprocessed/Processed Original Images/Original Seed - Processed Images/Almond_O_01.jpg"; 
const endPoint = "https://centralindia.api.cognitive.microsoft.com";
const publishIterationName = "SeedGuard1"; 
 const predictor = new PredictionApiClient(predictionKey, endPoint);     
 
app.post('/predict', function(req, res){ 
 var resultVal = [];
//console.log(req.query);
console.log(req.body);
const testFile = fs.readFileSync(sampleDataRoot); 
//console.log(testFile);
let resultdata = async () => { 
 const results = await predictor.classifyImage('eb74cf04-eb8e-4eca-824a-368e4683d2f0', publishIterationName, testFile);
 //var resultVal = [];
return results.predictions;     //console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
 

}
//console.log(resultVal);
resultdata().then((data)=>{
	//res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

res.send(data)});
});


app.listen(port, () => console.log(`app listening on port ${port}!`));


process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});