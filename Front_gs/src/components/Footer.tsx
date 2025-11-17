import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 border-t mt-10 text-center">
      <p>© {new Date().getFullYear()} SkillBridge — Todos os direitos reservados.</p>
      <p>Projeto acadêmico desenvolvido para fins educacionais.</p>
    </footer>
  );
}
