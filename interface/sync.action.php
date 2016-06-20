<?php

function handleAction($data) {

    $updatedIds = "";
    foreach ($data as $id => $row) {

        $values = explode(",", $row);

        if (count($values) == 3) {

            $sensor_id = intval($values[0]);
            $stamp = intval($values[1]);
            $value = floatval($values[2]);

            DB::replace('sensor_data', array(
              'id' => $id,
              'sensor_id' => $sensor_id,
              'stamp' => $stamp,
              'value' => $value,
              'synced' => 1
            ));

            $updatedIds .= $id."\n";
        }

    }

    echo $updatedIds;
    
}

?>