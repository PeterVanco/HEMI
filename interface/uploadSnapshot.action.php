<?php

function handleAction($camId) {

    $data = base64_decode(file_get_contents('php://input'));
    file_put_contents("../upload/" . $camId . ".jpg", $data);

}

?>