import "./my.css";
import { Row, Col } from "react-bootstrap";
import { MyTime } from "./Components/MyTime";
import { Parent } from "./Components/Parent";
import { MyLife } from "./Components/MyLife";
import { Dashboard } from "./Components/Dashboard";
import ErrorBoundary from "./Components/ErrorBoundaries";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
      <ErrorBoundary>
        <Parent />
      </ErrorBoundary>
      <ErrorBoundary>
        <MyTime />
      </ErrorBoundary>
    </div>
  );
}

export default App;
