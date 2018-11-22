import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import componentes
import AllRoutes from "./Routing";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<main>{children}</main>
		<Footer />
	</Fragment>
);

// Retourne les Routes
const Routes = () => (
	<Layout>
		<Switch>
			{AllRoutes.map(({path,component},k) => 
      <Route key={k} path={path} exact component={component} />
			)}
		</Switch>
	</Layout>
);  


const App = () => (
	<Router>
		<Route path="/" component={Routes} />
	</Router>
);

export default App;
