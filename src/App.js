import LoginRouter from "./routers/LoginRouter"
import { AuthContext } from "./context/AuthContext";
import { authReducer } from "./Reducers/AuthReducer";
import { useEffect, useReducer } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem('log')) || {log: false}
}

const App = () => {
  
  const [log, dispatch] = useReducer(authReducer, {}, init);
  
  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(log));
  }, [log]);
  

  return (
    <>
      <AuthContext.Provider value={{
        log, dispatch
      }}>
        <LoginRouter />
      </AuthContext.Provider>
    </>
  )
};

export default App;
