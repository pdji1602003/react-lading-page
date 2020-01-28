import React from 'react'
import logo_white from '../img/logo_white.svg'

export default function Header() {
	return (
		<header className="header">
			<div className="header_content">
				<a className="header_logo-container" href="#!">
					<img src={logo_white} alt="white logo" width="45" height="45" />
					<div className="header_company-name-container">
						<p className="header_company-name-en">writer station</p>
						<p className="header_company-name-jp">ライターステーション</p>
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
							<a href="#!">▽仕事の概要</a>
						</li>
						<li>
							<a href="#!">▽案件例</a>
						</li>
						<li>
							<a href="#!">▽対象とする人</a>
						</li>
						<li>
							<a href="#!">▽対象とする人</a>
						</li>
						<li>
							<a href="#!">▽区なそ体禁</a>
						</li>
						<li>
							<a href="#!">▽区なそ体禁</a>
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
