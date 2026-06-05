import type { LucideIcon } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";

type ContactPoint = {
	icon: LucideIcon;
	title: string;
	value: string;
};

// MOCK — placeholder coordinates until OVRIA provides real contact details.
const POINTS: ContactPoint[] = [
	{
		icon: Phone,
		title: "Appelez-nous",
		value: "+33 1 23 45 67 89",
	},
	{
		icon: Mail,
		title: "Envoyez un email",
		value: "contact@ovria.fr",
	},
	{
		icon: MapPin,
		title: "Notre bureau",
		value: "12 rue du Bâtiment, 75000 Paris",
	},
];

export function Contact() {
	return (
		<div className="mx-auto max-w-5xl">
			<h2 className="mx-auto max-w-2xl text-center font-medium text-lg text-ink md:text-2xl">
				Des questions ? Contactez-nous directement
			</h2>

			{/* Borderless divider grid (matches the Commission section). divide-x
			    draws one hairline at every column boundary — symmetric by
			    construction — instead of per-card pseudo-elements, which rendered
			    unevenly (and break under browser auto-translate). */}
			<div className="mx-auto mt-12 grid grid-cols-1 gap-4 py-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-foreground/15">
				{POINTS.map((point) => (
					<div
						key={point.title}
						className="flex flex-col items-center justify-center px-4 py-2 text-center [&_svg]:size-6 [&_svg]:text-muted-foreground"
					>
						<point.icon strokeWidth={1.75} />
						<h3 className="mt-4 text-xs font-medium text-ink md:text-sm lg:text-base">
							{point.title}
						</h3>
						<p className="mt-1 text-[10px] text-ink-2 md:text-xs">
							{point.value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
