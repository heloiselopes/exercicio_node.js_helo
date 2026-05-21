const alunos = [
    { nome: "Ana Silva", nota: 8.5, idade: 16, turma: "3A", faltas: 2 },
    { nome: "João Santos", nota: 6.0, idade: 17, turma: "3B", faltas: 8 },
    { nome: "Maria Oliveira", nota: 9.0, idade: 16, turma: "3A", faltas: 0 },
    { nome: "Pedro Costa", nota: 4.5, idade: 17, turma: "3B", faltas: 12 },
    { nome: "Julia Lima", nota: 7.5, idade: 16, turma: "3A", faltas: 3 },
    { nome: "Carlos Mendes", nota: 5.5, idade: 17, turma: "3B", faltas: 7 },
    { nome: "Beatriz Rocha", nota: 8.0, idade: 16, turma: "3A", faltas: 1 },
    { nome: "Lucas Ferreira", nota: 6.5, idade: 17, turma: "3B", faltas: 5 }
    ];
    
    // 1. Função que retorna alunos aprovados (nota >= 6.0)
    function alunosAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6.0);
    }
    console.log("Alunos Aprovados:", alunosAprovados(alunos));
    
    // 2. Função que retorna apenas os nomes dos alunos
    function nomesAlunos(lista) {
    return lista.map(aluno => aluno.nome);
    }
    console.log("Lista de Nomes:");
    nomesAlunos(alunos).forEach(nome => console.log(nome));
    
    // 3. Boletim formatado
    function boletimCompleto(lista) {
    return lista.map(aluno => {
    const status = aluno.nota >= 6.0 ? "Aprovado" : "Reprovado";
    return `${aluno.nome}
    Nota: ${aluno.nota}
    Status: ${status}`;
    });
    }
    console.log("Boletim Completo:");
    boletimCompleto(alunos).forEach(linha => console.log(linha));
    // 4. Média geral das notas
    function mediaNotas(lista) {
    const soma = lista.reduce((acc, aluno) => acc + aluno.nota, 0);
    return (soma / lista.length).toFixed(2);
    }
    console.log("Média Geral da Turma:", mediaNotas(alunos));
    
    // 5. Agrupar alunos por turma
    function agruparPorTurma(lista) {
    return lista.reduce((acc, aluno) => {
    if (!acc[aluno.turma]) {
    acc[aluno.turma] = [];
    }
    acc[aluno.turma].push(aluno.nome);
    return acc;
    }, {});
    }
    console.log("Alunos agrupados por turma:", agruparPorTurma(alunos));
    
    // 6. Alunos com mais de 6 faltas
    function alunosEmRisco(lista) {
    return lista.filter(aluno => aluno.faltas > 6);
    }
    console.log("Alunos em risco de reprovação por falta:");
    alunosEmRisco(alunos).forEach(aluno => console.log(aluno.nome));
    
    // 7. Top 3 melhores alunos da turma 3A
    function top3Turma3A(lista) {
    return lista
    .filter(aluno => aluno.turma === "3A")
    .sort((a) => a.nota)
    .slice(0, 3)
    .map(aluno => `${aluno.nome}
    Nota: ${aluno.nota}`);
    }
    console.log("Top 3 alunos da turma 3A:");
    top3Turma3A(alunos).forEach(aluno => console.log(aluno));