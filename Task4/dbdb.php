<?php
$dbConnection = new PDO('mysql:dbname=minnek;host=localhost;charset=utf8', 'root', 'mysql');
$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>