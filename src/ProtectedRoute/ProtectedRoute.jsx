import React from 'react';
import { Route, Redirect  } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import UnAuthorize from '../ErrorPages/UnAuthorize';
// import HandleLoading from '../ErrorPages/handleLoading';




const ProtectedRoute = ({ component: Component, render,accessibleRoles, ...rest }) => {
	const { loginData } = useSelector((state) => state.loginReducer );
	console.log('login', loginData)
	let isAuthoized = false;

	let token = loginData?.auth_token;
	if (!token) {
		token = localStorage.getItem('auth_token');
	}

	if(loginData){
		if(!accessibleRoles) isAuthoized = true;
		else if(accessibleRoles && accessibleRoles.includes(loginData?.data?.role)){
			isAuthoized = true;
		}
	}

	return (
		<Route
			{...rest}
			render={(props) => {
				if (token) {

					if(loginData.data?._id && isAuthoized){
						return Component ? <Component {...props} /> : render(props);
					}
					else if(loginData?.data?._id && !isAuthoized) {
						return <div>404</div>
					}
					else{
						return <div>loading</div>
					}

				} else {
					return (
						<Redirect
							to={{
								pathname: '/',
								state: { from: props.location },
							}}
						/>
					);
				}
			}}
		></Route>
	);
};

export default ProtectedRoute;
