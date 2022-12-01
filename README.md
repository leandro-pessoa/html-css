# html-css
 <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hub</title>
    <link rel="shortcut icon" href="Icons8-Windows-8-Network-Hub.ico" type="image/x-icon">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        *{
            margin: 0px;
            padding: 0px;
        }
        body{
            font-family: Arial, Helvetica, sans-serif;
            background-color: #00174E;
        }
        header{ 
            background: black url('desafios/desafio011/imagens/espaco.jpg') center center no-repeat fixed;
            background-size: cover;
            height: 100px;
            text-align: center;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.479);
            font-family: 'Lobster Two', cursive;
        }
        h1{
            padding-top: 20px;
            color: white;
            font-size: 3em;
            text-shadow:4px 4px 2px #00174E;
        }
        h2{
            font-family: 'Fredoka One', cursive;
            font-weight: normal;
            color: #106085;
            text-shadow:1px 1px 1px #00174E;
            padding: 10px;
        }
        main{
            background-color: white;
            padding: 10px;
            max-width: 800px;
            margin: 40px auto;
            border-radius: 10px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.438);
        }
        a{
            text-decoration: none;
            color: #136586;
            font-weight: bolder;
            padding: 5px;
            border-radius: 10px;
        }
        div{
            padding: 10px;
        }
        a:hover{
            background: black url('desafios/desafio011/imagens/espaco.jpg') center center no-repeat fixed;
            background-size: cover;
            color: white;
            text-shadow: 1px 1px 1px #00174E;
            transition-duration: 0.5s;
        }
        footer{
            color: white;
            text-shadow:2px 2px 1px #106085;
            text-align: center;
            font-weight: bold;
            font-size: 1.3em;
        }
    </style>
</head>
<body>
    <header>
        <h1>Hub</h1>
    </header>
    <main>
        <section>
            <h2>Acesse aqui meus principais projetos:</h2>
            <div><a href="https://leandro-pessoa.github.io/html-css/meu-site/index.html" target="_blank" rel="external">Meu site (Conteúdo autoral)</a></div>
            <div><a href="https://leandro-pessoa.github.io/html-css/desafios/desafio010 copy/desafio010.html" target="_blank" rel="external">Projeto android (Conteúdo não autoral)</a></div>
            <div><a href="https://leandro-pessoa.github.io/html-css/desafios/desafio012/desafio012.html" target="_blank" rel="external">Projeto cordel (Conteúdo não autoral)</a></div>
        </section>
    </main>
    <footer>
        &copy; Leandro Pessoa
    </footer>
</body>
</html>
 