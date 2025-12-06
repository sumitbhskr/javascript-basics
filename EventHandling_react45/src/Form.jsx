function handelFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
    
}


export default function From() {
    return (
        <form>
            <input placeholder="write somthing" />
            <button onClick={handelFormSubmit}>Submit</button>
        </form>
    )
}