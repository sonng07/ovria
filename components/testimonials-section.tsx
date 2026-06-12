import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { Section } from "@/components/site/section";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

type Testimonial = {
	quote: string;
	image: string;
	name: string;
	role: string;
	company?: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			"J’ai trouvé un chantier près de chez moi en deux jours. Plus besoin de passer par une agence d’intérim.",
		image: "https://i.pravatar.cc/200?img=12",
		name: "Karim Benali",
		role: "Maçon",
		company: "Lyon",
	},
	{
		quote:
			"Le contact est direct avec les entreprises. On parle vrai, on s’entend sur le tarif, et c’est parti.",
		image: "https://i.pravatar.cc/200?img=33",
		name: "Thomas Mercier",
		role: "Électricien",
		company: "Nantes",
	},

	{
		quote:
			"Profil gratuit, aucune commission prélevée sur mes journées. Pour un artisan, ça change tout.",
		image: "https://i.pravatar.cc/200?img=15",
		name: "Antoine Lefèvre",
		role: "Plombier-chauffagiste",
		company: "Bordeaux",
	},
	{
		quote:
			"On recrute nos renforts de chantier en quelques heures quand un dossier prend du retard. Très réactif.",
		image: "https://i.pravatar.cc/200?img=52",
		name: "Sophie Garnier",
		role: "Gérante",
		company: "Garnier BTP",
	},
	{
		quote:
			"Fini les frais d’agence à rallonge. On paie le bon prix, le travailleur touche son dû, tout le monde y gagne.",
		image: "https://i.pravatar.cc/200?img=60",
		name: "Marc Dubois",
		role: "Conducteur de travaux",
		company: "Dubois Construction",
	},
	{
		quote:
			"Je vois les chantiers disponibles autour de moi et je postule en un clic. Simple et efficace.",
		image: "https://i.pravatar.cc/200?img=8",
		name: "Youssef Amrani",
		role: "Carreleur",
		company: "Marseille",
	},
	{
		quote:
			"Les profils sont clairs : qualifications, disponibilités, expérience. On sait tout de suite à qui on a affaire.",
		image: "https://i.pravatar.cc/200?img=47",
		name: "Camille Roussel",
		role: "Responsable de chantier",
		company: "Roussel & Fils",
	},
	{
		quote:
			"Grâce à OVRIA, j’enchaîne les missions sans temps mort entre deux chantiers. Mon planning est plein.",
		image: "https://i.pravatar.cc/200?img=68",
		name: "Julien Faure",
		role: "Peintre en bâtiment",
		company: "Toulouse",
	},
	{
		quote:
			"Une vraie alternative à l’intérim classique. Direct, transparent, et sans intermédiaire qui se sert au passage.",
		image: "https://i.pravatar.cc/200?img=11",
		name: "David Lemoine",
		role: "Chef d’équipe",
		company: "Lille",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
	return (
		<Section>
			<Container>
				<Reveal className="mx-auto max-w-2xl text-center">
					<Eyebrow>Ils utilisent OVRIA</Eyebrow>
					<h2 className="t-display-l mt-4 text-ink">Le BTP, en plus direct.</h2>
					<p className="t-caption mt-4 text-muted-foreground">
						Découvrez ce qu&apos;en disent les utilisateurs d&apos;OVRIA.
					</p>
				</Reveal>

				<div
					className={cn(
						"mt-12 flex max-h-160 justify-center gap-6 overflow-hidden",
						"mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
					)}
				>
					<InfiniteSlider direction="vertical" speed={30} speedOnHover={15}>
						{firstColumn.map((testimonial) => (
							<TestimonialsCard
								key={testimonial.name}
								testimonial={testimonial}
							/>
						))}
					</InfiniteSlider>
					<InfiniteSlider
						className="hidden md:block"
						direction="vertical"
						speed={50}
						speedOnHover={25}
					>
						{secondColumn.map((testimonial) => (
							<TestimonialsCard
								key={testimonial.name}
								testimonial={testimonial}
							/>
						))}
					</InfiniteSlider>
					<InfiniteSlider
						className="hidden lg:block"
						direction="vertical"
						speed={35}
						speedOnHover={17}
					>
						{thirdColumn.map((testimonial) => (
							<TestimonialsCard
								key={testimonial.name}
								testimonial={testimonial}
							/>
						))}
					</InfiniteSlider>
				</div>
			</Container>
		</Section>
	);
}

function TestimonialsCard({
	testimonial,
	className,
	...props
}: React.ComponentProps<"figure"> & {
	testimonial: Testimonial;
}) {
	const { quote, image, name, role, company } = testimonial;
	return (
		<figure
			className={cn("card-tide w-full max-w-xs p-6", className)}
			{...props}
		>
			<blockquote className="t-body-sm font-normal text-ink">
				« {quote} »
			</blockquote>
			<figcaption className="mt-6 flex items-center gap-3">
				<Avatar className="size-10 flex-none rounded-full border border-hairline">
					<AvatarImage alt={`Photo de ${name}`} src={image} />
					<AvatarFallback>{name.charAt(0)}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<cite className="t-body-sm font-medium not-italic text-ink">
						{name}
					</cite>
					<span className="t-body-sm text-muted-foreground">
						{role}
						{company && `, ${company}`}
					</span>
				</div>
			</figcaption>
		</figure>
	);
}
