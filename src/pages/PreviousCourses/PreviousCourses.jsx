// import {Button, ConfigProvider, Input, Space, Table} from 'antd';
import { ConfigProvider, Table } from "antd";

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    align: "center",
    color: "white",
    render: (text) => <p style={{ color: "white" }}>{text}</p>,
  },
  {
    title: "Title",
    dataIndex: "title",
    align: "center",
    render: (text) => <p style={{ color: "white" }}>{text}</p>,
  },
  {
    title: "Credit Value",
    dataIndex: "creditValue",
    align: "center",
    render: (text) => <p style={{ color: "white" }}>{text}</p>,
  },
  {
    title: "Semester",
    dataIndex: "semester",
    align: "center",
    render: (text) => <p style={{ color: "white" }}>{text}</p>,
  },
  {
    title: "Workload",
    dataIndex: "workload",
    align: "center",
    render: (text) => <p style={{ color: "white" }}>{text}</p>,
  },
];
const data = [
  {
    key: "1",
    code: "ELEC104",
    title: "Electronic Circuits",
    creditValue: "15",
    semester: "Whole Semester",
    workload: "View Insight",
  },
  {
    key: "2",
    code: "ELEC121",
    title: "Electical Circuits for Engineers",
    creditValue: "7.5",
    semester: "First Semester",
    workload: "View Insight",
  },
];

const PreviousCourses = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#051650",
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerColor: "white",
              headerBg: "#051650",
              borderColor: "white",
              rowHoverBg: "none",
              rowBg: "#051650",
              colorBgContainer: "#051650",
              // colorPrimary: "white"
            },
          },
        }}
      >
        <Table
          style={{ marginTop: "4rem", height: "80vh", width: "90vw" }}
          columns={columns}
          dataSource={data}
          bordered
        />
      </ConfigProvider>
    </div>
  );
};
export default PreviousCourses;
