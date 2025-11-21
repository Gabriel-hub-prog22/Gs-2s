import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div className="app-container">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sobre o SkillBridge
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Uma plataforma criada para aproximar estudantes técnicos e microempresas,
        transformando habilidades reais em oportunidades reais — de forma simples,
        rápida e confiável.
      </motion.p>

      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border dark:border-gray-700 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">A História</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          A SkillBridge nasceu a partir de uma realidade comum nas escolas técnicas:
          alunos com boa formação prática, mas sem acesso a oportunidades reais para
          aplicar o que sabem. Ao mesmo tempo, microempresas locais enfrentam um
          desafio oposto — precisam de ajuda técnica, mas não têm tempo ou estrutura
          para lidar com processos longos, entrevistas e triagens tradicionais.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Percebemos que esses dois mundos não se encontram por falta de
          <span className="font-semibold"> conexão</span>, não por falta de talento.
          Foi assim que surgiu a ideia de uma ponte — uma forma simples, rápida e
          transparente de unir demanda e habilidade técnica.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          O SkillBridge é essa ponte. Um ambiente onde empresas conseguem apoio real
          sem burocracia e estudantes ganham prática, portfólio e renda enquanto
          aprendem.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">O Problema</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Tempo e burocracia</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Processos de contratação longos afastam microempresas que só precisam
              de ajuda prática para demandas rápidas.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Falta de visibilidade</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Alunos técnicos não conseguem mostrar suas competências reais antes
              mesmo de entrarem no mercado.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Baixa confiança</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Empresas não sabem avaliar habilidades com precisão e têm receio de
              contratar sem referências.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Nossa Solução</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Match inteligente</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Cruzamos competências, disponibilidade e necessidades da empresa para
              gerar conexões rápidas e precisas.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Microcontratos</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Trabalhos curtos e práticos para dar experiência real ao aluno e
              resultado imediato para a empresa.
            </p>
          </div>

          <div className="card-panel">
            <h3 className="font-semibold text-lg mb-2">Avaliação transparente</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Após cada contrato, ambos os lados deixam feedback para melhorar a
              confiabilidade da plataforma.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border dark:border-gray-700 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Impacto Social</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          O SkillBridge contribui diretamente com metas globais da ONU:
        </p>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li><strong>ODS 4:</strong> Educação de qualidade</li>
          <li><strong>ODS 8:</strong> Trabalho decente e crescimento econômico</li>
          <li><strong>ODS 10:</strong> Redução das desigualdades</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-32"
      >
        <h2 className="text-2xl font-bold mb-6">Como Funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">1. Cadastro</h3>
            <p className="text-gray-600 dark:text-gray-300">Aluno e empresa criam perfil.</p>
          </div>

          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">2. Match</h3>
            <p className="text-gray-600 dark:text-gray-300">O sistema encontra a melhor combinação.</p>
          </div>

          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">3. Microcontrato</h3>
            <p className="text-gray-600 dark:text-gray-300">Trabalho prático e curto.</p>
          </div>

          <div className="card-panel text-center">
            <h3 className="font-semibold mb-2">4. Avaliação</h3>
            <p className="text-gray-600 dark:text-gray-300">Ambos avaliam e constroem reputação.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
