import React from "react"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import { Routes, Route } from "react-router-dom"
import Home from "./layots/home"
import AboutUs from "./layots/aboutUs"
import Store from "./layots/store"
import GamesMiddleLoaderGlobal from "./components/HOC/gamesMiddleLoaderGlobal"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="wrapper__content block-content">
				<GamesMiddleLoaderGlobal>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/aboutUs" element={<AboutUs />} />
						<Route path="/store" element={<Store />} />
					</Routes>
				</GamesMiddleLoaderGlobal>
			</main>
			<Footer />
		</div>
	)
}

export default App
