/* FUNCIONES EN JQUERY 
Proceso de Editar
Ej. editar('1454952004085')
*/
editar = function( idAcuerdo){
    console.log(idAcuerdo);
    visualizaUrl( 'php/EditarAcuerdo.php',
                  'id_acuerdo=' + idAcuerdo +
                  	'&salto=/acuerdos/RevisarAcuerdos.php' +
                  	'&caller=acuerdos/RevisarAcuerdos.php&expediente=&anio_expediente=&desde=&hasta=&pagina=0',
                  'content');
}

var clearDiv='';
function visualizaUrl(url, parametros, div)
{
	if($('#div_comentarios'))
    $('#div_comentarios').innerHTML='';
	if(url)
	{
		if (parametros==undefined) parametros = {};
		if (div==undefined) div = "content";
		if(parametros) // Se evalua a true si parametros no es null, undefinied, En, String vacío "", 0 o falso.
        {
            if(parametros.charAt(0) == "&" || parametros.charAt(0) == "?")
            {
                parametros = parametros.substr(1);
            }
            parametros+="&";
        } 
        parametros+= 'rand=' + Math.random();

        if(parametros)
        {
            $("#loading").height = $("#page").offsetHeight+"px";
            $("#loading").show(); 
                    	
			// Cambiar Ajax.Request (de Prototype) por $.ajax (de jQuery)
			$.ajax({
				url: url,
				type: 'post',
				data: parametros,
				success: function(respuesta){
					//var responseText = respuesta.responseText || "No hubo respuesta... por favor intentelo mas tarde";
		            //try{$(div).update(responseText)}catch(err){};
		            try{$("#content").html(respuesta)} catch(err){};
		            $("#loading").hide();
				},
				error: function(){
					$("#loading").hide();
					alert("Por favor inténtalo más tarde");
				}
			});
			if(clearDiv!='' && div=='content'){
                try{
                    $(clearDiv).innerHTML='';
                }catch (e){
                    
                }
                clearDiv='';
            }

		} 
	}
}

/* ***************************************** */

/* Funcion visualizaUrl original en Prototype*/
/*
var clearDiv='';
function visualizaUrl(url, parametros, div)
{
    if($('div_comentarios'))
    $('div_comentarios').innerHTML='';
    //alert ( '--> visualizaUrl { ['+url+'] ['+parametros+'] ['+div+']  }');
    if(url)
    {
        if(parametros==undefined) 	parametros = "";
        if(div==undefined) 			div = "content";
        if(!parametros.empty() && !parametros.blank())
        {
            if(parametros.startsWith("&") || parametros.startsWith("?"))
            {
                parametros = parametros.substr(1);
            }
            parametros+="&";
        }
        parametros+= 'rand=' + Math.random();
        
        if(!url.empty() && !url.blank())
        {
            $("loading").style.height = $("page").offsetHeight+"px";
            $("loading").show();
            new Ajax.Request
            (	url,
                {
                    method: 'post',
                    parameters: parametros,
                    onSuccess: function(transport)
                    {
                        var responseText = transport.responseText || "No hubo respuesta... por favor intentelo mas tarde";
                        try{$(div).update(responseText)}catch(err){};
                        $("loading").hide();
                    },
                    onFailure: function()
                    { 
                        $("loading").hide();
                        alert('Por favor intentelo mas tarde');
                    },
                    on413: function()
                    {
                        var responseText = "<script type='text/javascript'>on413();</script>";
                        try{$(div).update(responseText)}catch(err){};
                        $("loading").hide();
                    },
                    
                }
            );
            if(clearDiv!='' && div=='content'){
                try{
                    $(clearDiv).innerHTML='';
                }catch (e){
                    
                }
                clearDiv='';
            }
        }
    }
}
*/

/* *************************************************************************************************** */

/**
* Funcion que realiza una peticion mediante post a determinada url y actualiza con la respuesta una division
* Contiene las siguientes opciones
* @param {String} url La URL donde realiza la peticion
* @param {Object} opciones Un objeto con las siguientes funciones
* parametros:       Una serie de parametros definidos con el formato param=valor&param2=valor2&param3=valor3 (por default una cadena vacia)
* contenedor:        Identificador de una division en la cual se reflejara la respuesta a la peticion (por default 'contenido')
* loading:          Un identificador de una division que logra el efecto de cargando (por default no aparecera)
* accionPosterior:  Define una funcion que se ejecutara despues de  haber recibido respuesta y haber actualizado el contenido
*/
function visualizaURL(url, opciones)
{
    alert('Transformación en Proceso');
}