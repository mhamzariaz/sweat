import { useEffect, useState } from "react";
import CircularProgressBar from "../../components/ProgressBar/CircularProgressBar.JSX";
import "./Simulations.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Label,
} from "recharts";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import {getSimulations} from "../../NetworkCalls.js";

const Simulations = () => {
  const merge = (data) => {
    if (!Array.isArray(data)) {
      return { distribution: data["distribution"] };
    } else {
      const merged = {};
      for (const i of data) {
        i["distribution"].map((item) => {
          const weekIndex = item.week - 1;
          if (merged[weekIndex]) {
            merged[weekIndex].hours += item.hours;
          } else {
            merged[weekIndex] = { week: item.week, hours: item.hours };
          }
        });
      }
      return { distribution: Object.values(merged) };
    }
  };

  useEffect(() => {
    getSimulations();
  }, []);
  const data = {
    moduleCode: "ELEC362",
    moduleCredit: 15,
    totalStudyHours: 150,
    timetabledHours: 42,
    privateStudyHours: 108,
    labHours: {
      hours: 24,
      distribution: [
        { week: 1, hours: 2 },
        { week: 2, hours: 2 },
        { week: 3, hours: 2 },
        { week: 4, hours: 2 },
        { week: 5, hours: 2 },
        { week: 6, hours: 2 },
        { week: 7, hours: 2 },
        { week: 8, hours: 2 },
        { week: 9, hours: 2 },
        { week: 10, hours: 2 },
        { week: 11, hours: 2 },
        { week: 12, hours: 2 },
        { week: 13, hours: 0 },
        { week: 14, hours: 0 },
        { week: 15, hours: 0 },
      ],
    },
    lectures: {
      hours: 12,
      distribution: [
        { week: 1, hours: 1 },
        { week: 2, hours: 1 },
        { week: 3, hours: 1 },
        { week: 4, hours: 1 },
        { week: 5, hours: 1 },
        { week: 6, hours: 1 },
        { week: 7, hours: 1 },
        { week: 8, hours: 1 },
        { week: 9, hours: 1 },
        { week: 10, hours: 1 },
        { week: 11, hours: 1 },
        { week: 12, hours: 1 },
        { week: 13, hours: 0 },
        { week: 14, hours: 0 },
        { week: 15, hours: 0 },
      ],
    },
    tutorials: {
      hours: 6,
      distribution: [
        { week: 1, hours: 0.5 },
        { week: 2, hours: 0.5 },
        { week: 3, hours: 0.5 },
        { week: 4, hours: 0.5 },
        { week: 5, hours: 0.5 },
        { week: 6, hours: 0.5 },
        { week: 7, hours: 0.5 },
        { week: 8, hours: 0.5 },
        { week: 9, hours: 0.5 },
        { week: 10, hours: 0.5 },
        { week: 11, hours: 0.5 },
        { week: 12, hours: 0.5 },
        { week: 13, hours: 0 },
        { week: 14, hours: 0 },
        { week: 15, hours: 0 },
      ],
    },
    examPrep: {
      deadline: 15,
      weightage: 50,
      studyHours: 54,
      distribution: [
        { week: 1, hours: 0 },
        { week: 2, hours: 0 },
        { week: 3, hours: 0 },
        { week: 4, hours: 0 },
        { week: 5, hours: 0 },
        { week: 6, hours: 0 },
        { week: 7, hours: 0 },
        { week: 8, hours: 0 },
        { week: 9, hours: 0 },
        { week: 10, hours: 0 },
        { week: 11, hours: 0 },
        { week: 12, hours: 0 },
        { week: 13, hours: 18 },
        { week: 14, hours: 18 },
        { week: 15, hours: 18 },
      ],
    },
    courseworkPrep: [
      {
        deadline: 11,
        weightage: 10,
        studyHours: 10.8,
        distribution: [
          { week: 1, hours: 0 },
          { week: 2, hours: 0 },
          { week: 3, hours: 0 },
          { week: 4, hours: 0 },
          { week: 5, hours: 0 },
          { week: 6, hours: 0 },
          { week: 7, hours: 0 },
          { week: 8, hours: 0 },
          { week: 9, hours: 0 },
          { week: 10, hours: 0 },
          { week: 11, hours: 10.8 },
          { week: 12, hours: 0 },
          { week: 13, hours: 0 },
          { week: 14, hours: 0 },
          { week: 15, hours: 0 },
        ],
      },
      {
        deadline: 7,
        weightage: 30,
        studyHours: 32.4,
        distribution: [
          { week: 1, hours: 0 },
          { week: 2, hours: 0 },
          { week: 3, hours: 0 },
          { week: 4, hours: 0 },
          { week: 5, hours: 0 },
          { week: 6, hours: 16.2 },
          { week: 7, hours: 16.2 },
          { week: 8, hours: 0 },
          { week: 9, hours: 0 },
          { week: 10, hours: 0 },
          { week: 11, hours: 0 },
          { week: 12, hours: 0 },
          { week: 13, hours: 0 },
          { week: 14, hours: 0 },
          { week: 15, hours: 0 },
        ],
      },
    ],
    classtestPrep: [
      {
        deadline: 3,
        weightage: 3.33,
        studyHours: 3.6,
        distribution: [
          { week: 1, hours: 0 },
          { week: 2, hours: 0 },
          { week: 3, hours: 3.59 },
          { week: 4, hours: 0 },
          { week: 5, hours: 0 },
          { week: 6, hours: 0 },
          { week: 7, hours: 0 },
          { week: 8, hours: 0 },
          { week: 9, hours: 0 },
          { week: 10, hours: 0 },
          { week: 11, hours: 0 },
          { week: 12, hours: 0 },
          { week: 13, hours: 0 },
          { week: 14, hours: 0 },
          { week: 15, hours: 0 },
        ],
      },
      {
        deadline: 5,
        weightage: 3.33,
        studyHours: 3.6,
        distribution: [
          { week: 1, hours: 0 },
          { week: 2, hours: 0 },
          { week: 3, hours: 0 },
          { week: 4, hours: 0 },
          { week: 5, hours: 3.59 },
          { week: 6, hours: 0 },
          { week: 7, hours: 0 },
          { week: 8, hours: 0 },
          { week: 9, hours: 0 },
          { week: 10, hours: 0 },
          { week: 11, hours: 0 },
          { week: 12, hours: 0 },
          { week: 13, hours: 0 },
          { week: 14, hours: 0 },
          { week: 15, hours: 0 },
        ],
      },
      {
        deadline: 9,
        weightage: 3.33,
        studyHours: 3.6,
        distribution: [
          { week: 1, hours: 0 },
          { week: 2, hours: 0 },
          { week: 3, hours: 0 },
          { week: 4, hours: 0 },
          { week: 5, hours: 0 },
          { week: 6, hours: 0 },
          { week: 7, hours: 0 },
          { week: 8, hours: 0 },
          { week: 9, hours: 3.59 },
          { week: 10, hours: 0 },
          { week: 11, hours: 0 },
          { week: 12, hours: 0 },
          { week: 13, hours: 0 },
          { week: 14, hours: 0 },
          { week: 15, hours: 0 },
        ],
      },
    ],
  };
  const [modifiedData, setModifiedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const result = [];
    const newdata = {};
    newdata["labHours"] = merge(data.labHours);
    newdata["lectures"] = merge(data.lectures);
    newdata["tutorials"] = merge(data.tutorials);
    newdata["examPrep"] = merge(data.examPrep);
    newdata["classTestPrep"] = merge(data.classtestPrep);
    newdata["courseworkPrep"] = merge(data.courseworkPrep);
    for (let week = 1; week <= 15; week++) {
      const weekObject = { name: `Week ${week}`, week };
      for (const category in newdata) {
        if (category !== "moduleCode" && category !== "moduleCredit") {
          const categoryData = newdata[category];
          if (categoryData.distribution) {
            const hoursForWeek =
              categoryData.distribution.find((item) => item.week === week)
                ?.hours || 0;
            weekObject[category] = hoursForWeek;
          }
        }
      }

      result.push(weekObject);
    }
    setModifiedData(result);
  }, []);
  console.log(modifiedData);
  return (
    <div className="main-chart-container">
      {isOpen && <DetailsModal toggleModal={toggleModal} />}
      <div className="area-chart-container">
        <h1 className="firstHeading">Workload Graph</h1>
        <div className="chart">
          <ResponsiveContainer>
            <LineChart data={modifiedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" label={"Week"} />
              <YAxis>
                <Label value="Study Hours" position="insideLeft" angle={-90} />
              </YAxis>
              <Legend />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="examPrep"
                stroke="#FFFF66"
                name="Exam Prep"
              />
              <Line
                type="monotone"
                dataKey="labHours"
                stroke="#FF6B6B"
                name="Lab Hours"
              />
              <Line
                type="monotone"
                dataKey="lectures"
                stroke="#66FF66"
                name="Lectures"
              />
              <Line
                type="monotone"
                dataKey="tutorials"
                stroke="#4169E1"
                name="Tutorials"
              />
              <Line
                type="monotone"
                dataKey="courseworkPrep"
                stroke="#FFFFFF"
                name="Coursework Prep"
              />
              <Line
                type="monotone"
                dataKey="classtestPrep"
                stroke="#800080"
                name="Class Test Prep"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="insights-container">
        <h1 className="secondHeading">Insights</h1>
        <div className="parent-insights">
          <div className="progress-1">
            <CircularProgressBar percentage={75} />
            <h2 className="h2First">Open Duration(Hours)</h2>
          </div>
          <div className="progress-1">
            <CircularProgressBar percentage={50} />
            <h2 className="h2First">overall Weightage (%)</h2>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="inputt"
        >
          <select name="" id="">
            <option value="">Modules</option>
          </select>
          <button className="details-btn" onClick={toggleModal}>
            Details
          </button>
          <select name="" id="">
            <option value="">Study Style</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Simulations;
