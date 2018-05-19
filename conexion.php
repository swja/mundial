<?php
$mysqli = new mysqli("vivewow.com", "vivewo5_registros", "q1w2e3r4t5y6", "vivewo5_registroswow");
if ($mysqli->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
//echo $mysqli->host_info . "\n";
//echo '<br>';
?>