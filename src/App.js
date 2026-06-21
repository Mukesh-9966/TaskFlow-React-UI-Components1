import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import InputField from "./components/InputField/InputField";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Reusable Components Demo</h1>

        <InputField placeholder="Enter Task Name" />

        <br />
        <br />

        <Button
          text="Add Task"
          onClick={() => alert("Task Added Successfully")}
        />

        <br />
        <br />

        <Card
          title="React Internship Task"
          description="Build reusable UI components using ReactJS."
        />

        <Modal show={true}>
          <h3>Sample Modal</h3>
          <p>This is a reusable modal component.</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;