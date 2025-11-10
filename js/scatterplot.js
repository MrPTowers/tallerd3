class Scatterplot {
	constructor(_config, _data) {
		this.config = {
			parentElement: _config.parentElement,
			containerWidth: 400,
			containerHeight: 500,
      		margin: {top: 120, right: 20, bottom: 20, left: 45},
      		legendWidth: 170,
      		legendHeight: 8,
      		legendRadius: 5
		};
		this.data = _data;
		this.div = this.config.parentElement;
		this.init();
	}

	init() {
		let vis = this;

    	vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
    	vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

	}

	update() {
		let vis = this;
}
	
	render() {
		let vis = this;

	}

	renderLegend() {
		let vis = this;
	
	}

}
