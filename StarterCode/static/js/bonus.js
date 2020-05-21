d3.json("../../samples.json").then((data)=> {

	//var metadata = JSON.parse(data.metadata);
	
	var samplesArray = data.samples;
	samplesArray.sort((x,y) => x.sample_values - y.sample_values);
	console.log(samplesArray[0:10]);
	
	/*var metadata_id = data.metadata.map(sample =>  sample.id);
	var metadata_ethnicity = data.metadata.map(sample =>  sample.ethnicity);
	var metadata_gender = data.metadata.map(sample =>  sample.gender);
	var metadata_age = data.metadata.map(sample =>  sample.age);
	var metadata_location = data.metadata.map(sample =>  sample.location);
	var metadata_bbtype = data.metadata.map(sample =>  sample.bbtype);
	var metadata_wfreq = data.metadata.map(sample =>  sample.wfreq);
	


	var samples_id = data.samples.map(sample =>  sample.id);
	var samples_otu_ids = data.samples.map(sample =>  sample.otu_ids);
	var samples_sample_values = data.samples.map(sample =>  sample.sample_values);
	var samples_otu_labels = data.samples.map(sample =>  sample.otu_labels);
*/
	
	
	
	
});

/*function buildBar() {
	d3.json("../../samples.json").then((data)=> {

		var metadata_id = data.metadata.map(sample =>  sample.id);
		var metadata_ethnicity = data.metadata.map(sample =>  sample.ethnicity);
		var metadata_gender = data.metadata.map(sample =>  sample.gender);
		var metadata_age = data.metadata.map(sample =>  sample.age);
		var metadata_location = data.metadata.map(sample =>  sample.location);
		var metadata_bbtype = data.metadata.map(sample =>  sample.bbtype);
		var metadata_wfreq = data.metadata.map(sample =>  sample.wfreq);
		
		
		var samples_id = data.samples.map(sample =>  sample.id);
		var samples_otu_ids = data.samples.map(sample =>  sample.otu_ids);
		var samples_sample_values = data.samples.map(sample =>  sample.sample_values);
		var samples_otu_labels = data.samples.map(sample =>  sample.otu_labels);
		
	
		console.log(samples_otu_ids[0])
		var trace1 = {
			x: samples_otu_ids[0],
			y: samples_sample_values[0],
			type: "bar",
			name: "Temp Name"
		};
		var data = [trace1]
		var layout = {
			title: "temporary title",
			xaxis: {title: "xaxis label"},
			yaxis: {title: "yaxis label"}
		};
		
		Plotly.newPlot("bar", data, layout);
		
		
	
	});
	
}

buildBar()*/



