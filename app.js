var fileData = require("./fileData");
var testMetrics = require("./textMetrics");

//file location
var chapter1Path = "/Users/haoweichen/Downloads/CS546/playground/git_file/lab3/chapter1.txt";
var chapter2Path = "/Users/haoweichen/Downloads/CS546/playground/git_file/lab3/chapter2.txt";
var chapter3Path = "/Users/haoweichen/Downloads/CS546/playground/git_file/lab3/chapter3.txt";
var c1ResultPath = "chapter1Result.txt";
var c2ResultPath = "chapter2Result.txt";
var c3ResultPath = "chapter3Result.txt";

try {
	var fileRdPromise1 = fileData.getFileAsString(chapter1Path);
	fileRdPromise1.then((data) => {
		//process data
		var MetricsObj = testMetrics.createMetrics(data);
		return MetricsObj;
	}, (err) => {
		console.log(err);
	}).then((data)=>{
		//save and print
		var saveText = JSON.stringify(data);
		var fileWtPromise1 = fileData.saveStringToFile(c1ResultPath,saveText);
		fileWtPromise1.then((rtn)=>{
			console.log("finish analyse chapter1");
			},(err)=>{
				console.log(err);
			});
	});
	
	var fileRdPromise2 = fileData.getFileAsString(chapter2Path);
	fileRdPromise2.then((data) => {
		//process data
		var MetricsObj = testMetrics.createMetrics(data);
		return MetricsObj;
	}, (err) => {
		console.log(err);
	}).then((data)=>{
		//save and print
		var saveText = JSON.stringify(data);
		var fileWtPromise2 = fileData.saveStringToFile(c2ResultPath,saveText);
		fileWtPromise2.then((rtn)=>{
			console.log("finish analyse chapter2");
			},(err)=>{
				console.log(err);
			});
	});	

	var fileRdPromise3 = fileData.getFileAsString(chapter3Path);
	fileRdPromise3.then((data) => {
		//process data
		var MetricsObj = testMetrics.createMetrics(data);
		return MetricsObj;
	}, (err) => {
		console.log(err);
	}).then((data)=>{
		//save and print
		var saveText = JSON.stringify(data);
		var fileWtPromise3 = fileData.saveStringToFile(c3ResultPath,saveText);
		fileWtPromise3.then((rtn)=>{
			console.log("finish analyse chapter3");
			},(err)=>{
				console.log(err);
			});
	});	


} catch (e) {
	console.log(e);
}