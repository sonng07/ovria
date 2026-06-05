import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/site/cta";
import { Portal, PortalBackdrop } from "@/components/portal";
import { navLinks } from "@/components/header";
import { XIcon, MenuIcon } from "lucide-react";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open && (
				<Portal className="top-12" id="mobile-menu">
					<PortalBackdrop />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<div className="grid gap-y-1">
							{navLinks.map((link) => (
								<Button
									className="justify-start text-base text-ink-2 hover:text-ink"
									key={link.label}
									size="lg"
									variant="ghost"
									render={<a href={link.href} />}
									nativeButton={false}
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Button>
							))}
						</div>
						<div className="mt-12 flex flex-col gap-2">
							<CtaLink
								href="#telecharger"
								className="w-full"
								onClick={() => setOpen(false)}
							>
								Télécharger l’app
							</CtaLink>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}
