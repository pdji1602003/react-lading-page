import React from 'react'
import sample_08 from '../img/sample_08.png'

export default function Slide(props) {
	const { question, answer, img } = props

	return (
		<div className="qa_carousel-item-container">
			<dl>
				<dt>
					<img
						src={sample_08}
						alt="sample_08"
						width="100"
						src={img}
					/>
				</dt>
				<dd>
					<h5 className="text-left">{question}</h5>
					<p className="text-left text-md">{answer}</p>
				</dd>
			</dl>
		</div>
	)
}

