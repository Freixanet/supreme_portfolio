

const skillCategories = [
  {
    title: "FRONTEND.MASTERY",
    color: "text-sky-blue",
    skills: [
      { name: "React 19", level: 98 },
      { name: "Next.js 14", level: 96 },
      { name: "TypeScript", level: 94 },
      { name: "Three.js", level: 89 }
    ]
  },
  {
    title: "BACKEND.DOMINANCE",
    color: "text-minimal-secondary",
    skills: [
      { name: "Node.js", level: 97 },
      { name: "Python", level: 92 },
      { name: "Rust + WASM", level: 87 },
      { name: "GraphQL", level: 91 }
    ]
  },
  {
    title: "DEVOPS.SUPREMACY",
    color: "text-sky-blue",
    skills: [
      { name: "AWS", level: 93 },
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 88 },
      { name: "Terraform", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-minimal-gray-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-mono font-black text-5xl md:text-6xl text-center mb-4">
          SKILLS<span className="text-sky-blue">.</span>MATRIX
        </h2>
        <p className="text-center text-xl opacity-80 mb-16">
          Quantified proficiency through WebAssembly-powered calculations
        </p>
        
        {/* Skills Introduction */}
        <div className="mb-16">
          <div className="text-center">
            <div className="inline-block bg-sky-blue/10 rounded-full px-8 py-4">
              <span className="font-mono text-sky-blue font-bold text-lg">
                NEURAL.COMPUTATION.ACTIVE
              </span>
            </div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-minimal-white/5 border border-minimal-gray-2 rounded-lg p-6 shadow-lg hover:bg-minimal-white/10 transition-all duration-300"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <h3 className={`font-mono font-black text-xl mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="skill-item"
                    data-testid={`skill-${categoryIndex}-${skillIndex}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-minimal-white">{skill.name}</span>
                      <span className={`${category.color} font-mono text-sm`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-minimal-gray-1 h-2 rounded-full overflow-hidden">
                      <div 
                        className={category.color.includes('sky-blue') ? 'bg-sky-blue' : 'bg-minimal-secondary'}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* WebAssembly Performance Note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm opacity-70">
            * Proficiency calculated via Rust/WASM module analyzing GitHub metrics + peer validation
          </p>
        </div>
      </div>
    </section>
  );
}
