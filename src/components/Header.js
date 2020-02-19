import React from 'react'
import logo_white from '../img/logo_white.svg'
import logo_blue from '../img/logo_blue.svg'
import { useWindowScroll } from '../customHooks/useWindowDimensions'

export default function Header() {
	const windowScroll = useWindowScroll()


	return (
		<header className={windowScroll > 20 ? 'header header-scroll' : 'header'}>
			<div className="header_content">
				<a className="header_logo-container" href="#!">
					<img src={windowScroll > 20 ? logo_blue : logo_white} alt="white logo" width="45" height="45" />
					<div className="header_company-name-container">
						<p className="header_company-name-en">writer writer</p>
						<p className="header_company-name-jp">ヒケムノヒケムノ</p>
					</div>
				</a>
				<div className="header_links-container">
					<ul className="header_outwards-links-container">
						<li>
							<a href="#!">登録はこちら</a>
						</li>
						<li>
							<a href="#!">ブログ</a>
						</li>
						<li>
							<a href="#!">ログイン</a>
						</li>
					</ul>
					<ul className="header_inwards-links-container">
						<li>
							<a href="#!">▽ OVERVIEW</a>
						</li>
						<li>
							<a href="#!">▽ CASES</a>
						</li>
						<li>
							<a href="#!">▽ WORLD</a>
						</li>
						<li>
							<a href="#!">▽ WORLD</a>
						</li>
						<li>
							<a href="#!">▽ WORLD</a>
						</li>
						<li>
							<a href="#!">▽ WORLD</a>
						</li>
						<li>
							<a href="#!">▽Q &amp; A</a>
						</li>
					</ul>
				</div>
			</div>

		</header>
	)
}
