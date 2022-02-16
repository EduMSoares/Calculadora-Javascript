        var botao = document.getElementById('botao1');
        var cont = document.querySelector('div.conteudo_2');
        botao.addEventListener('click', mostrarMsg);
            function mostrarMsg(){
                var input = prompt('insira um numero');
                var inp = Number.parseInt(input);
                var c = 1;
                    while ( c <= 10){
                        var item = document.createElement("p")
                        item.textContent = `${inp} X ${c} = ${inp * c}`;
                        cont.appendChild(item);
                        c++;
                    }
            }
        function limparTabuada(){
            cont.innerHTML = 'Sua tabuada será mostrada aqui:';
        }