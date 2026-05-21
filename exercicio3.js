const fs = require("fs");

let catalogoFilmes = [
{ id: 1, titulo: "Matrix", ano: 1999, diretor: "Lana Wachowski", genero: "Ficção", nota: 4.8 },
{ id: 2, titulo: "Titanic", ano: 1997, diretor: "James Cameron", genero: "Romance", nota: 4.5 },
{ id: 3, titulo: "Toy Story", ano: 1995, diretor: "John Lasseter", genero: "Animação", nota: 4.7 },
{ id: 4, titulo: "O Poderoso Chefão", ano: 1972, diretor: "Francis Ford Coppola", genero: "Drama", nota: 4.9 },
{ id: 5, titulo: "Star Wars", ano: 1977, diretor: "George Lucas", genero: "Ficção", nota: 4.6 }
];

// 1. Converter para JSON string com indentação
const jsonString = JSON.stringify(catalogoFilmes, null, 2);
console.log("JSON formatado:\n", jsonString);
console.log("Tipo da variável:", typeof jsonString);

// 2. Criar string JSON simulando dados recebidos de API
const novosFilmesJSON = `
[
{ "id": 6, "titulo": "Inception", "ano": 2010, "diretor": "Christopher Nolan", "genero": "Ficção", "nota": 4.7 },
{ "id": 7, "titulo": "Gladiador", "ano": 2000, "diretor": "Ridley Scott", "genero": "Drama", "nota": 4.6 },
{ "id": 8, "titulo": "Frozen", "ano": 2013, "diretor": "Chris Buck", "genero": "Animação", "nota": 4.4 }
]`;

// Converter de volta para objeto JS
const novosFilmes = JSON.parse(novosFilmesJSON);

// Adicionar ao catálogo original
catalogoFilmes = catalogoFilmes.concat(novosFilmes);
console.log("Catálogo atualizado:", catalogoFilmes);

// 3. Função buscarFilmePorId
function buscarFilmePorId(id) {
return catalogoFilmes.find(filme => filme.id === id) || null;
}
console.log("Buscar ID 3:", buscarFilmePorId(3));
console.log("Buscar ID 99:", buscarFilmePorId(99));

// 4. Função buscarPorGenero
function buscarPorGenero(genero) {
return catalogoFilmes.filter(filme => filme.genero === genero);
}
console.log("Filmes de Ficção:", buscarPorGenero("Ficção"));

// 5. Salvar em arquivo filmes.json
fs.writeFileSync("filmes.json", JSON.stringify(catalogoFilmes, null, 2), "utf-8");

// Ler novamente o arquivo
const dadosLidos = JSON.parse(fs.readFileSync("filmes.json", "utf-8"));
console.log("Dados lidos do arquivo:", dadosLidos);

// 6. Criar fichas formatadas
function gerarFichas(lista) {
return lista.map(filme =>
`${filme.titulo} (${filme.ano})
Dirigido por ${filme.diretor}\nGênero: ${filme.genero} | Nota: ${filme.nota}/5.0`
);
}
console.log("Fichas dos filmes:");
gerarFichas(catalogoFilmes).forEach(ficha => console.log(ficha));