/* ************************************************
*   FUNCIONES GENERALES DEL PROYECTO
*/ 


// Funciones para borrar espacios en blanco
function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function ltrim(stringToTrim) {
    return stringToTrim.replace(/^\s+/,"");
}

function rtrim(stringToTrim) {
    return stringToTrim.replace(/\s+$/,"");
}

var iexp = document.all ? true:false;
var is_ie6 = ( window.external && typeof window.XMLHttpRequest == "undefined" );

//Campos númericos
function acceptNum(evt){
    var key = iexp ? evt.keyCode : evt.which ;
    return (key <= 13 || (key >= 48 && key <= 57));
}

function esEnter(evt){
    var key = iexp ? evt.keyCode : evt.which ;
    return (key == 13 )
}

/**
* Funcion que por el metodo post envia los datos a una url determinada 
* paramentros es una cadena asi: 'permiso=true&bandera=124564'
* div es el nombre del Id da la etiqueta a cargar
* los parametros y la division son opcionales
*/

function visualizaUrl(url, parametros, div)
{    
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
                    var responseText = respuesta || "No hubo respuesta... por favor intentelo mas tarde";
                    try{$("#"+div).html(responseText)} catch(err){};
                    $("#loading").hide();
                },
                error: function(){
                    $("#loading").hide();
                    alert("Por favor inténtalo más tarde");
                }
            });
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
function visualizaURL(url, opciones)
{
    if(url){
        var parametros = __$AnalizaValor(opciones, "parametros", "");
        var contenedor = __$AnalizaValor(opciones, "contenedor", "content");
        var accionPosterior = __$AnalizaValor(opciones, "accionPosterior");
        var loading = __$AnalizaValor(opciones, "loading");
        
        if( !$.isEmptyObject( parametros ) && !$.isBlank( parametros ) ){
            if(parametros.startsWith("&") || parametros.startsWith("?")){
                parametros = parametros.substr(1);
            }
            parametros+="&";
        }
        parametros+= 'rand=' + Math.random();
        
<<<<<<< HEAD
        if(!$.isEmptyObject( url ) && !$.isBlank( url ) ){
=======
        if(!$.isEmptyObject( url ) && !$.isBlank( url )){
>>>>>>> branch 'master' of https://github.com/romanlezama/migracionProto2JQ.git
            if(loading){
                $("#loading").height = document.getElementById("page").offsetHeight+"px";
                $("#"+loading).show();
            }

            var opcPrototype = {
<<<<<<< HEAD
                url     : url,
                method  : 'post',
=======
            	url 	: url,
                method 	: 'post',
>>>>>>> branch 'master' of https://github.com/romanlezama/migracionProto2JQ.git
                success : function(transport){
                    var responseText = transport || "No hubo respuesta... por favor intentelo mas tarde";
                    try{ $( "#"+contenedor ).html( responseText ); }catch( err ){};
                    if( $( "#"+loading ) ){ $( "#"+loading ).hide(); }
                    if(accionPosterior){
                        try{ accionPosterior(); }catch(error){}
                    }
                },
                error : function(){ 
                    if( $("#"+loading) ){ $( "#"+loading ).hide(); }
                    alert('Por favor inténtelo mas tarde');
                }
            }
            if(parametros!=undefined){
                opcPrototype[ 'data' ] = parametros;
            }
            
            $.ajax( opcPrototype );
            
        }
    }

}

/**
* Función interna que se encarga de entregar un parámetro opcional
* o un valor por defecto desde una colección tipo JSON
*/
function __$AnalizaValor(coleccion, parametro, defecto) {
    if (coleccion==undefined || parametro==undefined) {
        return defecto;
    }
    else{
        var valor = coleccion[parametro];
        if(valor==undefined){
            return defecto;
        }
        return valor;
    }
}

function showSelects(view){
    var selects = $('select');
    var size=selects.length; //Quitar despues de pruebas.
    console.log("Size: "+size + " view: "+view);
    if(view)
        $.each(selects,function(){selects.show(); /*console.log(val)*/} );
    else
        $.each(selects,function(){selects.hide(); /*console.log(val)*/} );
    
}

function showPopUp( opc ){
    if( opc.accionPrevia ){
        opc.accionPrevia();
    }

    if( is_ie6 )
        showSelects(false);

    var top = 100;
    if(opc.top)
        top = opc.top;
    $('popupWindow').style.top = (document.body.scrollTop + top) + "px";

    if( opc ){
        if(opc.width)
            $('popupWindow').style.width = opc.width;
        if(opc.height)
            $('popupWindow').style.height = opc.height;
        if(opc.titulo)
            $('popupTitle').innerHTML=opc.titulo;
    }

    $('popupBackground').show();

}

function hidePopUp( opc ){
    $('popupBackground').hide();
    $('popupContent').innerHTML = "";
    $('popupWindow').style.width = '600px';

    if( opc ){
        if( opc.accionPosterior ){
            opc.accionPosterior();
        }
    }
    
    if( is_ie6 )
        showSelects(true);

}

function showPreview( opc ){
    if( opc.accionPrevia ){
        opc.accionPrevia();
    }

    if( is_ie6 )
        showSelects(false);

    var top = 100;
    if(opc.top)
        top = opc.top;
    $('previewWindow').style.top = (document.body.scrollTop + top) + "px";

    if( opc ){
        if(opc.width)
            $('previewWindow').style.width = opc.width;
        if(opc.height)
            $('previewWindow').style.height = opc.height;
        if(opc.titulo)
            $('previewTitle').innerHTML=opc.titulo;
    }

    $('previewBackground').show();

}

function hidePreview( opc ){
    $('previewBackground').hide();
    $('previewContent').innerHTML = "";
    $('previewWindow').style.width = '600px';

    if( opc ){
        if( opc.accionPosterior ){
            opc.accionPosterior();
        }
    }

    if( is_ie6 )
        showSelects(true);

}

function showPrintWindow( opc ){
    if( opc.accionPrevia ){
        opc.accionPrevia();
    }

    if( opc ){
        if(opc.width)
            $('printWindow').style.width = opc.width;
    }

    $('page').hide();
    $('printWindow').show();

}

function hidePrintWindow( opc ){
    $('printWindow').hide();
    $('page').show();
    $('printWindow').innerHTML = "";
    $('printWindow').style.width = '950px';
    if( opc ){
        if( opc.accionPosterior ){
            opc.accionPosterior();
        }
    }
}

function clearPage(){
    $('menu').innerHTML = '';
    $('submenu').innerHTML = '';
}

function $RF(el, radioGroup) {
    if($(el).type && $(el).type.toLowerCase() == 'radio') {
        radioGroup = $(el).name;
        el = $(el).form;
    } else if ($(el).tagName.toLowerCase() != 'form') {
        return false;
    }

    var checked = $(el).getInputs('radio', radioGroup).find(
        function(re) {return re.checked;}
    );
    return (checked) ? $F(checked) : null;
}


function imprimir() {
    if (window.print)
        window.print()
    else
        alert("Para imprimir presione Crtl+P.");
}

function checkShortcut(){
    if(iexp &&(event.keyCode==8 || event.keyCode==13)){
        return  document.activeElement.tagName=='INPUT' ||
                document.activeElement.tagName=='TEXTAREA';
    }
    return true;
}

function irA(elemID) {
    var offsetTrail = document.getElementById(elemID);
    var offsetLeft = 0;
    var offsetTop = 0;
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined" && navigator.appName=="Microsoft Internet Explorer" ) {
        offsetLeft += parseInt(document.body.leftMargin);
        offsetTop += parseInt(document.body.topMargin);
    }
    window.scrollTo(offsetLeft,offsetTop)
}
function crearFecha(sFecha){
    var anio =  parseInt(sFecha.substr(0,4));
    var mes = sFecha.substr(5,2);
    if( mes.charAt(0)=='0' )
        mes = mes.substr(1,1);
    mes = parseInt(mes)-1;
    var dia = sFecha.substr(8,2);
    if( dia.charAt(0)=='0' )
        dia = dia.substr(1,1);
    dia = parseInt(dia);
    var dFecha = new Date( anio, mes,dia );
    return dFecha;
}

function fechaMysql(dFecha){
    var mes = dFecha.getMonth()+1;
    var dia = dFecha.getDate();
    return dFecha.getFullYear() + '-' +
           (mes<10 ? ('0' + mes) : mes) + '-' +
           (dia<10 ? ('0' + dia) : dia);
}

function difFecha(iFecha, fFecha){
    return (Math.floor( (fFecha.getTime()-iFecha.getTime()) / (1000 * 60 * 60 * 24) ));
}

//Limita caracteres en textArea
function limitaCaracteres(area,e,longitud) {
    if (area.value.length > longitud ) {
        area.value = area.value.substring(0,longitud)
        return false;
    }
    return true
}

function mayusculas(field){
    field.value = field.value.toUpperCase();
}

/* Se crea función especial de jQuery para reemplazar al .blank() de Prototype */
(function($){
  $.isBlank = function(obj){
    return(!obj || $.trim(obj) === "");
  };
})(jQuery);
