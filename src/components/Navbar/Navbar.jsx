const Navbar = () => {
	const links = [
		{ label: "Home", url: "/" },
		{ label: "Topics", url: "#topics" },
		{ label: "Featured Post", url: "#featured" },
		{ label: "Recent Post", url: "#recent" },
		{ label: "About", url: "./about" },
		{ label: "Contact", url: "./contact" },
	];

	return (
		<div className="container">
			<a href="/" className="logo">
				<img
					src="./assets/images/logo.svg"
					alt="Logo"
					width="119"
					height="37"
				/>
			</a>
			<nav className="navbar" data-navbar>
				<div className="navbar-top">
					<a href="/" className="logo">
						<img src="/logo.svg" alt="LearnWish Logo" width="119" height="37" />
					</a>

					<button
						className="nav-close-btn"
						aria-label="close menu"
						data-nav-toggler
					>
						<ion-icon name="close-outline" aria-hidden="true"></ion-icon>
					</button>
				</div>

				<ul className="navbar-list">
					{links.map((link, index) => (
						<li key={index}>
							<a
								href={link.url}
								className="navbar-link hover-1"
								data-nav-toggler
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<div className="navbar-bottom">
					<div className="profile-card">
						<img
							src="./assets/images/about/member-3.jpeg"
							width="48"
							height="48"
							alt="Nowshen Khan"
							className="profile-banner"
						/>

						<div>
							<p className="card-title">Hi, I&#39;m Nowshen Khan!</p>
							<p className="card-subtitle">
								This simple website base on educational blog, article for
								learners or education hunters.
							</p>
						</div>
					</div>
					<div className="social-icons">
						<a href="#">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a href="#">
							<i className="fab fa-github"></i>
						</a>
					</div>

					<ul className="link-list">
						<li>
							<a href="#" className="navbar-bottom-link hover-1">
								Profile
							</a>
						</li>
						<li>
							<a href="#" className="navbar-bottom-link hover-1">
								Articles Saved
							</a>
						</li>
						<li>
							<a href="#" className="navbar-bottom-link hover-1">
								Add New Post
							</a>
						</li>
						<li>
							<a href="#" className="navbar-bottom-link hover-1">
								My Likes
							</a>
						</li>
						<li>
							<a href="#" className="navbar-bottom-link hover-1">
								Account Setting
							</a>
						</li>
						<li>
							<a href="#" className="navbar-bottom-link hover-1">
								Sign Out
							</a>
						</li>
					</ul>
				</div>

				<p className="copyright-text">
					Copyright &copy; 2024 All Rights Reserved by{" "}
					<a href="https://nowshen-khan.github.io/learnwish.en/">
						LearnWishBD.
					</a>
					Developed by{" "}
					<a
						href="https://github.com/nowshen-khan/"
						target="_blank"
						rel="noopener noreferrer"
					>
						nowshen-khan
					</a>
				</p>
			</nav>
			<a href="#name" className="btn btn-primary">
				Subscribe
			</a>

			<button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
				<ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
			</button>
		</div>
	);
};

export default Navbar;
