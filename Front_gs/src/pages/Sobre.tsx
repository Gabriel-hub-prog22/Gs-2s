import React from "react";

export default function Sobre() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre a SkillBridge</h1>

      <p className="text-slate-700 mb-4">
        A SkillBridge é uma plataforma criada para aproximar estudantes, empresas
        e instituições acadêmicas, facilitando o acesso a vagas de estágio,
        projetos práticos e ferramentas que auxiliam no desenvolvimento
        profissional.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">O Problema</h2>
      <p className="text-slate-700 mb-4">
        Muitos estudantes têm dificuldade em encontrar oportunidades que estejam
        alinhadas ao seu perfil e às suas habilidades. Ao mesmo tempo, empresas
        enfrentam desafios para alcançar novos talentos e avaliar suas
        competências de forma clara.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">A Solução</h2>
      <p className="text-slate-700 mb-4">
        A SkillBridge centraliza o processo, oferecendo ferramentas para que
        estudantes organizem sua jornada acadêmica, desenvolvam habilidades e
        encontrem vagas com facilidade. Para empresas, a plataforma permite a
        publicação de oportunidades e a visualização do perfil técnico dos
        estudantes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Missão</h2>
      <p className="text-slate-700 mb-4">
        Criar oportunidades reais para estudantes e facilitar a conexão com o
        mercado de trabalho, impulsionando crescimento profissional e inovação.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Visão</h2>
      <p className="text-slate-700 mb-4">
        Tornar-se uma plataforma essencial para o desenvolvimento de estudantes
        e o recrutamento de novos talentos no Brasil.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Valores</h2>
      <ul className="list-disc list-inside text-slate-700 space-y-1">
        <li>Transparência e comunicação clara</li>
        <li>Eficiência e organização</li>
        <li>Oportunidade e aprendizado contínuo</li>
        <li>Inclusão e acessibilidade tecnológica</li>
      </ul>
    </section>
  );
}
