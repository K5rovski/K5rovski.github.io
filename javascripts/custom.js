var JFiles={};
var Names=['Skopje','Paris'];
var Particle='PM10';
loadData=function(){
		// var skopje={}
		var funcs=[]
		for(var i=0;i<Names.length;i++){
		funcs.push($.getJSON(Names[i]+Particle+'.json'));
		}
			
		$.when(funcs).done(function (data) {
   
	console.log(data);
	
	for(var i=0;i<data.length;i++){
	console.log('ova e i ',i);
	var dataone=data[i].responseJSON;
	var name =dataone[10].Station;
	 
	 console.log('data',data);
	JFiles[name.slice(0,name.search('_'))]=data[i].responseJSON;
	}JSON
	console.log(JFiles.Paris);
	makeGraph()
});
		

}
makeGraph=function(){
	var	skopje=JFiles.Skopje;
	for (var i=0;i<skopje.length;i++){
		t=skopje[i];
		t['x']=new Date(t['Year'],t['Month']-1,t['Day'],t['Time']-1);
		if (t['Year'])
		t['y']=t['Reading'];
		}
          var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
			   zoomEnabled: true,
			panEnabled: true,
              title:{
                  text: "Skopje"              
             },
              data: [              
              {
// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
                  type: "line",
				  markerType:"none",
                  dataPoints: skopje
              }
              ]
          });

          chart.render();
}
 window.onload = function () {
		loadData();
		
		
		
      }