import React from 'react'
import { Link } from 'react-router-dom'

export default function EntryLink() {
	return (
		<section>
			<div>
				<Link to="">
					<span>▶</span>
					再チャレンジライターさんはこちら
				</Link>
				<Link to="">
					<span>▶</span>
					ライターステーションに登録する
				</Link>
			</div>
		</section>
	)
}
