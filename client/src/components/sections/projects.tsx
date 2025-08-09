import { ExternalLink } from "lucide-react";
import ParallaxSection from "@/components/ui/parallax-section";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const projects = [
	{
		title: "BLOCKCHAIN_VERIFY.SOL",
		description:
			"Ethereum-based achievement verification system. Smart contracts + React frontend.",
		tech: ["Next.js", "Solidity", "Web3"],
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		shadowClass: "shadow-lg",
		accentColor: "text-sky-blue",
		legal: "LEGAL COMPLIANCE VERIFIED",
	},
	{
		title: "NEURAL_FIT.AI",
		description:
			"WebAssembly-powered neural network predicts cultural fit based on viewer inputs. 99.7% accuracy in beta testing.",
		tech: ["Rust", "WASM", "TensorFlow.js"],
		image:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		shadowClass: "shadow-lg",
		accentColor: "text-minimal-secondary",
	},
	{
		title: "PWA_OFFLINE.APP",
		description:
			"Service worker architecture with IndexedDB sync. Works in airplane mode. Featured in Google's PWA showcase.",
		tech: ["Service Workers", "IndexedDB"],
		image:
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		shadowClass: "shadow-lg",
		accentColor: "text-sky-blue",
	},
	{
		title: "IMMERSIVE_3D.WEB",
		description:
			"WebGL particle systems with physics simulation. 120fps on mobile. Won Awwwards Site of the Day.",
		tech: ["Three.js", "GLSL", "Physics"],
		image:
			"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		shadowClass: "shadow-lg",
		accentColor: "text-minimal-secondary",
	},
	{
		title: "REALTIME_COLLAB.IO",
		description:
			"WebRTC + Socket.io architecture. Sub-100ms latency globally. Scales to 10k concurrent users.",
		tech: ["WebRTC", "Socket.io", "Redis"],
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		shadowClass: "shadow-lg",
		accentColor: "text-sky-blue",
	},
	{
		title: "EDGE_COMPUTE.NET",
		description:
			"Cloudflare Workers + D1 database. 50ms global response times. Deployed across 300+ edge locations.",
		tech: ["Workers", "D1", "Wrangler"],
		image:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
		shadowClass: "shadow-lg",
		accentColor: "text-minimal-secondary",
	},
];

function GlowWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="group/card relative rounded-lg transition-all duration-300 hover:ring-1 hover:ring-sky-blue/70 hover:shadow-[0_8px_40px_rgba(14,165,233,0.15)] h-full">
			{children}
		</div>
	);
}

export default function Projects() {
	return (
		<ParallaxSection id="projects" className="py-24 relative">
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="heading-section text-center mb-4">
					PROJECTS<span className="text-sky-blue">.</span>
				</h2>
				<p className="text-center text-xl opacity-80 mb-16 max-w-3xl mx-auto">
					Viajes heroicos through digital landscapes. Each project a peak
					experience in human-computer symbiosis.
				</p>

				{/* Projects Grid as semantic list */}
				<ul
					role="list"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
				>
					{projects.map((project, index) => (
						<li key={project.title} className="h-full">
							<GlowWrapper>
								<Card
									className={`group ${project.shadowClass} card-surface elevation-1 rounded-lg transition-all duration-300 overflow-hidden h-full flex flex-col`}
									data-testid={`project-card-${index}`}
								>
									<div className="relative shrink-0">
										<AspectRatio ratio={16 / 9}>
											<img
												src={project.image}
												alt={`${project.title} preview screenshot`}
												className="w-full h-full object-cover"
												loading="lazy"
												decoding="async"
											/>
										</AspectRatio>
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-minimal-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
										<div className="flex items-start justify-between gap-4">
											<h3
												className={`heading-card text-lg md:text-xl ${project.accentColor}`}
											>
												{project.title}
											</h3>
											{project.legal && (
												<Badge
													variant="glass"
													className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-wide"
												>
													{project.legal}
												</Badge>
											)}
										</div>
										<p
											className="text-sm text-minimal-white/90 mt-2 mb-4"
											style={{
												display: "-webkit-box",
												WebkitLineClamp: 3,
												WebkitBoxOrient: "vertical" as any,
												overflow: "hidden",
											}}
										>
											{project.description}
										</p>
										<div className="flex items-center justify-between mt-auto">
											<div className="flex flex-wrap gap-2">
												{project.tech.map((t) => (
													<Badge
														key={t}
														variant="glass"
														className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px]"
													>
														{t}
													</Badge>
												))}
											</div>
											<button
												className="text-minimal-white hover:text-sky-blue transition-colors"
												data-testid={`project-link-${index}`}
												aria-label={`Open ${project.title}`}
												type="button"
											>
												<ExternalLink className="w-5 h-5" />
											</button>
										</div>
									</CardContent>
								</Card>
							</GlowWrapper>
						</li>
					))}
				</ul>
			</div>
		</ParallaxSection>
	);
}
