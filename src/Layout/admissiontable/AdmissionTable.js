import React , {useEffect , useState}  from 'react';
import { Table , Button , Modal } from 'antd';
import Panel from '../Panel/Panel'
import {admissionAction} from '../../actions/admissionAction';
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
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Program',
    dataIndex: 'program',
    key: 'program',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Created At',
    dataIndex: 'created',
    key: 'created',
},
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
 
];


const AdmissionTable = () => {
  const dispatch = useDispatch()

  const {admissionData} = useSelector((state) => state.admissionReducer);


  const [open, setOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState(null)


  useEffect(() => {
    dispatch(admissionAction())
  }, [dispatch])




const data = admissionData?.map((item) => ({
  key: item.id,
  name: item.name,
  email: item.email,
  contact: item.contact,
  program: item.program,
  created: moment(item.createdAt).format("MMM Do YY"),
  action: (
    <div>
       <Button type='primary' onClick={() => (setOpen(true) , setcurrentUser (item))} >View Detail</Button>
    </div>
  ),
}));

  return (
    <Panel>
        <Modal
        title={`User craete this record on ${moment(currentUser?.createdAt).format("LLLL")}`}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        
        <div className='admission-user-modal-detail' >
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Name : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.name}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Contact : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.contact}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Email : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.email}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Guardian : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.guardian}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Gender : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.gender}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Apply for pragram: </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.program}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Home Address : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{currentUser?.homeAddress}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Matric Marks = year : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{`${currentUser?.metricobtainedmarks} / ${currentUser?.metrictotalmarks} = ${currentUser?.metricyear}`}</h3>
            </div>
          </div>
          <div className='admission-user-modal-detail-item' >
            <div className='admission-user-modal-detail-item-key' >
                <h1>Intermediate Marks = year : </h1>
            </div>
            <div className='admission-user-modal-detail-value' >
                <h3>{`${currentUser?.interobtainedmarks} / ${currentUser?.intertotalmarks} = ${currentUser?.interyear}`}</h3>
            </div>
          </div>
          
        </div>
      </Modal>

      <h1 className="main-heading" >Admission</h1>
      {
        admissionData.length === 0 ? <ShowLoading/> : <Table dataSource={data} columns={columns} />
       }
      
    </Panel>
  )
}

export default AdmissionTable
