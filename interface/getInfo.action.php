<?php

function handleAction($timestamp) {

    $indoor = getRandomData(90, $timestamp, 20, 30);
    $outdoor = getRandomData(90, $timestamp, 0, 20);

    $zahrada_snapshots = getRandomSnapshotData(3, $timestamp, "zahrada");
    $predzahradka_snapshots = getRandomSnapshotData(4, $timestamp, "predzahradka");
    $vstupnahala_snapshots = getRandomSnapshotData(3, $timestamp, "vstupna-hala");

    $info = array(
        "version" => "11",
        "systemStatus" => "READY",
        "storageInfo" => (object) array(
          "freeBytes" => 1024,
          "totalBytes" => 4096,
          "snapshotCount" => 3564,
          "videoCount" => 489
        ),
        "sensors" => array(
            array(
          "id" => "outdoor",
          "type" => "TEMP",
          "unit" => "°C",
          "name" => "Teplota vnutri",
          "latestValue" => end(array_values($outdoor))->y,
          "values" => $outdoor
        ),
            array(
          "id" => "indoor",
          "type" => "TEMP",
          "unit" => "°C",
          "name" => "Teplota vonku",
          "latestValue" => end(array_values($indoor))->y,
          "values" => $indoor
        )
    ),
        "cameras" => array(
            array(
          "id" => "1",
          "color" => "red",
          "snapshotUri" => "http://",
          "route" => "zahrada",
          "name" => "Záhrada",
          "latestSnapshot" => end(array_values($zahrada_snapshots)),
          "snapshotsGranularity" => "month",
          "snapshots" => $zahrada_snapshots
        ),
            array(
          "id" => "2",
          "color" => "yellow",
          "snapshotUri" => "http://",
          "route" => "predzahradka",
          "name" => "Predzáhradka",
          "latestSnapshot" => end(array_values($predzahradka_snapshots)),
          "snapshotsGranularity" => "month",
          "snapshots" => $predzahradka_snapshots
        ),
            array(
          "id" => "3",
          "color" => "aqua",
          "snapshotUri" => "http://",
          "route" => "vstupna-hala",
          "name" => "Vstupná hala",
          "latestSnapshot" => end(array_values($vstupnahala_snapshots)),
          "snapshotsGranularity" => "month",
          "snapshots" => $vstupnahala_snapshots
        )
    )
        );

    $json = json_encode($info, JSON_PRETTY_PRINT);
    header('Content-Type: application/json');
    print_r($json);
}

function getRandomData($count, $stamp, $min, $max) {
  $values = array();
  for ($i = 0; $i < $count; $i++) {
    $values[] = (object) array("x" => $stamp + ($i * 1000),
                               "y" => rand($min, $max));
    //$values[] = array($stamp + $i, rand($min, $max));
  }
  return $values;
}

function getRandomSnapshotData($count, $stamp, $name) {
  
  $values = array();
  for ($i = 0; $i < $count; $i++) {
    $calculatedStamp = $stamp + ($i * 100000000);
    $values[] = (object) array("timestamp" => $calculatedStamp + ($i * 100000000),
                               // "uri" => "/snapshots/" . $name . "_" . $calculatedStamp . ".jpg"
                               // "uri" => "http://localhost/hemi/upload/" . $i . ".jpg"
                               "uri" => "http://localhost/hemi/interface/?generateSnapshot&camId=" . $name . "&t=" . $calculatedStamp
                               );
    //$values[] = array($stamp + $i, rand($min, $max));
  }
  return $values;
}

?>