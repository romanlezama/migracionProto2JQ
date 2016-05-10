/* *********************
*  FUNCIONES PARA SU ANÁLISIS DE MIGRACIÓN PROTOTYPE A JQuery
  Obtenidas de su exploración en código HTML
*/

//Vienen de /acuerdos/PorRevisar.php
ver = function(idAcuerdo){
        visualizaUrl( 'php/VerAcuerdo.php',
                      'id_acuerdo=' + idAcuerdo +
                      '&soloVer=1' +
                      '&caller=acuerdos/RevisarAcuerdos.php&expediente=&anio_expediente=&desde=&hasta=&pagina=0',
                      'content');
    }

editar = function( idAcuerdo){
    visualizaUrl( 'php/EditarAcuerdo.php',
                  'id_acuerdo=' + idAcuerdo +
                  '&salto=/acuerdos/RevisarAcuerdos.php' +
                  '&caller=acuerdos/RevisarAcuerdos.php&expediente=&anio_expediente=&desde=&hasta=&pagina=0',
                  'content');
}
  
eliminar = function( idAcuerdo, acuerdo ){
    if( !confirm("¿Desea eliminar la resolución " + acuerdo + "?") )
       return;

    console.log("IdAcuerdo: "+idAcuerdo+"Acuerdo: "+acuerdo)
    visualizaUrl( 'php/EliminarAcuerdo.php',
                  'id_acuerdo=' + idAcuerdo +
                  '&caller=acuerdos/RevisarAcuerdos.php&expediente=&anio_expediente=&desde=&hasta=&pagina=0',
                  'lista_acuerdos');
}

corregido = function( idAcuerdo, acuerdo ){
    visualizaUrl( 'php/CorregirAcuerdo.php',
                  'id_acuerdo=' + idAcuerdo +
                  '&caller=acuerdos/RevisarAcuerdos.php&expediente=&anio_expediente=&desde=&hasta=&pagina=0',
                  'lista_acuerdos');
}
/*
cambiarArchivo = function( idAcuerdo, acuerdo ){
  console.log("idAcuerdo:"+idAcuerdo + " acuerdo:"+acuerdo);
    visualizaUrl( 'php/FormaActualizarAcuerdo.php',
                  'id_acuerdo='+idAcuerdo+
                  '&folio='+acuerdo,
                  'popupContent');
    showPopUp({width:'500px',titulo:"Actualizar archivo"});

}

//Vienen de /acuerdos/RevisarAcuerdos.php
 muestraAcuerdos = function(pagina){
        visualizaUrl('php/PorRevisar.php',
                      $('formaAcuerdo').serialize()+'&pagina='+pagina,
                      'lista_acuerdos'
                  );
}
muestraAcuerdos('0');

// Viene de /juicios/Administracion.php
buscarJuicios = function(pagina){

  var hoy = new Date();
  var desde, hasta;
  if( $F('desde')!=''){
      var aux = $F('desde').split("-");
      desde = new Date(aux[0],aux[1]-1,aux[2]);
      if( desde.getTime() > hoy.getTime() ){
          alert( "La fecha 'desde' no puede ser posterior al día de hoy");
          return;
      }
  }
  if( $F('hasta')!=''){
      var aux = $F('hasta').split("-");
      hasta = new Date(aux[0],aux[1]-1,aux[2]);
      if(hasta.getTime()>hoy.getTime()){
          alert( "La fecha 'hasta' no puede ser posterior al día de hoy");
          return;
      }
  }
  if( $F('hasta')!='' &&  $F('hasta')!=''){
      if(desde.getTime()>hasta.getTime()){
          alert( "La fecha 'desde' no puede ser posterior a la fecha 'hasta'");
          return;
      }
  }

  visualizaUrl('./../juicios/BuscarJuicios.php',
                $('formaJuicio').serialize()+'&pagina='+pagina,
                'lista_juicios'
            );
  }

 

abogados = function(id_juicio,folio){
  visualizaUrl( './../juicios/EditarAbogados.php',
                '&id_juicio=' + id_juicio +
                '&folio=' + folio,
               'lista_juicios');
}

acuerdos = function(id_juicio,folio){  
  visualizaUrl( './../acuerdos/EditarAcuerdos.php',
                '&id_juicio=' +id_juicio +
                '&folio=' + folio,
                'lista_juicios');
  }
 

actualizaMenu = function(){
      visualizaURL(
          './../menu/MenuJuicios.php' ,
          {
              parametros: 'selected_item=' + selected_item,
              contenedor: 'submenu'
          }
      );
}
*/