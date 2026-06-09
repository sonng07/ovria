"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/site/cta";
import { MobileNav } from "@/components/mobile-nav";

export const navLinks = [
	{
		label: "Contact",
		href: "/contact",
	},
	{
		label: "Tarifs",
		href: "/#tarifs",
	},
	{
		label: "FAQ",
		href: "/#faq",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 mx-auto w-full max-w-4xl border-b border-transparent transition-all ease-out md:top-2 md:rounded-pill md:border md:border-transparent",
				{
					"border-hairline bg-surface-strong backdrop-blur-md md:max-w-3xl md:border-hairline md:shadow-[0_18px_40px_-28px_rgba(26,26,23,0.45)]":
						scrolled,
				}
			)}
		>
			<nav className="flex w-full items-center justify-between p-2 md:transition-all md:ease-out">
				<Link
					className="flex items-center rounded-pill pl-3"
					href="/"
					aria-label="OVRIA — accueil"
				>
					<Image
						src="/logo.png"
						alt=""
						width={758}
						height={132}
						priority
						className="h-3.5 w-auto"
					/>
				</Link>
				<div className="hidden items-center gap-1 md:flex">
					<div>
						{navLinks.map((link) => (
							<Button
								key={link.label}
								size="sm"
								variant="ghost"
								className="text-base text-ink-2 hover:text-ink"
								render={<a href={link.href} />}
								nativeButton={false}
							>
								{link.label}
							</Button>
						))}
					</div>
					<CtaLink
						href="#telecharger"
						className="ml-2 px-5 pt-1 pb-1.5 text-base"
					>
						Télécharger l’app
					</CtaLink>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
