import { Progress } from "@/components/ui/progress";

const skillCategories = [
	{
		title: "FRONTEND.MASTERY",
		color: "text-sky-blue",
		skills: [
			{ name: "React 19", level: 98 },
			{ name: "Next.js 14", level: 96 },
			{ name: "TypeScript", level: 94 },
			{ name: "Three.js", level: 89 },
		],
	},
	{
		title: "BACKEND.DOMINANCE",
		color: "text-minimal-secondary",
		skills: [
			{ name: "Node.js", level: 97 },
			{ name: "Python", level: 92 },
			{ name: "Rust + WASM", level: 87 },
			{ name: "GraphQL", level: 91 },
		],
	},
	{
		title: "DEVOPS.SUPREMACY",
		color: "text-sky-blue",
		skills: [
			{ name: "AWS", level: 93 },
			{ name: "Docker", level: 95 },
			{ name: "Kubernetes", level: 88 },
			{ name: "Terraform", level: 90 },
		],
	},
];

export default function Skills() {
	return (
		<section id="skills" className="py-24 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="heading-section text-center mb-4">
					SKILLS<span className="text-sky-blue">.</span>MATRIX
				</h2>
				<p className="text-center text-xl opacity-80 mb-16">
					Quantified proficiency through WebAssembly-powered calculations
				</p>

				{/* Skills Introduction */}
				<div className="mb-12 sm:mb-16">
					<div className="text-center">
						<div className="inline-block bg-sky-blue/10 rounded-full px-6 py-3 sm:px-8 sm:py-4 card-surface elevation-1">
							<span className="font-mono text-sky-blue font-bold text-base sm:text-lg">
								NEURAL.COMPUTATION.ACTIVE
							</span>
						</div>
					</div>
				</div>

				{/* Skills Grid as semantic list */}
				<ul
					role="list"
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
				>
					{skillCategories.map((category, categoryIndex) => (
						<li key={category.title}>
							<div
								className="card-surface elevation-1 p-5 sm:p-6 hover:bg-minimal-white/10 transition-all duration-300"
								data-testid={`skill-category-${categoryIndex}`}
							>
								<h3 className={`heading-card mb-6 ${category.color}`}>
									{category.title}
								</h3>
								<ul role="list" className="space-y-4">
									{category.skills.map((skill, skillIndex) => (
										<li
											key={skill.name}
											className="skill-item"
											data-testid={`skill-${categoryIndex}-${skillIndex}`}
										>
											<div className="flex justify-between items-center mb-2">
												<span className="font-mono text-minimal-white text-sm sm:text-base">
													{skill.name}
												</span>
												<span
													className={`${category.color} font-mono text-xs sm:text-sm`}
												>
													{skill.level}%
												</span>
											</div>
											<Progress
												value={skill.level}
												className="h-2 bg-minimal-gray-1"
											/>
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ul>

				{/* WebAssembly Performance Note */}
				<div className="mt-10 sm:mt-12 text-center">
					<p className="font-mono text-xs sm:text-sm opacity-70">
						* Proficiency calculated via Rust/WASM module analyzing GitHub
						metrics + peer validation
					</p>
				</div>
			</div>
		</section>
	);
}
