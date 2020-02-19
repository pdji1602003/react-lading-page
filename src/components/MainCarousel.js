import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide from '../img/sample_01.jpg'


export default function MainCarousel() {
	return (
		<section id="main-carousel">
			<Carousel 
				className="content-container" 
				controls={false}
				interval={3000}
			>
				<Carousel.Item>
					<Carousel.Caption>
						<h1>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米</h1>
						<h4>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロ</h4>
					</Carousel.Caption>
					<img
						src={slide}
						alt="First slide"
						width="100%"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<Carousel.Caption>
						<h1>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米</h1>
						<h4>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロ</h4>
					</Carousel.Caption>
					<img
						src={slide}
						alt="second slide"
						width="100%"
					/>

				</Carousel.Item>
				<Carousel.Item>
					<Carousel.Caption>
						<h1>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米</h1>
						<h4>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロ</h4>
					</Carousel.Caption>
					<img
						src={slide}
						alt="third slide"
						width="100%"
					/>
				</Carousel.Item>
			</Carousel>
		</section>
	)
}
