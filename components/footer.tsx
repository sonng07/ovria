"use client";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { YoutubeIcon } from "@/components/icons/youtube-icon";
import { Logo } from "@/components/logo";

type FooterLink = {
	title: string;
	href: string;
	icon?: ReactNode;
};

type FooterSection = {
	label: string;
	id?: string;
	links: FooterLink[];
};

const footerLinks: FooterSection[] = [
	{
		label: "Produit",
		links: [
			{ title: "Pour les travailleurs", href: "#ouvriers" },
			{ title: "Pour les entreprises", href: "#entreprises" },
			{ title: "Tarifs", href: "#tarifs" },
			{ title: "FAQ", href: "#faq" },
			{ title: "Télécharger l’app", href: "#telecharger" },
		],
	},
	{
		// Placeholder destinations — wire to real legal pages when they exist.
		// "Politique de confidentialité" links to its (mock) page.
		label: "Légal",
		links: [
			{ title: "Mentions légales", href: "#" },
			{ title: "CGU", href: "#" },
			{
				title: "Politique de confidentialité",
				href: "/politique-de-confidentialite",
			},
			{ title: "Cookies", href: "#" },
		],
	},
	{
		// Placeholder destinations — wire to a real contact channel (mailto/form)
		// when one exists. The Pricing CTA scrolls here via the id below.
		label: "Contact",
		id: "contact",
		links: [
			{ title: "Nous contacter", href: "/contact" },
			{ title: "Support", href: "/contact" },
		],
	},
	{
		// Placeholder destinations — replace with Ovria's real social profiles.
		label: "Réseaux",
		links: [
			{ title: "Facebook", href: "#", icon: <FacebookIcon /> },
			{ title: "Instagram", href: "#", icon: <InstagramIcon /> },
			{ title: "Youtube", href: "#", icon: <YoutubeIcon /> },
			{ title: "LinkedIn", href: "#", icon: <LinkedinIcon /> },
		],
	},
];

export function Footer() {
	return (
		<footer className="mx-auto flex w-full max-w-[var(--container)] flex-col items-center justify-center rounded-t-[2rem] border-x border-t border-hairline px-[clamp(20px,5vw,32px)] md:rounded-t-[2.5rem]">
			<div className="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8">
				<AnimatedContainer className="space-y-4">
					<Logo className="h-4" />
					<p className="mt-8 max-w-xs text-muted-foreground text-sm md:mt-0">
						Le BTP, en direct. Sans intermédiaire.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
							<nav
								aria-label={section.label}
								id={section.id}
								className="mb-10 scroll-mt-24 md:mb-0"
							>
								<h3 className="t-eyebrow text-muted-foreground">
									{section.label}
								</h3>
								<ul className="mt-4 space-y-2 t-body-sm text-muted-foreground">
									{section.links.map((link) => {
										const linkClassName =
											"inline-flex items-center duration-250 hover:text-foreground [&_svg]:me-1.5 [&_svg]:size-3.5";
										return (
											<li key={link.title}>
												{link.href.startsWith("/") ? (
													<Link className={linkClassName} href={link.href}>
														{link.icon}
														{link.title}
													</Link>
												) : (
													<a className={linkClassName} href={link.href}>
														{link.icon}
														{link.title}
													</a>
												)}
											</li>
										);
									})}
								</ul>
							</nav>
						</AnimatedContainer>
					))}
				</div>
			</div>

			<div className="h-px w-full bg-hairline" />
			<div className="flex w-full items-center justify-center py-4">
				<p className="text-muted-foreground text-sm">
					© {new Date().getFullYear()} OVRIA. Tous droits réservés.
				</p>
			</div>
		</footer>
	);
}

function AnimatedContainer({
	className,
	delay = 0.1,
	children,
}: {
	delay?: number;
	className?: string;
	children: ReactNode;
}) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
			transition={{ delay, duration: 0.8 }}
			viewport={{ once: true }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
		>
			{children}
		</motion.div>
	);
}
