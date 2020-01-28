import React from 'react'
import sample_05 from '../img/sample_05.png'

export default function WorkFlow() {
	return (
		<section id="workFlow">
			<div className="content-container">
				<h2>仕事の流れ</h2>
				<h3>お仕事の流れ！ ～登録から受注、報酬受取まで～</h3>
				<ul className="workFlow_list-container">
					<li>
						<dl>
							<dt>
								<img src={sample_05} alt="sample_05" width="120" height="120" />
							</dt>
							<dd>
								<h5>「ライターステーション」にご登録</h5>
								<p className="text-left">ご氏名・ご住所・電話番号（携帯電話でも可）・メールアドレス・今までのライティング、WEB制作経験（あれば）など必要事項を記載してご応募。またこのときに、簡単な課題作文もご提出（フォームに入力）していただきます。</p>
							</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>
								<img src={sample_05} alt="sample_05" width="120" height="120" />
							</dt>
							<dd>
								<h5>「ライターステーション」にご登録</h5>
								<p className="text-left">ご氏名・ご住所・電話番号（携帯電話でも可）・メールアドレス・今までのライティング、WEB制作経験（あれば）など必要事項を記載してご応募。またこのときに、簡単な課題作文もご提出（フォームに入力）していただきます。</p>
							</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>
								<img src={sample_05} alt="sample_05" width="120" height="120" />
							</dt>
							<dd>
								<h5>「ライターステーション」にご登録</h5>
								<p className="text-left">ご氏名・ご住所・電話番号（携帯電話でも可）・メールアドレス・今までのライティング、WEB制作経験（あれば）など必要事項を記載してご応募。またこのときに、簡単な課題作文もご提出（フォームに入力）していただきます。</p>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</section>
	)
}
