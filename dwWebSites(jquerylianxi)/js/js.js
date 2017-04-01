// JavaScript Document

$(function(){
$("li").click(function(){
	$(".bottom").hide();
	var namevalue= $(this).attr("name")+"1";
	var bottomlist=$(".bottom");
	for(var i=0;i<bottomlist.length;i++){
		if($(bottomlist[i]).attr("name")==namevalue){
			$(bottomlist[i]).show();
			}
		}
	});		
});
