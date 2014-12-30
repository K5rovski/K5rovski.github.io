 window.onload = function () {
 
		$.getJSON("SkopjePM10Averaged.json",function(json){
		console.log(json)
		
	for (var i=0;i<json.length;i++){
		t=json[i];
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
                  dataPoints: json
              }
              ]
          });

          chart.render();
		  });
      }