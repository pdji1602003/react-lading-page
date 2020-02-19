import React from 'react'
import { Link } from 'react-router-dom'

export default function EntryLink() {
	return (
		<section id="entryLink">
			<div className="content-container entryLink_flex-container">
				<Link to="" className="entryLink_link entryLink_green-link">
					<span className="entryLink_arrow">▶</span>
					校チロヱ仕出で続本ゅも産
				</Link>
				<Link to=""  className="entryLink_link entryLink_blue-link">
					<span className="entryLink_arrow">▶</span>
					校チロヱ仕出で続本ゅも産
				</Link>
			</div>
		</section>
	)
}
