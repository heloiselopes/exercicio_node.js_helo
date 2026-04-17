// Captura os argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("❌ Erro: Informe 3 argumentos -> número operador número");
  console.log("Exemplo: node calculadora.js 10 + 5");
  process.exit(1);
}

const [num1Str, operador, num2Str] = args;

// Converte para número
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

// Valida se são números
if (isNaN(num1) || isNaN(num2)) {
  console.log("❌ Erro: Os valores informados não são números válidos.");
  process.exit(1);
}

let resultado;

// Realiza a operação escolhida
switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("❌ Erro: Divisão por zero não é permitida.");
      process.exit(1);
    }
    resultado = num1 / num2;
    break;
  default:
    console.log("❌ Erro: Operador inválido. Use +, -, * ou /");
    process.exit(1);
}

// Exibe o resultado formatado
console.log(`✅ Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
