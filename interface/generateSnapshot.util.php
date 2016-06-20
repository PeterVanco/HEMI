<?php

function handleAction($camId, $timestamp) {

    // The text to draw
    $text = $camId . " - " . $timestamp;

    // Create a blank image and add some text
    $im = imagecreatetruecolor(1920, 1080);

    // Create some colors
    $white = imagecolorallocate($im, 255, 255, 255);
    // imagefilledrectangle($im, 0, 0, 399, 29, $white);

    // Replace path by your own font path
    $font = 'OpenSans-Regular.ttf';

    // Add the text
    imagettftext($im, 62, 0, 600, 500, $white, $font, $text);

    // Set the content type header - in this case image/jpeg
    header('Content-Type: image/jpeg');

    // Output the image
    imagejpeg($im);

    // Free up memory
    imagedestroy($im);
    
}

?>