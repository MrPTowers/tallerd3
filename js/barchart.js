class Barchart {
	constructor(_config, _data) {
		this.config = {
			parentElement: _config.parentElement,
			containerWidth: 850,
			containerHeight: 350,
      		margin: {top: 20, right: 20, bottom: 20, left: 45}
		};
		this.data = _data;
		this.div = this.config.parentElement;
		this.init();
	}

	init() {
		let vis = this;

    	vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
    	vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

		// Preprocess: count frequency per color
		vis.colorCounts = d3.rollups(
			vis.data, 
			v => v.length, 
			d => d.color
		).map(([color, count]) => ({ color, count }));

		// Scales
		vis.xScale = d3.scaleBand()
			.domain(vis.colorCounts.map(d => d.color))
			.range([0, vis.width])
			.padding(0.1);

		vis.yScale = d3.scaleLinear()
			.domain([0, d3.max(vis.colorCounts, d => d.count)])
			.range([vis.height, 0]);

		// Axes
		vis.xAxis = d3.axisBottom(vis.xScale)
			.tickFormat(d => d);
		vis.yAxis = d3.axisLeft(vis.yScale)
			.ticks(5);

		// SVG container
		vis.svg = d3.select(vis.div).append('svg')
			.attr('width', vis.config.containerWidth)
			.attr('height', vis.config.containerHeight);

		vis.chartArea = vis.svg.append('g')
			.attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);

		vis.chartArea.append('g')
			.attr('class', 'x-axis')
			.attr('transform', `translate(0,${vis.height})`)
			.call(vis.xAxis);

		vis.chartArea.append('g')
			.attr('class', 'y-axis')
			.call(vis.yAxis);

		vis.render();
	}
	
	render() {
		let vis = this; 

		const bars = vis.chartArea.selectAll('rect')
			.data(vis.colorCounts, d => d.color);

		bars.enter()
			.append('rect')
			.merge(bars)
			.attr('x', d => vis.xScale(d.color))
			.attr('y', d => vis.yScale(d.count))
			.attr('width', vis.xScale.bandwidth())
			.attr('height', d => vis.height - vis.yScale(d.count))
			.attr('fill', d => d.color);

		bars.exit().remove();
	}
}

