import React, { useState } from 'react'
import sample_08 from '../img/sample_08.png'
import uuidv4 from 'uuid/v4'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from './Slide'


const sliderOneResponsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1
	}
}

const sliderTwoResponsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1
	},
	tablet: {
		breakpoint: { max: 1023, min: 464 },
		items: 2,
		slidesToSlide: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1
	}
}

export default function QA() {
	const [slides] = useState(sampleSlides)
	const [slides2] = useState(sampleSlides2)
	
	

	return (
		<section id="qa">
			<h2>詳細Q&amp;A</h2>
			<h3>よくある質問</h3>
			<p>ご登録をご検討中の方やライターさまよりお問い合わせいただく、ご質問をQ＆Aでお答えいたします。
					ご不明な点などを解決するのに、お役立てください。
			</p>
			<h3>＞＞ 登録前の質問 ＜＜</h3>
			<div>
				<Carousel
					responsive={sliderOneResponsive}
					infinite={true}
					draggable
					className="qa_carousel"
					centerMode
				>
					{slides.map(slide => <Slide key={slide.id} {...slide} />)}
				</Carousel>
			</div>
			<h3>＞＞ お仕事に関する質問 ＜＜</h3>
			<div className="content-container">
				<Carousel
					responsive={ sliderTwoResponsive }
					infinite={false}
					className="qa_carousel qa_carousel-second"
					centerMode={false}
				>
					{slides2.map(slide => <Slide key={slide.id} {...slide} />)}
				</Carousel>
			</div>
		</section>
	)
}

// Fake Data
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

const sampleSlides2 = [
	{
		id: uuidv4(),
		index: 0,
		question: '【Q】納品期日より遅れてしまった場合、ペナルティはありますか？',
		answer: `【A】場合によってはお仕事をご辞退いただくことがあります。\n
		なお途中まで作業をされていても、その分の報酬はお支払いできかねますので、ご注意ください。`,
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 1,
		question: '【Q】納品期日より遅れてしまった場合、ペナルティはありますか？',
		answer: `【A】場合によってはお仕事をご辞退いただくことがあります。\n
		なお途中まで作業をされていても、その分の報酬はお支払いできかねますので、ご注意ください。`,
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 2,
		question: '【Q】納品期日より遅れてしまった場合、ペナルティはありますか？',
		answer: `【A】場合によってはお仕事をご辞退いただくことがあります。\n
		なお途中まで作業をされていても、その分の報酬はお支払いできかねますので、ご注意ください。`,
		img: sample_08
	}
]

