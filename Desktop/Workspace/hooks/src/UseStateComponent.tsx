import { Fragment, useState } from "react";

const UseStateComponent = () => {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, nameSet] = useState<string | null>(null);

  return (
    <Fragment>
      <div>
        {/* arrSet([...arr, arr.length + 1]): 이 화살표 함수 내부의 코드입니다. useState 훅에서 제공하는 arrSet 함수를 사용하여 상태 변수 arr을 업데이트합니다. 기존의 arr 요소를 전개 연산자([...arr])로 펼친 후 새 요소(arr.length + 1)를 추가하여 새 배열을 생성합니다. 그런 다음 이 새 배열을 arrSet에 전달하여 상태를 업데이트합니다. */}
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add To Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet("jack")}>Set name</button>
        {JSON.stringify(name)}
        {/* React 컴포넌트에서 상태를 출력하려면 상태 변수의 값을 문자열로 변환해야 합니다. JSON.stringify()를 사용하여 배열 arr과 문자열 name을 JSON 문자열로 변환한 후, 변환된 문자열을 컴포넌트의 JSX 내부에서 출력하고 있습니다. 이렇게 하면 상태 변수의 값을 화면에 표시할 수 있습니다. 
        JSON.stringify()를 사용하지 않고, 상태 변수 arr과 name을 직접 출력하면 JavaScript 객체 또는 배열의 문자열 표현이 출력됩니다. JSON.stringify()를 사용하여 JSON 문자열로 변환하면 좀 더 가독성이 좋은 형태로 출력됩니다. */}
      </div>
    </Fragment>
  );
};

export default UseStateComponent;
