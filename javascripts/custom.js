 window.onload = function () {
 
		$.getJSON("SkopjePM10Averaged.json",function(json){
		console.log(json)
		
	for (var i=0;i<json.length;i++){
		t=json[i];
		t['x']=new Date(t['Year'],t['Month']-1,t['Day'],t['Time']);
		if (t['Year'])
		t['y']=t['Reading'];
		}
          var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
              title:{
                  text: "Basic Column Chart - CanvasJS"              
             },
              data: [              
              {
// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
                  type: "line",
				  markerType:"none",
                  dataPoints: json
              }
              ]
          });

          chart.render();
		  });
      }