<?php

function handleAction($camId) {

	echo "http://localhost/hemi/interface/?generateSnapshot&camId=" . $camId . "&t=" . now();

}

?>