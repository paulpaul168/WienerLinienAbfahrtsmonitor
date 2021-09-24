get_data();
async function get_data(){
	let response = await fetch("https://corsproxy.github.io/https://www.wienerlinien.at/ogd_realtime/monitor?rbl=90");
	alert(response.text);
}