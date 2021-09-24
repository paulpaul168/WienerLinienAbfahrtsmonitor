<?php
echo implode('',file("https://www.wienerlinien.at/ogd_realtime/monitor?rbl=".$_GET["rbl"]));
?>
