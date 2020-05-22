function buildGauge(id) {
	
	d3.json("data/samples.json").then((data)=> {
		var filteredData = data.metadata.filter(sample => sample.id.toString() === id)[0];
		console.log(filteredData)
		var wfreq = filteredData.wfreq
		
	
		var data = [
			{
				domain: { x: [0, 1], y: [0, 1] },
				value: wfreq,
				title: { text: "Washing Frequency" },
				type: "indicator",
				mode: "gauge+number"
			}
		];

		var layout = { width: 600, height: 500, margin: { t: 10, b: 0 } };
		Plotly.newPlot('gauge', data, layout);
		
		});
				
	});
	
}
