import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// Component-app
import App from "./app/App"
import ScrollToTopGlobal from "./app/components/HOC/scrollToTopGlobal"
// root file styles
import "./app/scss/style.scss"
// Auxiliary
import reportWebVitals from "./reportWebVitals"
import createStore from "./app/store/createStore"

const containerHTML = document.getElementById("root")
const root = createRoot(containerHTML)
const store = createStore()

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ScrollToTopGlobal>
					<App />
				</ScrollToTopGlobal>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)

reportWebVitals()
