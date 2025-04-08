/*Variável:
- var (forma antiga e com escopo estranho
- Escopo: function-scoped
- Hoisting: a variável é Hoisted para o topo da função mas sem valor
- Se acessada antes da declaração, retorna valor como: "undefinned"
- Problemas: pode causar comportamento inesperado devido ao hosting e escopo limitado
*/
function exemploVar(){
    // var x; -- váriave. içada.
    console.log(x); // undefined (por conta do hoisting)
    var x = 10;
    console.log(x); // 10
}

exemploVar()