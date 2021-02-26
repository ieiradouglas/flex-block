   var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar

    function exibir() {
        document.querySelector(".nav-lateral-bg").style.display = "flex";
    }

    function ocultar() {
        document.querySelector(".nav-lateral-bg").style.display = "none";
    }

    function ocultarExibir() { // Quando clicar no botão.

        if (visibilidade) {//Se a variável visibilidade for igual a true, então...
            document.querySelector(".nav-lateral-bg").style.display = "none";//Ocultamos a div
            visibilidade = false;//alteramos o valor da variável para falso.
        } else {//ou se a variável estiver com o valor false..
            document.querySelector(".nav-lateral-bg").style.display = "flex";//Exibimos a div..
            visibilidade = true;//Alteramos o valor da variável para true.
        }
    }