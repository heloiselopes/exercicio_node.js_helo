console.log("olá");
// Importando módulos nativos do Node.js
const os = require("os");

// Mensagem de boas-vindas personalizada
console.log("👋 Bem-vindo ao programa em Node.js!");

// Exibe a versão do Node.js instalada
console.log("Versão do Node.js:", process.version);

// Exibe o sistema operacional
console.log("Sistema Operacional:", os.type(), os.release());

// Exibe o caminho da pasta atual
console.log("Pasta atual:", process.cwd());
