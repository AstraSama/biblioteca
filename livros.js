let biblioteca = [];
let livro = {
    nome: "",
    tamanho: "",
    autor: "",
    genero: ""
}
let num_resposta = "";
let passo = 0;

console.log("\nAdicione o nome do livro: ");

process.stdin.on('data', function(data) {
    let resposta = data.toString().trim();
    let aux = "";
    
    switch(passo) {
        case 0:
            livro.nome = resposta;

            process.stdout.write("\nDigite o tamanho desse livro:");
            passo++;

        break;

        case 1:
            livro.tamanho = resposta;

            process.stdout.write("\nDigite o nome do autor desse livro:");
            passo++;  
            
        break;
        
        case 2:
            livro.autor = resposta;

            process.stdout.write("\nDigite o genero desse livro:");
            passo++;

        break;

        case 3:
            livro.genero = resposta;

            biblioteca.push(livro);
            process.stdout.write("\nSeu livro foi adicionado");

            livro = {
                nome: "",
                tamanho: "",
                autor: "",
                genero: ""
            }
            
            process.stdout.write("\nDigite 'sair' para sair, 'add' para adicionar outro livro, 'look' para buscar um livro, 'rem' para remover um livro: ");
            passo++;
        
        break;

        case 4:
            
            if(resposta == "sair") {
                process.exit();

            } else if(resposta == "add") {
                process.stdout.write("\nDigite o nome desse livro:");
                passo = 0;

            } else if(resposta == "look") {
                process.stdout.write("\nDigite o nome desse livro que deseja buscar:");
                console.log(biblioteca);

                passo++;

            } else if(resposta == "rem") {
                process.stdout.write("\nDigite o nome desse livro que deseja remover:");

                passo = 6;
            }

        break;

        case 5:
            for(let i = 0; i < biblioteca.length; i++) {
                if(biblioteca[i].nome == resposta) {
                    num_resposta = 1;
                }
                else {
                    num_resposta = -1;
                }
            }
            if(num_resposta == 1) {
                process.stdout.write("\nExiste");

            } else if(num_resposta == -1){
                process.stdout.write("\nNão existe");
            }
            process.stdout.write("\nDigite 'sair' para sair, 'add' para adicionar outro livro, 'look' para buscar um livro, 'rem' para remover um livro: ");
            passo--;

        break;

        case 6:
            for(let i = 0; i < biblioteca.length; i++) { //TODO
                if(biblioteca[i].nome == resposta) {
                    biblioteca[i] = " ";

                }
            }
            for(let i = 0; i < biblioteca.length; i++) {
                if(biblioteca[i] == " ") {
                    biblioteca[i] = biblioteca[biblioteca.length - 1];

                }
            }

            biblioteca.pop();
            
            process.stdout.write("\nSeu livro foi removido.\nDigite 'sair' para sair, 'add' para adicionar outro livro, 'look' para buscar um livro, 'rem' para remover um livro: \n")
            passo = 4;
        break;
    }
})
