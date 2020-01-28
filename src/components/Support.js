import React from 'react'
import sample_06 from '../img/sample_06.jpg'

export default function Support() {
	return (
		<section id="support">
			<h2>ライターさんへのサポート体制</h2>
			<h3>「WEBで読まれる、クリックされる」という必須のライティングスキルを編集スタッフがきっちりご伝授します。</h3>
			<div className="support_img-container">
				<img src={sample_06} alt="sample_06" />
			</div>
			<div className="content-container">
				<ul className="support_list-container">
					<li>
						<h3>「WEB編集のプロ」が丁寧にサポート</h3>
						<p className="text-left">編集部のスタッフは「WEBで読まれるコンテンツ」を作るために日々苦心しているプロフェッショナルです。読者にクリックしてもらえるタイトルのつけ方、SEOで有利な言葉の選び方や組み立て方や文字数、印刷物での記事の書き方とはまるで違う「スマホで読まれる記事」の構成術など、WEBライティングに必要なテクニックを、ほぼマンツーマンに近い形であなたにお伝えします。</p>
					</li>
					<li>
						<h3>「WEB編集のプロ」が丁寧にサポート</h3>
						<p className="text-left">編集部のスタッフは「WEBで読まれるコンテンツ」を作るために日々苦心しているプロフェッショナルです。読者にクリックしてもらえるタイトルのつけ方、SEOで有利な言葉の選び方や組み立て方や文字数、印刷物での記事の書き方とはまるで違う「スマホで読まれる記事」の構成術など、WEBライティングに必要なテクニックを、ほぼマンツーマンに近い形であなたにお伝えします。</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
