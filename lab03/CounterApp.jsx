import StepCounter from "./StepCounter";

function CounterApp() {
    return (
        <div>
            <h1>Counter App</h1>
            <StepCounter initialValue={0} step={1}/>
            <StepCounter initialValue={10} step={5}/>
        </div>
    );
}

export default CounterApp;