var srvChat= require("socket.io").listen(8080);
srvChat.sockets.on("connection", arranque)
var mensajes="";
function arranque(usuario)
{
	usuario.on("enviarMensaje", repartirMensaje);
	usuario.emit("repartirHistorial", mensajes);
}
function repartirMensaje(mensaje)
{
		mensajes=mensajes+mensaje+"<br>";
		srvChat.sockets.emit("repartirMensajesServidor", mensaje);
}