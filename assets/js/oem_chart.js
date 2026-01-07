
/*
function Default_folder_path(){
	var loc = window.location;
	var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
	pathName+='pa5478'
	//console.log(loc);
	$('#project_folder_name').val(pathName);
}
*/

function Create_bl_chart(){
    var chart = new CanvasJS.Chart("Signal_chart_container",
    {
      title:{
      text: "Baseline Build"
      },
      
      axisX: {
        interval: 1,
        labelFormatter: function(){
        return " ";
        }
      },
     
      data: [
      {
        type: "stackedBar",
        legendText: "Non",
        showInLegend: false,
        indexLabel: "Discard {y}",
        dataPoints: [
        { x: 1, y: 20 , color: "#999966"},
        ]
      },
        {
        type: "stackedBar",
        legendText: "Glove",
        showInLegend: false,
        indexLabel: "Average {y}",
        dataPoints: [
        { x: 1, y: 8, color: "#cc9900"},
        ]
      },
        {
        type: "stackedBar",
        legendText: "Normal",
        showInLegend: false,
        indexLabel: "Update {y}",
        dataPoints: [
        { x: 1, y: 1, color: "#669900"},
        ]
      },
        


      ]
    });

    chart.render();
    chart.axisX[0].remove();
}


function Create_sig_chart(){
	var chart = new CanvasJS.Chart("Signal_chart_container", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Signal Threshold"
		},
		axisX: {
			title: "",
			interval: 10,
		},
		axisY: {
			includeZero: false,
			title: "Signal",
			maximum: 1000,
			interval: 100,
			/*suffix: "k",
			prefix: "$"*/
			scaleBreaks: {
				customBreaks: [{
					startValue: 500,
					endValue: 1000,
					type: "wavy",
					/*color: "orange"*/
				}]
			},
		}, 
		data: [{
			type: "rangeBar",
			showInLegend: false,
			yValueFormatString: "#",
			indexLabel: "{y[#index]}",
			toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
			dataPoints: [
				{ x: 10, y:[0, 80], label: "Non" , color: "#999966"},
				{ x: 20, y:[80, 350], label: "Glove" , color: "#cc9900"},
				{ x: 30, y:[350, 1000], label: "Normal" , color: "#669900"}
			]
		}]
	});
	chart.render();
}

function Show_sig_chart(){
	$("#Signal_thx").click(function(){
		console.log("Dd initial code button pressed...");
		//Create_sig_chart();
		Create_bl_chart();
	});
}

$(document).ready(function(){
	Show_sig_chart();
	
});