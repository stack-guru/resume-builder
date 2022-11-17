import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import CustomInput from '../customInput'
import { FaPlusCircle } from "react-icons/fa"
import { FaMinusCircle } from "react-icons/fa"
import { addCard, removeCard, updateCard } from '../../reducers/slice'
import { DatePicker } from 'antd'
import './style.css'
const { RangePicker  } = DatePicker

const margin = 14
const border = 4

function ExperienceCard({detail}) {
    const dispatch = useDispatch()

    const [showBorder, setShowBorder] = useState(false)
    const ref = useRef()

    const setText = (text, kind) => {
        const height = ref.current.clientHeight + margin + border
        
        dispatch(updateCard({id: detail.id, kind, text, height}))
    }
    
    return(
        <div ref = {ref} className={`experience-card ${showBorder && 'dashed'}`} onMouseOver={() => setShowBorder(true)} onMouseLeave={() => setShowBorder(false)}>
            {showBorder && <div className='buttons'>
                {detail.id !== 1 && <span className='remove-button' onClick={() => dispatch(removeCard(detail.id))}>
                    <FaMinusCircle />
                </span>}
                <span className='add-button' onClick={() => dispatch(addCard(detail.id))}>
                    <FaPlusCircle />
                </span>
            </div>}
            <CustomInput changable = {1} text = {detail.company} size = 'small' align = 'left' bottom={1} placeholder="Company" setText = {(text) => setText(text, 'company')}/>
            <CustomInput changable = {1} text = {detail.title} size = 'small' align = 'left' bottom={1} placeholder="Title" setText = {(text) => setText(text, 'title')}/>
            <CustomInput changable = {1} text = {detail.description} size = 'small' align = 'left' bottom={1} placeholder="description" setText = {(text) => setText(text, 'description')}/>
            <RangePicker picker='month' bordered={false}/>
        </div>
    )
}

export default ExperienceCard