/* - const (constante moderna)
- Escopo: Block-scoped (igual ao let)
- Hoisting: Igual ao let
- Imutável: o identificador não pode ser reatríbuido
- IMPORTANTE: objetos e arrays podem ser modificados internamente.
*/
const z = 30;
// z = 40; -- Erro! Não pode reatribuir

const objeto = {nome: "Gustavo"};
objeto.nome = "Petry"; // Isso é permitido!

console.log(objeto.nome);