/* Variável:
- let (forma moderna para variáveis mutáveis)
- Escopo: block-scoped
- Sem hoisting visível: Fica em "zona morta" até linha de declaração
- Se acessada antes da declaração, retorna "ReferenceError: {let} is not defined"
*/
function exemplolet(){
    if(true) {
        let numero = 20;
        // console.log(y); // 20
    }
     console.log(y); // ReferenceError: numero is not defined (block-scoped)
}

exemplolet()