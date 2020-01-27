import React from 'react'
import MainCarousel from './MainCarousel'
import Intro from './Intro'
import Work from './Work'
import EntryLink from './EntryLink'
import Case from './Case'
import Requirements from './Requirements'
import WorkFlow from './WorkFlow'
import Support from './Support'
import FeedBack from './FeedBack'
import QA from './QA'

export default function Main() {
	return (
		<div>
			<MainCarousel />
			<Intro />
			<Work />
			<EntryLink />
			<Case />
			<Requirements />
			<EntryLink />
			<WorkFlow />
			<Support />
			<EntryLink />
			<FeedBack />
			<QA />
			<EntryLink />
		</div>
	)
}
