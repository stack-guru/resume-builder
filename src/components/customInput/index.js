import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './style.css'

function CustomInput(props) {
    const fontStyle = `${ props.size === 'big' ? 'big-text color-text' : 'small-text'} ${props.align === 'center' && 'text-center'} ${props.bottom === 1 && ' text-bottom'}`

    const [textAreaClass, setTextAreaClass] = useState(fontStyle)

    const changeStyle = focus => {
        focus ? setTextAreaClass(`${fontStyle} light-background`) : setTextAreaClass(`${fontStyle}`)
    }

    const handleChange = e => {
        props.setText(e.target.value)
    }

    const handleKeydown = e => {
        const value = e.target.value
        if (props.phone === 1) {
            value.length > 10 && e.preventDefault()
            const key = Number(e.key)
            if (isNaN(key) || e.key === null || e.key === ' ') e.preventDefault()
            return
        } 

        if (props.size === 'big') {
            value.length > 8 && e.preventDefault()
        }
        value.length > 25 && e.preventDefault()
    }

    return (
        <div className='custom-input'>
            {
            props.changable === 1 ? <TextareaAutosize className={textAreaClass} 
                                onFocus={() => changeStyle(true)}
                                onBlur={() => changeStyle(false)}
                                value={props.text}
                                onChange={(e) => handleChange(e)}
                                placeholder={props.placeholder}
                            />
                            :
                            <TextareaAutosize className={textAreaClass} 
                                onFocus={() => changeStyle(true)}
                                onBlur={() => changeStyle(false)}
                                defaultValue={props.text}
                                onKeyPress={(e) => handleKeydown(e)}
                                placeholder={props.placeholder}
                            />
            }
        </div>
    )
}

export default CustomInput