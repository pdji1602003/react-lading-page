import React, { useState } from 'react'
import sample_08 from '../img/sample_08.png'
import uuidv4 from 'uuid/v4'
import Slide from './Slide'



export default function QA() {
	const [slides, setSlides] = useState(sampleSlides)
	const [activeSlide, setActiveSlide] = useState(slides[0])
	const [direction, setDirection] = useState('')
	
	// console.log(slides);
	const slideIndexes = slides.map(slide => slide.index)
	console.log(slideIndexes);
	
	console.log(slideIndexes);
	// yPositions.unshift(yPositions.pop())
	

	function handlePrevSlide() {
		slideIndexes.unshift(slideIndexes.pop())
	
	}

	function handleNextSlide() {
		const newIndex = activeSlide.index + 1
		if(newIndex > slides.length - 1) {
			setActiveSlide(slides[0])
		} else {
			setActiveSlide(slides[newIndex])
		}
	}


	return (
		<section id="qa">
			<h2>詳細Q&amp;A</h2>
			<h3>よくある質問</h3>
			<p>ご登録をご検討中の方やライターさまよりお問い合わせいただく、ご質問をQ＆Aでお答えいたします。
					ご不明な点などを解決するのに、お役立てください。
			</p>
			<h3>＞＞ 登録前の質問 ＜＜</h3>
			<div className={`qa_slider active-slide-${activeSlide.index}`}>
				<ul className="qa_slider-container" style={{
					'transform':`translateX(-${activeSlide.index*(100 / 3)}%)`
				}}>
					{slides.map((slide, index) => <Slide 
					className={
						index === activeSlide.index ? 'qa_slide-active qa_slide' : 'qa_slide'
					}
					key={slide.id} 
					{...slide} />)
					}
				</ul>
				<a
					className="carousel-control-prev"
					role="button"
					onClick={handlePrevSlide}
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a
					className="carousel-control-next"
					role="button"
					onClick={handleNextSlide}
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
				</a>
			</div>
			<h3>＞＞ お仕事に関する質問 ＜＜</h3>
			<div className="content-container">
				<ul className="qa_slide-container">
					<li className="qa_slide">
						<dl>
							<dt>
								<img src={sample_08} alt="sample_08" width="90" />
							</dt>
							<dd>
								<h5 className="text-left">【Q】在宅ライターに興味がありますが、地元雑誌に投稿した経験しかありません。大丈夫でしょうか？</h5>
								<p className="text-left text-md">
									【A】初心者でも問題ありません。<br />
									「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！
								</p>
							</dd>
						</dl>
					</li>
					<li className="qa_slide">
						<dl>
							<dt>
								<img src={sample_08} alt="sample_08" width="90" />
							</dt>
							<dd>
								<h5 className="text-left">【Q】在宅ライターに興味がありますが、地元雑誌に投稿した経験しかありません。大丈夫でしょうか？</h5>
								<p className="text-left text-md">
									【A】初心者でも問題ありません。<br />
									「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！
								</p>
							</dd>
						</dl>
					</li>
					<li className="qa_slide">
						<dl>
							<dt>
								<img src={sample_08} alt="sample_08" width="90" />
							</dt>
							<dd>
								<h5 className="text-left">【Q】在宅ライターに興味がありますが、地元雑誌に投稿した経験しかありません。大丈夫でしょうか？</h5>
								<p className="text-left text-md">
									【A】初心者でも問題ありません。<br />
									「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！
								</p>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</section>
	)
}


const sampleSlides = [
	{
		id: uuidv4(),
		index: 0,
		question: '【Q】66歳ですが、応募可能でしょうか？',
		answer: '【A】初心者でも問題ありません。\n「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 1,
		question: '【Q】66歳ですが、応募可能でしょうか？',
		answer: '【A】初心者でも問題ありません。\n「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 2,
		question: '【Q】66歳ですが、応募可能でしょうか？',
		answer: '【A】初心者でも問題ありません。\n「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 3,
		question: '【Q】66歳ですが、応募可能でしょうか？',
		answer: '【A】初心者でも問題ありません。\n「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 4,
		question: '【Q】66歳ですが、応募可能でしょうか？',
		answer: '【A】初心者でも問題ありません。\n「書くこと・情報収集が好き」かつ「正しい日本語が書ける人」であれば、ライティング経験は不問です！',
		img: sample_08
	}
]
