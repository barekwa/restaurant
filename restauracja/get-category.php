<?php
    $user = 'root';
    $password = '';
    try{
        $dbc = new PDO('mysql:host=localhost;dbname=restaurant_booking',$user,$password);
        $result = $dbc->prepare("SELECT DISTINCT Category FROM menu");
        $result->execute();
        $tab = $result->fetchAll();
        echo json_encode(array($tab));
        die();
    }
    catch(PDOException $e){
        print "Error" . $e->getMessage();
        die();
    }
?>