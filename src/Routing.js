import Homepage from './components/Homepage';
import { UserCreate } from "./components/form/UserCreate";
import { UserPwdForgot } from "./components/form/UserPwdForgot";
import { UserConnexion } from './components/form/UserConnexion';

const AllRoutes = [
	{
		path:"/",
		component:Homepage
	},
	{
		path: "/formulaire/inscription",
		component: UserCreate
	},
	{
		path: "/formulaire/mot-de-passe-oublie",
		component: UserPwdForgot
	},
	{
		path: "/formulaire/connexion",
		component: UserConnexion
	},
];

export default AllRoutes;
