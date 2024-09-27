

export default function NewItem({quantity, increment, decrement}) {   

    let btnStyles = "bg-blue-600 text-white rounded py-2 px-4 mt-5 mr-2 hover:bg-blue-400 active:bg-green-700 disabled:bg-gray-400";

    return(
        <main class="flex justify-center w-full">
            <div class="p-2 m-4 bg-white text-white w-36">
            <span className="text-black mr-5">{quantity}</span>
            <button className={btnStyles} onClick={increment}>+</button>
            <button className={btnStyles} onClick={decrement}>-</button>
            </div>
        </main>
    );
}
