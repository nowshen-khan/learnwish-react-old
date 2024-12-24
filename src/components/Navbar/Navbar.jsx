const Navbar = () => {
	return (
		<>
			<nav className="navbar" data-navbar>
				<div className="navbar-top">
					<a href="#" className="logo">
						<img
							src="./assets/images/logo.svg"
							alt="LearnWish Logo"
							width="119"
							height="37"
						/>
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
					<li>
						<a href="#home" className="navbar-link hover-1" data-nav-toggler>
							Home
						</a>
					</li>
					<li>
						<a href="#topics" className="navbar-link hover-1" data-nav-toggler>
							Topics
						</a>
					</li>
					<li>
						<a
							href="#featured"
							className="navbar-link hover-1"
							data-nav-toggler
						>
							Featured Post
						</a>
					</li>
					<li>
						<a href="#recent" className="navbar-link hover-1" data-nav-toggler>
							Recent Post
						</a>
					</li>
					<li>
						<a
							href="./about-us.html"
							className="navbar-link hover-1"
							data-nav-toggler
						>
							About Us
						</a>
					</li>
					<li>
						<a
							href="./contact-us.html"
							className="navbar-link hover-1"
							data-nav-toggler
						>
							Contact Us
						</a>
					</li>
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
							<p className="card-title">Hi, I'm Nowshen Khan!</p>
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
		</>
	);
};

export default Navbar;
