import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Select } from "antd";
import Panel from "../Panel/Panel";
import { admissionAction } from "../../actions/admissionAction";
import { useDispatch, useSelector } from "react-redux";
import ShowLoading from "../../utils/ShowLoading";
import moment from "moment";
import axios from "axios";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "program",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Created At",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const AdmissionTable = () => {
  const dispatch = useDispatch();

  const { admissionData } = useSelector((state) => state.admissionReducer);
  const currentDate = new Date();

  const [open, setOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);
  const [selectedYear, setselectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setselectedMonth] = useState(
    currentDate.getMonth() + 1
  );

  useEffect(() => {
    dispatch(admissionAction({ month: selectedMonth, year: selectedYear }));
  }, [dispatch]);

  const applyFiltes = () => {
    dispatch(admissionAction({ month: selectedMonth, year: selectedYear }));
  };

  const data = admissionData?.map((item) => ({
    key: item.id,
    name: item.name,
    email: item.email,
    contact: item.contact,
    program: item.program,
    created: moment(item.createdAt).format("MMM Do YY"),
    action: (
      <div>
        <Button
          type="primary"
          onClick={() => (setOpen(true), setcurrentUser(item))}
        >
          View Detail
        </Button>
      </div>
    ),
  }));

  return (
    <Panel>
      <Modal
        title={`User craete this record on ${moment(
          currentUser?.createdAt
        ).format("LLLL")}`}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div className="admission-user-modal-detail">
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Name : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.name}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Contact : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.contact}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Email : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.email}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Guardian : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.guardian}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Gender : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.gender}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Apply for pragram: </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.program}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Home Address : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{currentUser?.homeAddress}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Matric Marks = year : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{`${currentUser?.metricobtainedmarks} / ${currentUser?.metrictotalmarks} = ${currentUser?.metricyear}`}</h3>
            </div>
          </div>
          <div className="admission-user-modal-detail-item">
            <div className="admission-user-modal-detail-item-key">
              <h1>Intermediate Marks = year : </h1>
            </div>
            <div className="admission-user-modal-detail-value">
              <h3>{`${currentUser?.interobtainedmarks} / ${currentUser?.intertotalmarks} = ${currentUser?.interyear}`}</h3>
            </div>
          </div>
        </div>
      </Modal>

      <h1 className="main-heading">Admission</h1>

      <div>
        <Select
          defaultValue={selectedMonth}
          style={{ width: 120 }}
          onChange={(e) => setselectedMonth(e)}
          options={[
            { value: 1, label: "January" },
            { value: 2, label: "February" },
            { value: 3, label: "March" },
            { value: 4, label: "April" },
            { value: 5, label: "May" },
            { value: 6, label: "June" },
            { value: 7, label: "July" },
            { value: 8, label: "August" },
            { value: 9, label: "September" },
            { value: 10, label: "October" },
            { value: 11, label: "November" },
            { value: 12, label: "December" },
          ]}
        />
        <Select
          defaultValue={selectedYear}
          style={{ width: 120 }}
          onChange={(e) => setselectedYear(e)}
          options={[
            { value: 2023, label: "2023" },
            { value: 2022, label: "2022" },
          ]}
        />
        <Button type="primary" onClick={applyFiltes}>
          Apply
        </Button>
      </div>
      <Table dataSource={data} columns={columns} />
    </Panel>
  );
};

export default AdmissionTable;
