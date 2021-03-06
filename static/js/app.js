init()

function buildBar(id) {
	d3.json("data/samples.json").then((data)=> {
		var filteredData = data.samples.filter(sample => sample.id === id);

		var otu_ids = filteredData.map(sample =>  sample.otu_ids);
		var sample_values = filteredData.map(sample =>  sample.sample_values);
		var otu_labels = filteredData.map(sample =>  sample.otu_labels);


		
		var otu_ids_text = []
		for (var i=0; i<otu_ids[0].slice(0,10).length; i++) {
			otu_ids_text.push("OTU " + otu_ids[0].slice(0,10)[i])
		};
		
		var trace1 = {
			y: otu_ids_text.reverse(),
			x: sample_values[0].slice(0,10).reverse(),
			type: "bar",
			name: "Temp Name",
			orientation: 'h',
			text:  otu_labels[0].slice(0,10).reverse()
		};
		var data = [trace1]
		var layout = {
			title: "Top 10 OTUs"
		};
		
		Plotly.newPlot("bar", data, layout);
		
		
	
	});
	
}

function buildBubble(id) {
	d3.json("data/samples.json").then((data)=> {
		var filteredData = data.samples.filter(sample => sample.id === id);
		
		var otu_ids = filteredData.map(sample =>  sample.otu_ids);
		var sample_values = filteredData.map(sample =>  sample.sample_values);
		var otu_labels = filteredData.map(sample =>  sample.otu_labels);
		
		var trace1 = {
		  x: otu_ids[0],
		  y: sample_values[0],
		  text: otu_labels[0],
		  mode: 'markers',
		  marker: {
			color: otu_ids[0],
			size: sample_values[0],
			sizeref: 0.1,
			sizemode: 'area'
		  }
		};

		var data = [trace1];

		var layout = {
		  title: 'Bubble Chart Size Scaling',
		  showlegend: false,
		  height: 400,
		  width: 1000,
		  xaxis: {title: "OTU ID"}
		};

		Plotly.newPlot('bubble', data, layout);
		
	});
	
}


function buildDemographic(id) {
	
	d3.json("data/samples.json").then((data)=> {
		var filteredData = data.metadata.filter(sample => sample.id.toString() === id)[0];
		
		
		var demographicInfo = d3.select("#sample-metadata");
		demographicInfo.html("");
		
		Object.entries(filteredData).forEach(([key, value]) => {
			
			demographicInfo.append('h4').text(`${key}: ${value}`);

			
		});
				
	});
	
}

//d3.selectAll("#selDataset").on("change",init);
function init() {
	var dropdownMenu = d3.select("#selDataset");
	d3.json("data/samples.json").then((data)=> {
		data.names.forEach(function(id) {
			dropdownMenu.append("option").text(id).property("value");
		});
	
	
	
	buildDemographic("940");
	buildBar("940");
	buildBubble("940");
	buildGauge("940");
	
	
	})
}


function optionChanged(id) {
	
	buildDemographic(id);
	buildBar(id);
	buildBubble(id);
	buildGauge(id);
}


