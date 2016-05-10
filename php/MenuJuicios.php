<?php 
	$respuesta = '<h2>Recibí:</h2>';
	while ($post = each($_POST))
	{
		$respuesta .= "<b>". $post[0] . "</b> = " . $post[1] . "<br>";
	}
	echo $respuesta;
 ?>