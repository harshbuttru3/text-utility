import React, {useState} from 'react'


function Main(props) {
   const [text, setText] = useState("") 
   const handleOnChange = (event) =>{
    setText(event.target.value);
   }
   const upCase = () =>{
    let newText = text.toUpperCase();
    setText(newText)
   }
   const lowCase =() => {
    let newText = text.toLowerCase();
    setText(newText);
   }
   const cap = () => {
    let words = text.split(" ");
    for(let i = 0; i< words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
       
    }
    let newText = words.join(" ")
    setText(newText)
   }


   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleSpeakClick = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech synthesis
    }
    speak(); // Call the speak function after user interaction
  }


    return ( <>
    <h1> {props.heading}</h1>
    <textarea name="text" id="text" cols="30" rows="10" value={text} onChange={handleOnChange} className='border-slate-600 border-2 p-6' ></textarea> <br />
    <button className='bg-green-500 hover:bg-green-600 border rounded border-x-2' onClick={cap}>Capitalzied</button>
    <button className='bg-green-500 hover:bg-green-600 border rounded border-x-2' onClick={upCase}>Upper Case</button>
    <button className='bg-green-500 hover:bg-green-600 border rounded border-x-2' onClick={lowCase}>Lower Case</button>
    <button type="submit" onClick={handleSpeakClick} className="bg-green-500 hover:bg-green-600 border rounded border-x-2" id="toggle">
  Speak
</button>
    <h2 className='text-4xl mt-6'>Your Text Summary</h2>
    <h3 className='text-lg '> <strong> {text.split(" ").length}  words </strong> and <strong> {text.length} characters </strong> count</h3>
    <h3 className='text-lg'> <strong> {text.split(" ").length * 0.00420168067} Minutes to read </strong> </h3>
    <h2 className='text-4xl mt-6' > Preview </h2>
    <p>{text} </p>
    </> );
}


export default Main;
