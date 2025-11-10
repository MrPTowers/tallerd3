
async function main(){
	data = [
		{ id:0, color: "red"},
		{ id:1, color: "red"},
		{ id:2, color: "green"},
		{ id:3, color: "red"},
		{ id:4, color: "green" },
		{ id:5, color: "red"},
		{ id:6, color:"green" },
		{ id:7, color: "red"},
		{ id:8, color:"green" },
		{ id:9, color: "red"}
	];
	
	barchart = new Barchart({parentElement: "#barchart"}, data);

}
