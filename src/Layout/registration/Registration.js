import React, { useEffect, useState } from "react";
import Panel from "../Panel/Panel";
import { Table, Button, Select } from "antd";
import { getRegistration } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import ShowLoading from "../../utils/ShowLoading";
import moment from "moment";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Contact Number",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Created At",
    dataIndex: "created",
    key: "created",
  },
];

const Registration = () => {
  const dispatch = useDispatch();

  const currentDate = new Date();

  const { registration } = useSelector((state) => state.registerReducer);

  const [selectedYear, setselectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setselectedMonth] = useState(
    currentDate.getMonth() + 1
  );

  useEffect(() => {
    dispatch(getRegistration({ month: selectedMonth, year: selectedYear }));
  }, [dispatch]);

  const applyFiltes = () => {
    dispatch(getRegistration({ month: selectedMonth, year: selectedYear }));
  };

  const data = registration?.map((item) => ({
    key: item.id,
    name: item.name,
    email: item.email,
    contact: item.contact,
    created: moment(item.createdAt).format("MMM Do YY"),
    action: (
      <div>
        <Button>View Detail</Button>
      </div>
    ),
  }));

  return (
    <Panel>
      <h1 className="main-heading">Registration</h1>
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

export default Registration;
