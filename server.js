var logNow = function(texte) { console.log(new Date()+" - "+ texte);};
logNow("---------------------------------------------------------------");
logNow("CubeReader v1. Author: @flrent");
logNow("---------------------------------------------------------------");
logNow("Initialisation du serveur "+__dirname+" réussie.");

/* modules */
var url = require('url'),
	express = require('express');
/* --------- */

/* init */
var app = express.createServer();

app.use(require('express').bodyParser());

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});


/* routes */
app.get('/', function(req, res){
	logNow("Application mobile initialisée.");
 	res.render('./public/index.html');
});
app.listen(3000);