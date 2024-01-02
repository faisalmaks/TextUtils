import React, {useState} from 'react'



export default function TextForm(props) {
    const handleExtraSpaces = () => {
        let newText3 = text.split(/[ ]+/);
        setText(newText3.join(' '));
        props.showAlert("Etra spaces removed!","sucessfully")
    }
    const handleUpperCase = () => {
        let newText1=text.toUpperCase();    
        setText(newText1);
        props.showAlert("Upper case done!","sucessfully")
    }
    const handleLowerCase = () => {
        let newText2=text.toLowerCase();    
        setText(newText2);
        props.showAlert("Lower case done!","sucessfully")
    }
    const handleClearText = () => {
        let newText4='';    
        setText(newText4);
        props.showAlert("Text cleared!","sucessfully")
    }
    const [fStyle, setFontStyle] = useState({
        fontStyle: 'normal',
    });
    const toggleStyle = () => { 
        if(fStyle.fontStyle==='normal'){
            setFontStyle({
                fontStyle: 'italic',
            });
            props.showAlert("Italic style activated!","sucessfully")
        }
        else if(fStyle.fontStyle==='italic'){
            setFontStyle({
                fontStyle: 'oblique',
            });
            props.showAlert("Oblique style activated!","sucessfully")
        }
        else{
            setFontStyle({
                fontStyle: 'normal',
            });
            props.showAlert("Normal style activated!","sucessfully")
        }
        
    }
    const [fWeight, setFWeight] = useState({
        fontWeight: 'normal',
    });
    const toggleWeight = () => { 
        if (fWeight.fontWeight === 'normal') {
            setFWeight({
                fontWeight: 'bold',
            });
            props.showAlert("Text bold done!","sucessfully")
        } else if (fWeight.fontWeight === 'bold') {  
            setFWeight({
                fontWeight: 900,
            });
            props.showAlert("Text weight is 900 activated!","sucessfully")
        } else {
            setFWeight({
                fontWeight: 'normal',
            });
            props.showAlert("Normal weight activated!","sucessfully")
        }
    };
    const handleOnChange=(event)=> {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color:props.mode==='light'? 'black':'white'}} >
        <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea  value={text} style={{backgroundColor: props.mode ==='light'? 'white':'grey',color:props.mode==='light'? 'black':'white', fontStyle:fStyle.fontStyle, fontWeight:fWeight.fontWeight}} onChange={handleOnChange} className="form-control" id="myText" rows="5"></textarea>
            </div>
        <button onClick={handleUpperCase} className={`btn btn-${props.btn}`}>{props.button1}</button>
        <button onClick={handleLowerCase} className={`btn btn-${props.btn} mx-3`}>{props.button2}</button>
        <button onClick={handleClearText} className={`btn btn-${props.btn} mx-3`}>{props.button3}</button>
        <button onClick={handleExtraSpaces} className={`btn btn-${props.btn} mx-3`}>{props.button4}</button>
        <button onClick={toggleStyle} className={`btn btn-${props.btn} mx-3`}>{props.button5}</button>
        <button onClick={toggleWeight} className={`btn btn-${props.btn} mx-3`}>{props.button6}</button>
    </div>
    <div className='container my-1' style={{color:props.mode ==='light'? 'black':'white'}} >
        <h2 >Word and letter counter</h2>
            <p>you have entered {text.split(' ').length} words and {text.length} letters.</p>
        <h2>Reading time calculator</h2>
            <p>It will take {0.48*text.split(' ').length} seconds to read it</p>
        <h2>Preview your text</h2>
            <p>{text}</p>
    </div>
    </>
  )
}
TextForm.defaultProps={
    heading:'TEXT',
    button1:'Click',
    button2:'Click',
    button4:'Click'
} 