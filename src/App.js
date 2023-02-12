import "./App.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
const Array = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "JavaScript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 8,
  },

  {
    name: "C#",
    student: 7,
    fees: 5,
  },

  {
    name: "C++",
    student: 9,
    fees: 10,
  },
];

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "gray" }}>
        Create Line Chart With{" "}
        <strong style={{ color: "black" }}>Abhishek Goyal</strong>
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={Array}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
