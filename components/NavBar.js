"use client";

import { useRouter } from "next/navigation"; // Correct import
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
	const router = useRouter(); // Initialize the router
	const [open, setOpen] = useState(false);

	// Toggle the drawer state
	const toggleDrawer = () => {
		setOpen(!open);
	};

	// Handle navigation and close the drawer
	const handleNavigation = (path) => {
		setOpen(false); // Close the drawer
		router.push(path); // Navigate to the path
	};

	return (
		<nav className={styles.navbar}>
			{/* Logo */}
			<div className={styles.logo}>
				<a onClick={() => handleNavigation("/")} style={{ cursor: "pointer" }}>
					<img
						src="../logoBlack.png"
						alt="FNDS Labs Logo"
						className={styles.logoImage}
					/>
				</a>
			</div>

			{/* Desktop Menu */}
			<ul className={styles.navLinks}>
				{[
					{ name: "Home", path: "/" },
					{ name: "About", path: "/about" },
					{ name: "Contact", path: "/contact" },
					{ name: "Portfolio", path: "/#portfolio" },
					{ name: "Testimonials", path: "/#reviews" },
					{ name: "Pricing", path: "/pricing" },
				].map((item) => (
					<li key={item.name}>
						<a
							onClick={() => handleNavigation(item.path)}
							aria-label={item.name}
							style={{ cursor: "pointer" }}
						>
							{item.name}
						</a>
					</li>
				))}
			</ul>
			{/* Buttons */}
			<div className={styles.rightButtons}>
				<Button
					target="_blank"
					href="https://calendly.com/fndslabs-15min-call/15min"
					variant="outlined"
					className={styles.bookButton}
					aria-label="Book a Call"
				>
					Book a Call
				</Button>
				<Button
					href="/pricing"
					variant="contained"
					className={styles.ctaButton}
					aria-label="See Plans"
				>
					See Plans
				</Button>
			</div>
			{/* Mobile Menu Icon */}
			<IconButton className={styles.menuIcon} onClick={toggleDrawer}>
				<MenuIcon />
			</IconButton>

			{/* Mobile Drawer */}
			<Drawer anchor="left" open={open} onClose={toggleDrawer}>
				<div className={styles.drawerMenu}>
					<ul>
						{[
							{ name: "Home", path: "/" },
							{ name: "About", path: "/about" },
							{ name: "Contact", path: "/contact" },
							{ name: "Portfolio", path: "/#portfolio" },
							{ name: "Testimonials", path: "/#reviews" },
							{ name: "Pricing", path: "/pricing" },
						].map((item) => (
							<li key={item.name}>
								<a
									onClick={() => handleNavigation(item.path)}
									aria-label={item.name}
									style={{ cursor: "pointer" }}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</Drawer>
		</nav>
	);
}
