import React , {useEffect} from 'react';
import Panel from '../Panel/Panel';
import { Table , Button } from 'antd';
import {getRegistration} from '../../actions/AuthAction';
import  {useDispatch , useSelector} from 'react-redux'
import ShowLoading from '../../utils/ShowLoading';
import moment from 'moment'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Contact Number',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Created At',
        dataIndex: 'created',
        key: 'created',
    },
];

const Registration = () => {
    const dispatch = useDispatch();

    const {registration} = useSelector((state) => state.registerReducer)


    useEffect(() => {
       dispatch(getRegistration())
    }, [dispatch])

    const data = registration?.map((item) => ({
        key: item.id,
        name: item.name,
        email: item.email,
        contact: item.contactNo,
        created: moment(item.createdAt).format("MMM Do YY"),
        action: (
          <div>
             <Button >View Detail</Button>
          </div>
        ),
      }));


    return (
        <Panel>
            <h1 className="main-heading" >Registration</h1>
            {
                registration?.length === 0 ? <ShowLoading/> : <Table dataSource={data} columns={columns} />

            }
        </Panel>
    )
}

export default Registration
