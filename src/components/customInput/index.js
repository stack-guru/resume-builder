import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './style.css'

function CustomInput(props) {
    const fontStyle = `${ props.size === 'big' ? 'big-text color-text' : 'small-text'} ${props.align === 'center' && 'text-center'}`

    const [textAreaClass, setTextAreaClass] = useState(fontStyle)

    const changeStyle = focus => {
        focus ? setTextAreaClass(`${fontStyle} light-background`) : setTextAreaClass(`${fontStyle}`)
    }

    const handleChange = e => {
        props.setText(e.target.value)
    }

    return (
        <div className='custom-input'>
            <TextareaAutosize className={textAreaClass} 
                                onFocus={() => changeStyle(true)}
                                onBlur={() => changeStyle(false)}
                                defaultValue={props.text}
                                onChange={(e) => handleChange(e)}
                                placeholder={props.placeholder}
                            />
        </div>
    )
}

export default CustomInput