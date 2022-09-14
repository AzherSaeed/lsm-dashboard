import React , {useEffect} from 'react';
import Panel from '../Panel/Panel';
import { Table , Button } from 'antd';
import {getContactusAction} from '../../actions/contactusAction';
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
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
    },
    {
        title: 'Created At',
        dataIndex: 'created',
        key: 'created',
    },
];



const Contactqueries = () => {
    const dispatch = useDispatch();

    const {allContactqueries} = useSelector((state) => state.contactusReducer)


    useEffect(() => {
       dispatch(getContactusAction())
    }, [dispatch])



    const data = allContactqueries?.map((item) => ({
        key: item.id,
        name: item.name,
        email: item.email,
        contact: item.contactno,
        message: item.message,
        created: moment(item.createdAt).format("MMM Do YY"),
        action: (
          <div>
             <Button >View Detail</Button>
          </div>
        ),
      }));
      


    return (
        <Panel>
            <h1 className="main-heading" Í>Contact Queries</h1>
            {
                allContactqueries.length === 0 ? <ShowLoading/> :  <Table dataSource={data} columns={columns} />
            }
           
        </Panel>
    )
}

export default Contactqueries
