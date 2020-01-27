import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide from '../img/sample_01.svg'

export default function MainCarousel() {
	return (
		<Carousel>
			<Carousel.Item>
				<Carousel.Caption>
					<h1>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロネシ文朗氏融</h1>
					<h4>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロ</h4>
				</Carousel.Caption>
				<img
					src={slide}
					alt="First slide"
				/>
			</Carousel.Item>

			<Carousel.Item>
				<Carousel.Caption>
					<h1>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロネシ文朗氏融</h1>
					<h4>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロ</h4>
				</Carousel.Caption>
				<img
					src={slide}
					alt="second slide"
				/>

			</Carousel.Item>
			<Carousel.Item>
				<Carousel.Caption>
					<h1>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロネシ文朗氏融</h1>
					<h4>参えむ財法ゃお碁儀ごぞレあ境子マノハ政米リロ</h4>
				</Carousel.Caption>
				<img
					src={slide}
					alt="third slide"
				/>
			</Carousel.Item>
		</Carousel>
	)
}
