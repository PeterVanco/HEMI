<?php

header('Access-Control-Allow-Origin: *');

// error handler

function __fatalHandler()
{
    $error      = error_get_last();
    if($error !== NULL && $error['type'] === E_ERROR) {
        responseCode(500);
        print_r($error);
        die;
    }
}
register_shutdown_function('__fatalHandler');

// setup

require_once('../inc/db/meekrodb.2.3.class.php');
require_once('../inc/smarty/Smarty.class.php');

DB::$host = '82.208.7.136';
DB::$user = 'nh490800';
DB::$password = 'grupsidy';
DB::$dbName = 'nh490800db';
DB::$encoding = 'utf8';

DB::$error_handler = 'dbErrorHandler';
function dbErrorHandler($params) {
    responseCode(500);
    print_r($params);
    die;
}

DB::$success_handler = 'dbSuccessHandler';
function dbSuccessHandler($params) {
    // print_r($params);
}

// action handler

function hasGetParam($param) {
    return isset($_GET[$param]);
}

function hasPostParam($param) {
    return isset($_POST[$param]);
}

function responseCode($code) {
    http_response_code($code);
}

//if (!hasGetParam('action')) {
//    responseCode(405);
//} else {
//    require_once('uploadSnapshot.php');
//}

if (hasGetParam('uploadSnapshot') && hasGetParam('camId')) {
    require_once('uploadSnapshot.action.php');
    handleAction($_GET['camId']);
}
else if (hasGetParam('getSnapshot') && hasGetParam('camId')) {
    require_once('getSnapshot.action.php');
    handleAction($_GET['camId']);
}
else if (hasGetParam('generateSnapshot') && hasGetParam('camId') && hasGetParam('t')) {
    require_once('generateSnapshot.util.php');
    handleAction($_GET['camId'], $_GET['t']);
}
else if (hasGetParam('sync')) {
    require_once('sync.action.php');
    handleAction($_POST);
}
else if (hasGetParam('checkUpdate')) {
    require_once('checkUpdate.action.php');
    handleAction();
}
else if (hasGetParam('downloadUpdate')) {
    require_once('downloadUpdate.action.php');
    handleAction();
}
else if (hasGetParam('getInfo') && hasGetParam('t')) {
    require_once('getInfo.action.php');
    handleAction($_GET['t']);
}
else {
    echo "Printing GET data:\n";
    print_r($_GET);
    echo "Printing POST data:\n";
    print_r($_POST);
    responseCode(405);
}

?>