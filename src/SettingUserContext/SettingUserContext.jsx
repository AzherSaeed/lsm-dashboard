import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { verifyTokenCalled } from '../actions/AuthAction';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const SettingUserContext = ({setIsLogin, isLogin})=> {

	const history = useHistory();
	let { loginData, error } = useSelector((state) => state.loginReducer );
	const dispatch = useDispatch();

	const token = localStorage.getItem('auth_token');
	
	useEffect(()=> {
		if(loginData && !error) {
			setIsLogin(true);
		} else if(error) {
			localStorage.removeItem('auth_token');
			setIsLogin(false);
			history.replace('/');
		}
	}, [loginData, error]);


	useEffect(() => {
		if (!isLogin && token) {
			dispatch(verifyTokenCalled({auth_token : token}));
		}
	}, [token]);

	return null;
};

export default SettingUserContext;