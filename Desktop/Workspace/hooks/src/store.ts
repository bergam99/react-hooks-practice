// store.ts 파일: createContext 함수를 사용하여 초기 상태를 가진 Context 객체를 생성합니다.
import { createContext } from "react";

const initialState = {
  first: "Jack",
  last: "Herrington",
};

// UserState 타입은 initialState의 타입으로 정의됩니다. 이후 context를 내보내어 다른 컴포넌트에서 사용할 수 있도록 합니다.
export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
