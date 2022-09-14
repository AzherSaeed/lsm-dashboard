import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox , Spin } from 'antd';
import logo from '../../assets/lsm.png';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './style.css'
import { loginCalled , loginStoreEmptyAction  } from '../../actions/AuthAction';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loginLoader, setloginLoader] = useState(false);

    const { error , loginData} = useSelector((state) => state.loginReducer)

    console.log('here', loginData)

    useEffect(() => {
        if(error?.message === 'Request failed with status code 400'){
            alert('login credential invalid')
            setloginLoader(false)
        }
        else if (loginData?.data?.role === 'admin'){
            localStorage.setItem('auth_token' , loginData?.auth_token);
            console.log('here 2')
            history.push('/admission')
        }
    },[error , loginData])

    const onFinish = (values) => {
        setloginLoader(true)
        dispatch(loginCalled(values))
    };

    const onFinishFailed = (errorInfo) => {
        alert('Failed:', errorInfo);
    };





    return (
        <div className='container'>
            <div className='col'>
                <div className='center'>
                    <Link to="/"><img className="logo-style" src={logo} alt="" /></Link>
                </div>
                <h5 className='reg-heading'>Welcome, Please Login</h5>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className="form-control">
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                    </div>
                    <div className="form-control">
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                    </div>

                    <div className='form-control'>
                        <Button
                            disabled={loginLoader}
                            htmlType="submit"
                            className="custom-Login-login-btn"
                        >
                            {loginLoader ? (
                                <Spin size="small" />
                            ) : (
                                    'login'
                                )}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
