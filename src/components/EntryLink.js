import React from 'react'
import { Link } from 'react-router-dom'

export default function EntryLink() {
	return (
		<section id="entryLink">
			<div className="content-container entryLink_flex-container">
				<Link to="" className="entryLink_link entryLink_green-link">
					<span className="entryLink_arrow">▶</span>
					再チャレンジライターさんはこちら
				</Link>
				<Link to=""  className="entryLink_link entryLink_blue-link">
					<span className="entryLink_arrow">▶</span>
					ライターステーションに登録する
				</Link>
			</div>
		</section>
	)
}
