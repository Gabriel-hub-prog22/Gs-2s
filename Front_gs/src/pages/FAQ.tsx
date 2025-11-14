import React from "react";

export default function FAQ() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Perguntas Frequentes (FAQ)</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">O que é a SkillBridge?</h2>
        <p>
          A SkillBridge é uma plataforma que conecta estudantes, empresas e instituições 
          acadêmicas, facilitando o acesso a vagas, projetos e desenvolvimento profissional.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">A plataforma é gratuita?</h2>
        <p>
          Sim, o acesso básico ao protótipo é totalmente gratuito para estudantes.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">As empresas podem publicar vagas?</h2>
        <p>
          Sim, empresas podem postar vagas e projetos para encontrar estudantes qualificados.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Preciso criar uma conta para acessar o Dashboard?</h2>
        <p>
          No protótipo atual, o Dashboard é demonstrativo e não possui autenticação real.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Os dados exibidos são reais?</h2>
        <p>
          Não. Os conteúdos exibidos no Dashboard são exemplos fictícios para fins acadêmicos.
        </p>
      </div>
    </section>
  );
}
