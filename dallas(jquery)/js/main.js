var addressUrl = "http://192.168.0.164:8080/dallas/front/submitSurvey";
   	
function add1(surveyId,checkboxName,textareaPosition,textareaName) {
	var obj = document.getElementsByName(checkboxName);
	var length = obj.length;
    var answerArr = [];
    var answerJson = {};
    for(var k in obj){
    	var choiceJson = {};
    	choiceJson.choiceId = obj[k].value;
    	if(k == textareaPosition && $('.'+textareaName).val()){
    		choiceJson.remark = $('.'+textareaName).val();
    	}
//  	console.log(obj[k].checked);
    	if(obj[k].checked || obj[k].checked == "checked"){
    		choiceJson.answer = "1";
    	}else{
    		choiceJson.answer = "0";
    	}
    	answerArr.push(choiceJson);
    }
    
	answerArr = answerArr.slice(0,length);
	answerJson.answer = answerArr;
    $.ajax({
    	url: addressUrl,
    	type:"post",
    	async:true,
    	data:{
    		surveyId: surveyId,
    		answer: JSON.stringify(answerJson)
    	},
    	success: function(data){
	    }
    });	
}