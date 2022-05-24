const express = require('express');
const app = express();

app.set("view engine", "ejs"); //avisa ao express que o html(view engine) sera exibido em ejs. indica que o arquivo esta dentro de views

//criando rota - // get esta dentro do express
//a const app vai chamar o endereço "/", vai chamar a funcao res (resposta) que por sua vez irá renderizar (render) o index que deve esta dentro de uma outra pasta views. 
app.get("/", function (req, res) {
    res.render("pages/index") // na separação de pastas fica views/pages/index.ejs - reduzindo fica pages/index
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})


//criando porta para exibir - a porta nesse caso é 8080
app.listen(8080);
console.log("Porta executando");