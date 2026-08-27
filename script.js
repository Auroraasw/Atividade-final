        function abrirAba(nome, elemento) {
            var secoes = document.querySelectorAll("main > section");
            for (var i = 0; i < secoes.length; i++) {
                secoes[i].classList.remove("visivel");
            }

            var secao = document.getElementById(nome);
            if (secao) {
                secao.classList.add("visivel");
            }

            if (elemento) {
                var botoes = document.querySelectorAll(".nav-btn");
                botoes.forEach(btn => btn.classList.remove("ativo"));
                elemento.classList.add("ativo");
            }
        }