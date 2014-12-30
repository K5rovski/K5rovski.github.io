 window.onload = function () {
 
		var data=$.getJSON("SkopjePM10Averaged.json");
		console.log(data)
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
                  dataPoints: [
                  {  y: 10 },
                  {  y: 15 },
                  { label: "banana", y: 25 },
                  { label: "mango", y: 30 },
                  { label: "grape", y: 28 }
                  ]
              }
              ]
          });

          chart.render();
      }