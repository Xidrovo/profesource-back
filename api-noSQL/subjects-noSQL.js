var express = require('express');
var router = express.Router();
var request = require("request");


router.get('/subjects/consult', function(req, res, next) {
  var options = { 
    method: 'GET',
    url: 'https://profesource-ea51.restdb.io/rest/materias',
    headers: 
    { 
      'cache-control': 'no-cache',
      'x-apikey': '9ebab42cd520e0d9ab09c97e33d1475da0d74'} 
    };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
});



router.post('/subjects/register', async (req, res) => {
  var options = {
    method: 'POST',
    url: 'https://profesource-ea51.restdb.io/rest/materias',
    headers: { 
      'cache-control': 'no-cache',
      'x-apikey': '9ebab42cd520e0d9ab09c97e33d1475da0d74',
      'content-type': 'application/json' 
    },
    body: req.body,
    json: true
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send("The subject was published successfully");
  });
});


router.get('/subjects/consult/:Subject_name', async function(req, res) {
    var options = { 
        method: 'GET',
        url: 'https://profesource-ea51.restdb.io/rest/materias?q={"Materia": "'+`${req.params.Subject_name}`+'"}',
        headers: 
        { 
        'cache-control': 'no-cache',
        'x-apikey': '9ebab42cd520e0d9ab09c97e33d1475da0d74',
        'content-type': 'application/json' 
        },
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body)
    })
});

router.put('/subjects/update/:id', async function(req, res) {
    var value={};
    var options = { 
    method: 'GET',
    url: 'https://profesource-ea51.restdb.io/rest/materias?q={"Materia":"'+`${req.params.id}`+'"}',
    headers: 
    { 
      'cache-control': 'no-cache',
      'x-apikey': '9ebab42cd520e0d9ab09c97e33d1475da0d74',
      'content-type': 'application/json' 
    },
    body: 
    { 
        "Materia" : req.body.Materia,
        "Ciencia" : req.body.Ciencia,
        "Carrera" : req.body.Carrera,
        "Descripcion" : req.body.Descripcion,
    },
    json: true 
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send("The subject was updated successfully");
  });
});


router.delete('/subjects/delete/:Subject_name', async function(req, res, next){
  var options = { 
    method: 'DELETE',
    url: 'https://profesource-ea51.restdb.io/rest/materias/*?q={"Materia":"'+`${req.params.Subject_name}`+'"}',
    headers: 
    { 
      'cache-control': 'no-cache',
      'x-apikey': '9ebab42cd520e0d9ab09c97e33d1475da0d74',
      'content-type': 'application/json' 
    } 
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send("The subject was deleted successfully");     
  });
});



module.exports = router;