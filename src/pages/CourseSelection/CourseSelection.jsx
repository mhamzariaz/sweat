import "./CourseSelection.css";
import MyTable from "../../components/EditableTable/Table.jsx";
import MyTable2 from "../../components/EditableTable/Table2.jsx";
import {useState} from "react";
const CourseSelection = () => {
  const creditOptions = [
    {
      title: "7.5",
      value: "7.5",
    },
    {
      title: "15",
      value: "15",
    },
  ];

  const [timetabledHours, setTimeTabledHours] = useState("");
  const [credits, setCredits] = useState("");
  const [code, setCode] = useState("");


  return (
    <div className="rootContainer">
      <div className="rootc">
        <div className="rootn">
          <div className="heading">
            <h1>Input Module Details</h1>
          </div>
          <div className="inputContainer">
            <div>
              <div className="texti">Module Code</div>
              <div className="inputSize">
                <input type="text" onChange={(e) => setCode(e.target.value)}/>
              </div>
            </div>

            <div>
              <div className="texti">Module Credit</div>
              <div id="Credit" className="inputSize">
                <select name="credit" id="credit" onChange={e => setCredits(e.target.value)}>
                  {creditOptions?.map((option) => (
                    <option value={option?.value}>{option.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="texti">TimeTabled Hours</div>
              <div id="timetable" className="inputSize">
                <input type="text" onChange={(e) => setTimeTabledHours(e.target.value)}/>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            paddingLeft: "5%",
          }}
          className={"textui"}
        >
          <h1>Teaching Schedule</h1>
          <MyTable credits={credits} hours={timetabledHours} code={code}/>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            paddingLeft: "5%",
          }}
          className={"textui"}
        >
          <h1>Assessments Schedule</h1>
          <MyTable2 credits={credits} hours={timetabledHours} code={code}/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseSelection;
