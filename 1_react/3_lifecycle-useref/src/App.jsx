import { useState } from "react";
import CounterClass from "./components/ClassComponent";
import CounterFunction from "./components/FuncitonComponent";
import UserSelector from "./components/UserSelector";
import User from "./components/User";
import UseRef from "./useRef/Useref";
import FormExample from "./useRef/FormExample";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App d-flex flex-column p-4">
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-primary mt-5 mx-3"
      >
        Gizle/Göster
      </button>
      {isOpen && <CounterFunction />} */}
      {/* <UserSelector /> */}

      {/* <User /> */}

      <UseRef />

      <FormExample />
    </div>
  );
}

export default App;
