const express = require('express');
const app = express();

app.set("view engine", "ejs"); //avisa ao express que o html(view engine) sera exibido em ejs. indica que o arquivo esta dentro de views

//criando rota - // get esta dentro do express
//a const app vai chamar o endereço "/", vai chamar a funcao res (resposta) que por sua vez irá renderizar (render) o index que deve esta dentro de uma outra pasta views. 
app.get("/", function (req, res) {

    const itens = [
        { 
            title: "V",
            message: "ocê, sempre tão linda"
        },
        { 
            title: "A",
            message: "inda é o amor e o sentido"
        },
        { 
            title: "N",
            message: "esse mundo sem sentido."
        },
        { 
            title: "E",
            message: "ra estranho sem você,"
        },
        { 
            title: "S",
            message: "em graça e"
        },
        { 
            title: "S",
            message: "em cor."
        },
        { 
            title: "A",
            message: "gora é só amor e cor!"
        },
    ];

    const subtitles = "Obrigado por existir!"
    res.render("pages/index",{
        descricao: itens,
        subtitles: subtitles,
    }); // na separação de pastas fica views/pages/index.ejs - reduzindo fica pages/index
});

app.get("/sobre", function (req, res) {
    res.render("pages/about")
});


//criando porta para exibir - a porta nesse caso é 8080
app.listen(8080);
console.log("Porta executando");