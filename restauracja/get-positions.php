<?php
    $user = 'root';
    $password = '';
    try{
        $data = trim(file_get_contents("php://input"));
        $tab = json_decode($data, true);
        $catNum = $tab["catNumber"];
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