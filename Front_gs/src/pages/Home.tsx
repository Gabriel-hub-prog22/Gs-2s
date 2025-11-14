import React from "react";

const Home: React.FC = () => {
	return (
		<main aria-labelledby="home-title">
			<header>
				<h1 id="home-title">Conectando Estudantes a Oportunidades Reais</h1>
				<p>
					Plataforma que auxilia alunos e empresas a encontrarem estágios, projetos, talentos e soluções.
				</p>
				<p>
					<a href="/dashboard" aria-label="Acessar Dashboard">
						<button type="button">Acessar Dashboard</button>
					</a>
				</p>
			</header>

			<section aria-labelledby="pilares-title">
				<h2 id="pilares-title">3 pilares principais</h2>

				<article>
					<h3>Para estudantes</h3>
					<p>Organização, portfólio, vagas.</p>
				</article>

				<article>
					<h3>Para empresas</h3>
					<p>Encontrar talentos, postar oportunidades.</p>
				</article>

				<article>
					<h3>Para instituições</h3>
					<p>Acompanhar o progresso dos alunos.</p>
				</article>
			</section>

			<section aria-label="Equipe e parceria">
				<h2>Equipe / Parceria</h2>
				{}
				<svg
					width="64"
					height="64"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					aria-hidden="false"
				>
					<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="#000" />
					<path d="M4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4z" fill="#000" />
				</svg>
			</section>
		</main>
	);
};

export default Home;