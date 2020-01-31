import React from 'react'

export default function Slide(props) {

	const { className, question, answer, img } = props

	return (
		<li className={className}>
			<dl>
				<dt>
					<img src={img} alt="sample_08" width="90" />
				</dt>
				<dd>
					<h5 className="text-left">{question}</h5>
					<p className="text-left text-md">{answer}</p>
				</dd>
			</dl>
		</li>
	)
}
