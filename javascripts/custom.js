var JFiles=[];
var Skopje,Paris;
loadData=function(){
		// var skopje={}
		var func=$.getJSON("SkopjePM10Averaged.json",function(data){
		Skopje=data;
		});
			var func2=$.getJSON("ParisPM10Averaged.json",function(data){
		Paris=data;
		});
		
		$.when(func,func2).done(function () {
    console.log(Paris);
	
	makeGraph()
});
		

}
makeGraph=function(){
	var	skopje=Skopje;
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