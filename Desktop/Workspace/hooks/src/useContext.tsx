import { useState, useContext } from "react";
import UserContext, { UserState } from "./store";

// using useContext
// CunsumerComponent 컴포넌트: useContext 훅을 사용하여 UserContext에서 user 상태를 가져옵니다. 그리고 해당 상태를 화면에 표시합니다.
function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First:{user.first}</div>
      <div>Last : {user.last}</div>
    </div>
  );
}

function UseContext() {
  const [user, userSet] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          userSet({
            first: "Josie",
            last: "Wales",
          })
        }
      >
        {" "}
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default UseContext;
