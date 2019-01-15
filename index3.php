<?php
	$content = file_get_contents("http://mecinemas.com/index.php");
	preg_match_all('/<span class="pic-caption open-left">.*?<h2>(.*?)<\/h2>.*?<\/span>/is', $content, $clp_name);
	//echo "<pre>";
	//print_r($clp_name[1]);
	echo json_encode($clp_name[1]);
	echo "</br>";


	preg_match_all('/<p><span class="pinkTxt">(.*?)<\/span>.*?<\/p>/is',$content, $clp_name);
	//print_r($clp_name[1]);
	echo json_encode($clp_name[1]);
	echo "</br>";
	
	preg_match_all('/<p><span class="pinkTxt">.*?<\/span>(.*?)<\/p>/is',$content, $clp_name);

	echo json_encode($clp_name[1]);
?>