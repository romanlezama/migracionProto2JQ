/*  FUNCIONES EN PROTOTYPE ORIGINALES
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
                    }
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

/* 

function visualizaURL(url, opciones)
{
    if(url){
        var parametros = __$AnalizaValor(opciones, "parametros", "");
        var contenedor = __$AnalizaValor(opciones, "contenedor", "content");
        var accionPosterior = __$AnalizaValor(opciones, "accionPosterior");
        var loading = __$AnalizaValor(opciones, "loading");
        
        if(!parametros.empty() && !parametros.blank()){
            if(parametros.startsWith("&") || parametros.startsWith("?")){
                parametros = parametros.substr(1);
            }
            parametros+="&";
        }
        parametros+= 'rand=' + Math.random();
        
        if(!url.empty() && !url.blank()){
            if(loading){
                $("loading").style.height = $("page").offsetHeight+"px";
                $(loading).show();
            }
            var opcPrototype = {
                method: 'post',
                onSuccess: function(transport){
                    var responseText = transport.responseText || "No hubo respuesta... por favor intentelo mas tarde";
                    try{$(contenedor).update(responseText)}catch(err){};
                    if(loading){$(loading).hide();}
                    if(accionPosterior){
                        try{
                            accionPosterior();
                        }catch(error){}
                    }
                },
                onFailure: function(){ 
                    if(loading){$(loading).hide();}
                    alert('Por favor intentelo mas tarde');
                }
            }
            if(parametros!=undefined){
                opcPrototype.parameters = parametros;
            }
            
            new Ajax.Request(url, opcPrototype);
            
        }
    }

}
*/
