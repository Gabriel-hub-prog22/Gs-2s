import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "Front_gs\src\components\ThemeToggle.tsx";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">SkillBridge</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/">Front_gs\src\pages\Home.tsx</Link>
        </li>
        <li>
          <Link to="/sobre">Front_gs\src\pages\Sobre.tsx</Link>
        </li>
        <li>
          <Link to="/integrantes">Front_gs\src\pages\Integrantes.tsx</Link>
        </li>
        <li>
          <Link to="/faq">Front_gs\src\pages\FAQ.tsx</Link>
        </li>
        <li>
          <Link to="/dashboard">Front_gs\src\pages\Dashboard.tsx</Link>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  );
}
