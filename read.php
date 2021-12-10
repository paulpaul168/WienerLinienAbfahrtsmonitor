<?php
echo file_get_contents("result_".$_GET["rbl"].".json");
//echo implode('',file("https://www.wienerlinien.at/ogd_realtime/monitor?rbl=".$_GET["rbl"]));
?>
