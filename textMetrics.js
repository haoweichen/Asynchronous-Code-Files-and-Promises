module.exports = {

	createMetrics: function(text) {

		//text = "Hello, my friends! This is a great day to say hello.";

		var metricsObj = {
			totalLetters: 0, //total number of letters in the text,
			totalWords: 0, //total number of words in the text,
			uniqueWords: 0, //total number of unique words that appear in the text,
			longWords: 0, //number of words in the text that are 6 or more letters long, 
			averageWordLength: 0, //the average number of letters in a word in the text, (totalLetters/totalWords)
			numberOfSentences: 0, //total number of sentences in the text, 
			textComplexity: 0, //totalWords/numberOfSentences + (longWords x 100)/totalWords
			wordOccurrences: {}
		};

		if (text === undefined || typeof text !== 'string') {
			throw 'text must be string';
		}

		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\\'\\n\\\"-]");
		var textNoMarks = "";
		for (var i = 0; i < text.length; i++) {
			var firstLetter = text.substr(i, 1);
			if(firstLetter==='.'||firstLetter==='!'||firstLetter==='?'){
				metricsObj.numberOfSentences++;
			}
			textNoMarks = textNoMarks + firstLetter.replace(pattern, '').toLowerCase();
			
		}

		var textArr = textNoMarks.split(" ");
		
		metricsObj.totalWords = textArr.length;

		for (var i = textArr.length - 1; i >= 0; i--) {
			metricsObj.totalLetters += textArr[i].length;
			
			if (textArr[i].length >= 6) {
				metricsObj.longWords++;
			}

			//wordOccurences
			if(metricsObj.wordOccurrences[textArr[i]]===undefined){
				metricsObj.wordOccurrences[textArr[i]] = 1;
				metricsObj.uniqueWords ++;
			}else{
				metricsObj.wordOccurrences[textArr[i]]++;
			}
		};

		metricsObj.averageWordLength = metricsObj.totalLetters / metricsObj.totalWords;
		metricsObj.averageWordLength = metricsObj.averageWordLength.toFixed(2);
		metricsObj.textComplexity = metricsObj.totalWords/metricsObj.numberOfSentences + (metricsObj.longWords * 100)/metricsObj.totalWords;
		metricsObj.textComplexity = metricsObj.textComplexity.toFixed(2);

		// console.log(metricsObj);
		return metricsObj;

	}
}