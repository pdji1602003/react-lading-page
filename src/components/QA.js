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
			<p className="text-center" style={{lineHeight:1.6}}>39曲意せイ記度えれ騒断中ホソネカ我負びさえ間打トおゆス全政社フ田軽ぴっ鳥補ま北雇こ<br/>ばドづをびリ。補ま北雇こばドづ保擬版園返充わをびリを。
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
			<h3>＞＞ 終旅キミユ立授ゃ ＜＜</h3>
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
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 1,
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 2,
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 3,
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 4,
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	}
]

const sampleSlides2 = [
	{
		id: uuidv4(),
		index: 0,
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 1,
		question: '【Q】ゃ研人わ前品セフリ番件ツホ納？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	},
	{
		id: uuidv4(),
		index: 2,
		question: '【Q】ゃ研人わ前品セフリ番件ツ番件ツ？',
		answer: '【A】引クゃ研人わ前品セフリ番件ツホ納岡首ヱムツヘ掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！掛提れげ治理うび顔報イとぽれ問索ア属機こ試恐炭熟耳預あ！',
		img: sample_08
	}
]

