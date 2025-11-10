d3.csv("data/data.csv").then(data => {
		data.forEach(d => {
		  	d.number = +d.number;
		});
	
	//barchart = new Barchart("#barchart", data)
	//scatterplot = new Scatterplot("#scatterplot", data);
 	
}).catch(error => {
  	console.error('Error loading the data');
});	
