 window.onload = function () {
 
		var func=$.getJSON("SkopjePM10Averaged.json");
		var skopje=func.responseJSON
		console.log(skopje)
		
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