import React from 'react'
import sample_02 from '../img/sample_02.svg'

export default function Work() {
	return (
		<section id="work">
			<div className="work_grid-container content-container">
				<div className="work_grid-item">
					<h2 className="text-left">ライターさんにお願いしたいお仕事</h2>
					<h3 className="text-left">お願いしたいのはWEBに載せる「コンテンツ記事」や「レポート文」などを書いていただく仕事です。</h3>
					<h3 className="text-left">ここから始まる「WEBライターへの道」！</h3>
					<p className="text-md text-left">募集したライターさんにお願いするのは、WEB上に掲載する記事を執筆していただく「WEBライター」のお仕事。コスメや化粧品の記事を書いていただいたり、金融商材のことを書いていただく事もあります。お仕事のポイントは、世の中の人が何かを知りたくてWEB検索するときの「検索キーワード」を設定し、そのキーワードに基づいた記事を書くこと。キーワードは編集部から指定させていただきます。調べ物をしてレポートする仕事や、商品を使った体験記を書く仕事や、特定のテーマについてのブログを毎日書いてもらうこともあります。</p>

					<h3 className="text-left">仕事は「直発注」で次から次へ！</h3>
					<p className="text-md text-left">どの仕事もライターステーション編集部から直接ご依頼させていただき、編集部から報酬をお支払いする「直接発注」です。 他のライター募集サイトのように「仕事を依頼したい企業の案件を集めて、ライターさんに紹介する」といった形態ではありません。 編集部の自社案件としてさまざまな分野のお仕事が常にあり、執筆依頼は次から次へ途切れることなく発注します。 どんどんご依頼させていただきますので、ぜひともどんどん稼いでください。 意欲のあるライターを歓迎します。</p>
				</div>
				<div className="work_grid-item">
					<img src={sample_02} alt="computer" />
				</div>
			</div>
		</section>
	)
}