let num1 = "";
let num2 = "";
let valor = "";
let temPonto = false;

clicado = () => alert("Alô, Mundo");
mensagem = (msg) => console.log(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros_s = (c,j) => mult(c,div(j,100));
montante_js = (c,j) => soma(juros_s(c,j),c);

mensagem((soma(7,soma(11,soma(15,4)))));

mensagem(sub(18,7));

mensagem(soma(div(2,2),2));

mensagem(montante_js(420,18));  

mostrar_display = (msg) => {
    document.getElementById("resultado").value = msg;
}

function digitando(tecla){
    if(tecla == "."){
        if(!temPonto){
                valor += tecla;
                mostrar_display(valor);
                temPonto = true;
        }
        return;
    }
    valor += tecla;
    mostrar_display(valor);
}

