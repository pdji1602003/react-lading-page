import { useState, useEffect } from 'react'

function getWindowDimensions() {
	const { innerWidth, innerHeight } = window
	return { innerWidth, innerHeight }
}

function getWindowScroll() {
	const scrollValue = document.body.scrollTop || document.documentElement.scrollTop
	return scrollValue
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowDimensions
}

export function useWindowScroll() {
	const [windowScroll, setWindowScroll] = useState(getWindowScroll())

	useEffect(() => {
		function handleWindowScroll() {
			setWindowScroll(getWindowScroll())
		}
		window.addEventListener('scroll', handleWindowScroll)
		return () => {
			window.removeEventListener('scroll', handleWindowScroll)
		};
	}, [])

	return windowScroll
}