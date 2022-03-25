import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import "./app/scss/style.scss"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import createStore from "./app/store/createStore"

const store = createStore()

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
