<?php


$name = $_POST['name'];
$season = $_POST['season'];
echo json_encode([

  "name" => $name,
  "season" => $season,
  "id" => rand(1,10000)

]);



?>