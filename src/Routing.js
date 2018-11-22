import { UserCreate } from "./components/form/UserCreate";
import { UserPwdForgot } from "./components/form/UserPwdForgot";

const AllRoutes = [
	{
		path: "/formulaire/inscription",
		component: UserCreate
	},
	{
		path: "/formulaire/mot-de-passe-oublie",
		component: UserPwdForgot
	}
];

export default AllRoutes;
