import React from "react";

export default function Dashboard() {
  // Dados fictícios (mock)
  const vagas = [
    { id: 1, titulo: "Estágio em Front-end", empresa: "TechWave" },
    { id: 2, titulo: "Desenvolvedor Back-end Jr.", empresa: "NovaCode" },
    { id: 3, titulo: "Assistente de TI", empresa: "SoftPrime" },
  ];

  const estudantes = [
    { id: 1, nome: "Ana Oliveira", curso: "Sistemas de Informação" },
    { id: 2, nome: "Carlos Mendes", curso: "Engenharia da Computação" },
    { id: 3, nome: "Julia Santos", curso: "Análise e Desenvolvimento de Sistemas" },
  ];

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <p>
        Esta é uma área de demonstração do sistema SkillBridge.  
        Os dados abaixo são exemplos fictícios para simular como a plataforma funcionaria.
      </p>

   
      <h2 className="text-xl font-semibold mt-6 mb-2">Vagas Disponíveis</h2>
      <ul>
        {vagas.map((vaga) => (
          <li key={vaga.id}>
            {vaga.titulo} - <strong>{vaga.empresa}</strong>
          </li>
        ))}
      </ul>

  
      <h2 className="text-xl font-semibold mt-6 mb-2">Estudantes Cadastrados</h2>
      <ul>
        {estudantes.map((est) => (
          <li key={est.id}>
            {est.nome} — {est.curso}
          </li>
        ))}
      </ul>


      <h2 className="text-xl font-semibold mt-6 mb-2">Estatísticas Gerais</h2>
      <ul>
        <li>Estudantes ativos: 182</li>
        <li>Empresas parceiras: 24</li>
        <li>Vagas cadastradas: 57</li>
        <li>Matchs realizados: 312</li>
      </ul>
    </section>
  );
}
