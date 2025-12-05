function handleClick(event) {
  console.log("Hello");
  console.log(event);
  
}

function handelMouseOver() {
  console.log("bye");
}

function handledbClick(){
    console.log("you double cilked");
    
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handelMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod beatae
        magnam saepe molestiae veniam, eaque molestias itaque dolores commodi
        fugiat aperiam consequuntur!
      </p>
      <button onDoubleClick={handledbClick}>double click me!</button>
    </div>
  );
}
