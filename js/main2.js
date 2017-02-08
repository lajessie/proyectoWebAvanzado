$(document).ready(function(){

  var imagenes = ['img/im1.jpg','img/im2.jpg','img/im3.jpg','img/im4.jpg','img/im5.jpg'];

  $(".img-fondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');

  $("#mandar").click(function(){
    var direccion=  $("#dir").val();
    var metros= $("#metros").val();
  var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyC-vaZ5s4UxRMIMFAZOe0cPvmufSMR9ciA';
  console.log(metros);


$.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
});

function recibirDatos(json){
  var informacion = json;
  var codigoPostal = informacion.results[0].address_components[6].long_name;
  var latitud = informacion.results[0].geometry.location.lat;
  var longitud = informacion.results[0].geometry.location.lng;



/*  $("#respuesta").append('<div class="card-panel col m6 offset-m3 grey lighten-2 center"><h6>Tu código postal es: '+codigoPostal+'</h6></div>')*/




//});





// Cuando ya tengas tu token reemplaza el texto 'AQUÍ_VA_TU_TOKEN' de la siguiente variable con él.
var token = 'cbdaef44-e562-4d01-b403-8cc2c9baad70';

var urlApiBusqueda = "http://www3.inegi.org.mx/sistemas/api/denue/v1/consulta/buscar/#condicion/#latitud,#longitud/#metros/#token";
var vecNombres = [
'id de establecimiento',
'Nombre:',
'Raz&oacute;n social:',
'Descripción:',
'Personal ocupado (estrato):',
'Tipo de vialidad:',
'Nombre de la vialidad:',
'N&uacute;mero exterior o km:',
'N&uacute;mero o letra interior:',
'Colonia:',
'C&oacute;digo postal:',
'Entidad,Municipio,Localidad:',
'N&uacute;mero de tel&eacute;fono:',
'Correo electr&oacute;nico:',
'Sitio en Internet:',
'Tipo de unidad econ&oacute;mica:',
'Latitud:',
'Longitud:'];

//function llamarApiDenueBus(){

  //iguala el id del input a una variable para tenerla de valor
	var condicion = $('#condi').val();
/*	var longitud = $('#lon').val();
	var latitud = $('#lat').val();
	var metros = $('#mts').val();*/


                            //variable      'cosa que va a reemplazar', cosa reemplazada
	var urlApiBusquedaTmp = urlApiBusqueda.replace('#condicion',condicion);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#latitud',latitud);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#longitud',longitud);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#metros',metros);
	urlApiBusquedaTmp = urlApiBusquedaTmp.replace('#token',token);
console.log(condicion);
console.log(latitud);
console.log(longitud);


  //verificar que esté bien el token
	if(token.includes('AQUÍ')){
		alert("Debes ingresar tu token en el archivo apiDenue.js");
	}


  else {


		$.getJSON( urlApiBusquedaTmp, function( json ) {

			var codHtml = '';
			for(var i = 0; i < json.length; i++){

			codHtml += '<table style="width:50%;">';
			codHtml += '<tr><th colspan="2">Establecimiento ' + (i + 1) + '</th></tr>'; //num de Establecimiento

      codHtml += //'<tr ><td style="width:50%;" >' + vecNombres[0] + '</td><td style="width:50%;">' + json[i].Id + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[1] + '</td><td style="width:50%;">' + json[i].Nombre + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[2] + '</td><td style="width:50%;">' + json[i].Razon_social + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[3] + '</td><td style="width:50%;">' + json[i].Clase_actividad + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[4] + '</td><td style="width:50%;">' + json[i].Estrato + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[5] + '</td><td style="width:50%;">' + json[i].Tipo_vialidad + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[6] + '</td><td style="width:50%;">' + json[i].Calle + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[7] + '</td><td style="width:50%;">' + json[i].Num_Exterior + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[8] + '</td><td style="width:50%;">' + json[i].Num_Interior + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[9] + '</td><td style="width:50%;">' + json[i].Colonia + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[10] + '</td><td style="width:50%;">' + json[i].CP + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[11] + '</td><td style="width:50%;">' + json[i].Ubicacion + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[12] + '</td><td style="width:50%;">' + json[i].Telefono + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[13] + '</td><td style="width:50%;">' + json[i].Correo_e + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[14] + '</td><td style="width:50%;">' + json[i].Sitio_internet + '</td></tr>'+
			//'<tr ><td style="width:50%;" >' + vecNombres[15] + '</td><td style="width:50%;">' + json[i].Tipo + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[16] + '</td><td style="width:50%;">' + json[i].Latitud + '</td></tr>'+
			'<tr ><td style="width:50%;" >' + vecNombres[17] + '</td><td style="width:50%;">' + json[i].Longitud + '</td></tr>'
			codHtml += '<tr><td></td></tr></table><br><br><hr style="color: brown;">';
			}


			$('#tabDenue').html(codHtml);
		});


	}
}
});




});
