get_data();
setInterval(get_data,10000);

async function get_data(){
	try{
		var urlParams = new URLSearchParams(window.location.search);
		let response = await fetch("read.php?rbl="+urlParams.get('st1'));
		let json = await response.json();
		let departures = json.data.monitors[0].lines[0].departures.departure;
		let name = json.data.monitors[0].lines[0].name;
		let towards = json.data.monitors[0].lines[0].towards;
		let stationName = json.data.monitors[0].locationStop.properties.title;
		document.getElementById("station").innerText = stationName;
		document.getElementById("st1").innerText = name + "  "+ towards;
		document.getElementById("st2").innerText = name + "  "+ towards;
		document.getElementById("st1time").innerText = departures[0].departureTime.countdown + "  min";
		document.getElementById("st2time").innerText = departures[1].departureTime.countdown + "  min";
	} catch (error){
		if(error == "TypeError: can't access property \"lines\", json.data.monitors[0] is undefined"){
			document.getElementById("error").innerText = "Kein D Wagen in der Nacht";
		}else{
			document.getElementById("error").innerText = error;
		}
		document.getElementById("station").innerText = "";
		document.getElementById("st1").innerText = "";
		document.getElementById("st2").innerText = "";
		document.getElementById("st1time").innerText = "";
		document.getElementById("st2time").innerText = "";
	}
}
