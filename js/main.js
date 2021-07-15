
/* //PUXA A INFORMAÇÃO DE UM LINK
function consultaCep(){     //função
    $.ajax({                //função do jQuerry faz uma requisição Ajax
        url: "https://viacep.com.br/ws/70631025/json/",     //buscar
        type: "GET",             //tipo de requisição, GET = no navegador(?)
        success: function(response){    //determina ação caso haja sucesso
            console.log(response);      //retorna, no console, todo os dados disponbilizados pela url
            alert(response.cep);        //exibe caixa de alerta com a informação requisitada (.cep retornou o cep)
        }
    })
} */

$(function(){      /* oculta o elemento inteiro */
    $(".cep").hide();
    $(".barra-progresso").hide();
});

function consultaCep(){ 
    var cep = document.getElementById("cep").value;  //a variável 'cep' recebe o valor digitado no input
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; //concatena a url com o cep digitado, criando uma url nova com o cep do input ||||| pode ser feito para puxar dados de arquivos online baseado em códigos de usuário como no fórum
    console.log(url);                               //exibe o valor no console
    $.ajax({                
        url: url,     
        type: "GET",             
        success: function(response){    
            console.log(response);
            $(".barra-progresso").show(); /* mostra que a pesquisa está sendo feita */
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show(); /* exibe a tabela quando o cep é pesquisado */
            $(".barra-progresso").hide(); /* abarra some quando a pesquisa termina */
        }
    })
}



