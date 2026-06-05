import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon } from "lucide-react";

// MOCK — placeholder coordinates until OVRIA provides real contact details.
const contactInfo = [
	{
		icon: <MailIcon />,
		label: "Email",
		value: "contact@ovria.fr",
	},
	{
		icon: <PhoneIcon />,
		label: "Téléphone",
		value: "+33 1 23 45 67 89",
	},
];

export function ContactSection() {
	return (
		<div className="relative mx-auto grid h-full w-full max-w-6xl rounded-2xl border md:grid-cols-[1fr_0.70fr]">
			<div className="col-span-1 flex flex-col space-y-4 p-10 lg:p-14">
				<h2 className="font-medium text-2xl tracking-wide md:text-3xl">
					Écrivez-nous
				</h2>
				<p className="max-w-md text-muted-foreground text-sm leading-relaxed md:text-base">
					Une question sur OVRIA, un besoin d’aide ou une demande de
					partenariat ? Remplissez le formulaire ci-contre.
				</p>
				<p className="max-w-md text-muted-foreground text-xs leading-relaxed md:text-sm">
					Nous faisons de notre mieux pour répondre sous 1 jour ouvré.
				</p>
				<div className="grid gap-4">
					{contactInfo?.map((info) => (
						<ContactInfo key={info.label} {...info} />
					))}
				</div>
			</div>
			<div className="col-span-1 flex items-center border-t p-10 md:border-t-0 md:border-l lg:p-14">
				<ContactForm />
			</div>
		</div>
	);
}

function ContactForm() {
	return (
		// MOCK — static form; wire to a real handler/endpoint when one exists.
		<form className="w-full">
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="full-name">Nom complet</FieldLabel>
					<Input autoComplete="off" id="full-name" placeholder="Jean Dupont" />
				</Field>
				<Field>
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						autoComplete="off"
						id="email"
						placeholder="jean.dupont@example.com"
						type="email"
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="phone">Téléphone</FieldLabel>
					<Input
						autoComplete="off"
						id="phone"
						placeholder="+33 6 12 34 56 78"
						type="tel"
					/>
				</Field>
				<Field>
					<FieldLabel htmlFor="message">Message</FieldLabel>
					<Textarea
						autoComplete="off"
						id="message"
						placeholder="Votre message"
					/>
				</Field>
			</FieldGroup>
			<Button className="mt-8 w-full" type="button">
				Envoyer
			</Button>
		</form>
	);
}

type ContactInfoProps = React.ComponentProps<"div"> & {
	icon: React.ReactNode;
	label: string;
	value: string;
};

function ContactInfo({
	icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn("flex items-center gap-3 py-3", className)} {...props}>
			<div className="rounded-lg border bg-card p-3 shadow-xs [&_svg]:size-5">
				{icon}
			</div>
			<div>
				<p className="font-medium">{label}</p>
				<p className="text-muted-foreground text-xs">{value}</p>
			</div>
		</div>
	);
}
