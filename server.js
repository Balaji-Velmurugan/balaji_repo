/* const util = require('util'); 
const fs = require('fs'); 
const TrainingApiClient = require("azure-cognitiveservices-customvision-training"); 
const PredictionApiClient = require("azure-cognitiveservices-customvision-prediction"); 
const setTimeoutPromise = util.promisify(setTimeout); 
const trainingKey = "4c7eb965e7cc4e6aa9e2b741b36e8974"; 
const predictionKey = "6cd2b7b137f4419880844fd916cef75f"; 
//const predictionResourceId = "/subscriptions/9559a691-c63d-4b25-a449-2854cddde655/resourceGroups/GTIC2019/providers/Microsoft.CognitiveServices/accounts/GTIC2019_SeedGuard_Prediction"; 
const sampleDataRoot = "C:/Users/Public/Pictures/Sample Pictures/Desert.jpg"; 
const endPoint = "https://southcentralus.api.cognitive.microsoft.com";

//const publishIterationName = "classifyModel";

const trainer = new TrainingApiClient(trainingKey, endPoint);

(async () => {
    console.log("Creating project...");
    //const sampleProject = await trainer.createProject("Sample Project");
const publishIterationName = "SeedGuard1"; 
 const predictor = new PredictionApiClient(predictionKey, endPoint);     
 const testFile = fs.readFileSync(`${sampleDataRoot}`);     
 const results = await predictor.classifyImage('eb74cf04-eb8e-4eca-824a-368e4683d2f0', publishIterationName, testFile);     // Step 6. Show results     
 console.log("Results:");     results.predictions.forEach(predictedResult => {         
 console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
 });
 })()
 
 process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
}); */


const util = require('util'); 
const fs = require('fs'); 
const TrainingApiClient = require("azure-cognitiveservices-customvision-training"); 
const PredictionApiClient = require("azure-cognitiveservices-customvision-prediction"); 
const setTimeoutPromise = util.promisify(setTimeout); 
//const trainingKey = "4c7eb965e7cc4e6aa9e2b741b36e8974"; 
const predictionKey = "6cd2b7b137f4419880844fd916cef75f"; 
//const predictionResourceId = "<your prediction resource id>"; 
const sampleDataRoot = "C:/Users/Public/Pictures/Sample Pictures/Desert.jpg"; 
const endPoint = "https://southcentralus.api.cognitive.microsoft.com";
const publishIterationName = "SeedGuard1"; 
 const predictor = new PredictionApiClient(predictionKey, endPoint);     
 const testFile = fs.readFileSync(`${sampleDataRoot}`); 

(async () => { 
 const results = await predictor.classifyImage('eb74cf04-eb8e-4eca-824a-368e4683d2f0', publishIterationName, testFile);     // Step 6. Show results     
 console.log("Results:");     results.predictions.forEach(predictedResult => {         console.log(`\t ${predictedResult.tagName}: ${(predictedResult.probability * 100.0).toFixed(2)}%`);
 });
})()

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});