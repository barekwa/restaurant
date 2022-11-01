<?php
    $user = 'root';
    $password = '';
    try{
        $catNum = $_POST['catNumber'];
        $dbc = new PDO('mysql:host=localhost;dbname=restaurant_booking',$user,$password);
        $result = $dbc->prepare("SELECT Name FROM menu WHERE Category LIKE ?");
        $result->execute([$catNum]);
        $tab = $result->fetchAll();
        echo json_encode(array($tab));
        die();
    }
    catch(PDOException $e){
        print "Error" . $e->getMessage();
        die();
    }
?>