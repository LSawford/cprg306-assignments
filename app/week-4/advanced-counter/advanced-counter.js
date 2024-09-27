


export default function AdvCounter({currentCount, increment, decrement, resetCounter}) {

let PosBtnDisabled = false;
let NegBtnDisabled = false;

if(currentCount >= 10){
    PosBtnDisabled = true;
}

if(currentCount <= -10){
    NegBtnDisabled = true;
}

let btnStyles = "bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-2 hover:bg-blue-400 active:bg-green-700 disabled:bg-gray-400";

    return(
    <main className="bg-slate-300 p-5">
        <h1 className="text-2xl text-black">Simple Counter</h1>
        <p className="text-leg text-black">Count: {currentCount} </p>
        <button className="bg-blue-600 text-white rounded py-2 px-4 mt-5  hover:bg-blue-400  active:bg-green-700 disabled:bg-gray-400" onClick={increment} disabled = {PosBtnDisabled}>Increment </button>
       <p> <button className="bg-blue-600  text-white rounded py-2 px-4 mt-5 hover:bg-blue-400 active:bg-red-700 disabled:bg-gray-400" onClick={decrement} disabled = {NegBtnDisabled}>Decrement</button> </p>
       <p><button className={btnStyles} onClick={resetCounter}>Reset Counter</button></p>
    </main>
    );
}