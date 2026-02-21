import StepCounter from "./StepCounter"

/*
Props = data passed from parent to child (initialValue, step).
State = internal data inside component (count, history, operationCount).
Each StepCounter keeps its own independent state.
*/

function CounterApp() {
  return (
    <>
      <h2>Advanced Counter App</h2>
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </>
  )
}

export default CounterApp