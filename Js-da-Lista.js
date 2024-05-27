
/*Função para adicionar os textos na div através do botão
e input */


function inserir() {

                  /* Criação de variaveis para utilizar na função */
                  var input = document.getElementById('tarefa')
                  var inputValue = input.value

                                    /* Este If faz com que vc coloque as strings na div */
                                    if(inputValue !== "") {
                                    
                                    /* Acessa a Div Lista */
                                    var saida = document.getElementById('Lista') 
                                       
                                    /* Cria uma tag P através do Js mexendo na Dom para poder salvar as strings */ 
                                    var divs = document.createElement('div')
                                    divs.classList.add('divs')
                                    divs.textContent = ""
                                    saida.appendChild(divs)
                                    
                                    var paragrafo = document.createElement('p')
                                    
                                    /* Colocar a tag P (criada no Js) vire um valor no input */
                                    paragrafo.textContent = inputValue
                                    paragrafo.classList.add('paragrafo');
                                    divs.appendChild(paragrafo)
                                     
                  

                   var botao = document.createElement('button')
                   botao.classList.add('botaozinho')
                   botao.textContent = 'Deletar'

                  /* A saida.appenChild faz adicionar o paragrafo na div Lista */                  
                  divs.appendChild(botao) 




                                       botao.onclick = function() {
                                       var divPai = this.parentNode;          
                                       // Remove a div pai do DOM
                                       divPai.remove(); 
                                       saveTasks()
                                       }
                                      

                                       var botao = document.createElement('button')
                                       botao.classList.add('concluir')
                                       botao.textContent = 'Concluido'
                                       divs.appendChild(botao) 

                                       botao.onclick = function() {
                                       var concluidos = document.getElementById('tarefas-esquerdas')
                                       var divPai = this.parentNode;
                                       var paragrafos = divPai.querySelector('p')
                                       paragrafos.title = paragrafos.textContent
                                       divPai.remove();
                                       concluidos.appendChild(paragrafos)
                                       
                                      
                                       while (concluidos.childElementCount > 5) {
                                          concluidos.removeChild(concluidos.firstChild)
                                       }
                                       saveTasks()
                                    }
                                      /* Cria um laço de repetição utilizando childElementCount que é feito para contar a quantidade elementos filhos */

                                       while (saida.childElementCount > 6) {
                                          saida.removeChild(saida.firstChild)
                                       }
                                     /* Quando der enter no input ele volta a ficar vazio */
                                       input.value = "";
                                       saveTasks()
                                       
                                       
                     }
      }



      /* Estudar todo esse código mais tarde, para ver como funciona de fato

      function saveTasks() {
         var tarefas = [];
         var tarefasConcluidas = [];
         var divs = document.querySelectorAll('#Lista .divs');
         divs.forEach(function(div) {
             var paragrafo = div.querySelector('p');
             tarefas.push(paragrafo.textContent);
         });
         var concluidos = document.querySelectorAll('#tarefas-esquerdas p');
         concluidos.forEach(function(paragrafo) {
             tarefasConcluidas.push({ text: paragrafo.textContent, class: paragrafo.className });
         });
         localStorage.setItem('tarefas', JSON.stringify(tarefas));
         localStorage.setItem('tarefasConcluidas', JSON.stringify(tarefasConcluidas));
     }

     function loadTasks() {
         var tarefas = JSON.parse(localStorage.getItem('tarefas'));
         var tarefasConcluidas = JSON.parse(localStorage.getItem('tarefasConcluidas'));
         if (tarefas) {
             tarefas.forEach(function(tarefa) {
                 var input = document.createElement('input');
                 input.value = tarefa;
                 document.getElementById('tarefa').value = tarefa;
                 inserir();
             });
         }
         if (tarefasConcluidas) {
             var concluidos = document.getElementById('tarefas-esquerdas');
             tarefasConcluidas.forEach(function(item) {
                 var paragrafo = document.createElement('p');
                 paragrafo.textContent = item.text;
                 paragrafo.className = item.class;
                 concluidos.appendChild(paragrafo);
             });
         }
     }

     window.onload = loadTasks;
     */

     /*
     function saveTasks() {
      var tarefasAtivas = document.getElementById('Lista').innerHTML;
      var tarefasConcluidas = document.getElementById('tarefas-esquerdas').innerHTML;
      localStorage.setItem('tarefasAtivas', tarefasAtivas);
      localStorage.setItem('tarefasConcluidas', tarefasConcluidas);
  }

  function loadTasks() {
      var tarefasAtivas = localStorage.getItem('tarefasAtivas');
      var tarefasConcluidas = localStorage.getItem('tarefasConcluidas');

      document.getElementById('Lista').innerHTML = tarefasAtivas || '';
      document.getElementById('tarefas-esquerdas').innerHTML = tarefasConcluidas || '';

      // Reatribuir eventos aos botões após carregar as tarefas
      
   }

   window.onload = loadTasks */