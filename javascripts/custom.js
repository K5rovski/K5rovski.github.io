var JFiles={};
var Names=['Skopje','Paris'];
var Particle='PM10';
loadData=function(){
		 var funcs=[];
		for(var i=0;i<Names.length;i++){
		funcs.push($.getJSON(Names[i]+Particle+'.json'));
		}
	$.when.apply($, funcs).done(function(){
    // This callback will be called with multiple arguments,
    // one for each AJAX call
    // Each argument is an array with the following structure: [data, statusText, jqXHR]

    // Let's map the arguments into an object, for ease of use
    
    for(var i = 0, len = arguments.length; i < len; i++){
		var name=arguments[i][0][0].Station;
	JFiles[name.slice(0,name.search('_'))]=arguments[i][0];
	  
    }
	
	makeGraph();
	});
		

}
makeGraph=function(){
	var JDataList=[];
	$.each(JFiles,function(name,city){
	
	for (var i=0;i<city.length;i++){
		t=city[i];
		t['x']=new Date(t['Year'],t['Month']-1,t['Day'],t['Time']-1);
//		if (t['Year'])   // Dont know about this
		t['y']=t['Reading'];
		}
		JDataList.push({type: "line",
				  markerType:"none",
                  dataPoints: city});
		});
          var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
			   zoomEnabled: true,
			panEnabled: true,
              title:{
                  text: "Several Cities"              
             },
              data: JDataList;
          });

          chart.render();
}
 window.onload = function () {
		loadData();
		
		
		
      }