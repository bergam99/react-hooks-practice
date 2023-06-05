// 이 코드는 React 컴포넌트에서 useEffect 훅을 사용하는 예입니다. useEffect는 컴포넌트가 렌더링될 때나 업데이트될 때 특정 동작을 수행할 수 있게 해줍니다. 주어진 코드의 역할을 설명하겠습니다:

import { useState, useEffect } from "react";

const UseEffectCpnt = () => {
  const [val, valSet] = useState(1);
  // useState(1): useState 훅을 사용하여 val이라는 상태 변수와 valSet이라는 상태 변경 함수를 선언합니다. 초기 값으로 1을 설정합니다.

  // useEffect(() => {...}, []): useEffect 훅을 사용하여 컴포넌트가 처음 마운트될 때 한 번만 실행되는 효과를 지정합니다. 빈 배열([])을 의존성 배열로 전달함으로써, 의존성이 없으므로 한 번만 실행됩니다.

  // window.setInterval(() => {...}, 1000): setInterval 함수를 사용하여 1초마다 실행되는 타이머를 생성합니다. 화살표 함수 내부에서는 valSet을 호출하여 val 상태를 업데이트합니다. v는 현재 상태 값을 의미하며, v + 1로 상태를 증가시킵니다.

  useEffect(() => {
    const timer = window.setInterval(() => {
      valSet((v) => v + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  // window.clearInterval(timer): 컴포넌트가 언마운트되거나 업데이트되기 전에 실행되는 클린업 함수입니다. clearInterval 함수를 사용하여 이전에 생성한 타이머를 정리하고 제거합니다.

  return <div>{val}</div>;
};

export default UseEffectCpnt;

// <div>{val}</div>: JSX를 사용하여 val 상태 변수를 출력하는 <div> 요소를 렌더링합니다.
// 요약하면, 위의 코드는 컴포넌트가 처음 마운트될 때 1초마다 val 상태를 1씩 증가시키는 타이머를 생성합니다. 컴포넌트가 언마운트되거나 업데이트되기 전에 타이머를 클리어하고, 렌더링 결과로 현재 val 상태를 보여주는 <div>를 반환합니다.

// 의존성 배열이 빈 배열([])인 경우: useEffect 콜백 함수는 컴포넌트가 처음 마운트될 때 한 번만 실행되고, 그 이후에는 재실행되지 않습니다. 이는 컴포넌트가 처음으로 렌더링될 때만 특정 동작을 수행하고자 할 때 유용합니다.
// 의존성 배열에 상태나 변수가 포함된 경우: 배열에 포함된 상태나 변수 중 하나라도 변경될 때마다 useEffect 콜백 함수가 재실행됩니다. 이는 해당 상태나 변수의 변경에 반응하여 특정 동작을 수행하고자 할 때 유용합니다.
