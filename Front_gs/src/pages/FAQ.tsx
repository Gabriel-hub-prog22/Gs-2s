import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      pergunta: "O que é a SkillBridge?",
      resposta:
        "A SkillBridge é uma plataforma inteligente que conecta estudantes técnicos a oportunidades reais no mercado, oferecendo microcontratos, experiências práticas e estágios de curta duração. Tudo isso com tecnologia avançada de matching entre talentos e empresas.",
    },
    {
      pergunta: "Como funciona o match entre aluno e empresa?",
      resposta:
        "Nosso algoritmo avalia habilidades, portfólio, experiência, disponibilidade e requisitos das empresas. Assim, cada aluno recebe vagas compatíveis e cada empresa recebe candidatos altamente qualificados.",
    },
    {
      pergunta: "O projeto é focado em quais objetivos?",
      resposta:
        "Nosso foco é ampliar oportunidades para estudantes técnicos, facilitar contratações para pequenas empresas e fortalecer a empregabilidade com experiência prática real — promovendo impacto social e desenvolvimento profissional.",
    },
    {
      pergunta: "As empresas pagam pelo serviço?",
      resposta:
        "Sim. Empresas podem usar a plataforma gratuitamente com recursos básicos ou optar pelo Plano Premium, que oferece maior visibilidade, triagem avançada, relatórios e prioridade no sistema de matching.",
    },
    {
      pergunta: "Os estudantes recebem por cada microcontrato?",
      resposta:
        "Sim! Todos os microcontratos são remunerados. O aluno ganha experiência prática, renda extra e fortalece seu portfólio com entregas reais para empresas.",
    },
  ];

  const [ativo, setAtivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <div className="app-container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">FAQ</h1>
        <p className="text-gray-400 dark:text-gray-300 text-lg">
          Perguntas frequentes sobre a experiência na SkillBridge.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 dark:bg-gray-800 border border-white/10 dark:border-gray-700 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between cursor-pointer"
            >
              <span className="text-lg font-semibold">{faq.pergunta}</span>

              <motion.span
                animate={{ rotate: ativo === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300"
              >
                v
              </motion.span>
            </button>

            <AnimatePresence>
              {ativo === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  {faq.resposta}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
