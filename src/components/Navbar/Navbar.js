import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { Link } from 'gatsby';
import { Toggler } from './NavbarStyles';
import { HiSun, HiMoon } from 'react-icons/hi';
const Navbar = ({ siteTitle }) => {
	return (
		<header>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<nav>
				<Link to="/page-2/">Go to page 2</Link>
				<Link to="/">Home</Link>
				<ThemeToggler>
					{({ theme, toggleTheme }) => (
						<Toggler>
							<input
								id="toggleBtn"
								type="checkbox"
								onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
								checked={theme === 'dark'}
							/>
							<label htmlFor="toggleBtn">{theme === 'dark' ? <HiMoon /> : <HiSun />}</label>
						</Toggler>
					)}
				</ThemeToggler>
			</nav>
		</header>
	);
};

Navbar.propTypes = {
	siteTitle: PropTypes.string
};

Navbar.defaultProps = {
	siteTitle: ``
};

export default Navbar;
