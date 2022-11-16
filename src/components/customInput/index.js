import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './style.css'

function CustomInput(props) {
    const fontStyle = `${ props.size === 'big' ? 'big-text color-text' : 'small-text'} ${props.align === 'center' && 'text-center'}`

    const [text, setText] = useState(props.text)
    const [textAreaClass, setTextAreaClass] = useState(fontStyle)

    const changeStyle = focus => {
        focus ? setTextAreaClass(`${fontStyle} light-background`) : setTextAreaClass(`${fontStyle}`)
    }

    return (
        <div className='custom-input'>
            <TextareaAutosize className={textAreaClass} 
                                onFocus={() => changeStyle(true)}
                                onBlur={() => changeStyle(false)}
                                defaultValue={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={props.placeholder}
                            />
        </div>
    )
}

export default CustomInput