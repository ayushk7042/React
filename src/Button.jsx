function printHello(event) {
    event.preventDefault();
        console.log ("hii");
    
}

export default function Button() {
    return (
        <div>
            <form > <input placeholder= "write something"/>
            <button onClick={printHello}>submit me </button>
            </form>
            <button onClick= {printHello}>click me</button>
        </div>
    )
}