import { useState } from 'react'
import CustomInput from '../customInput'
import { FaPlusCircle } from "react-icons/fa"
import { FaMinusCircle } from "react-icons/fa"
import './style.css'

function ExperienceCard() {
    const [showBorder, setShowBorder] = useState(false)
    
    return(
        <div className={`experience-card ${showBorder && 'dashed'}`} onMouseOver={() => setShowBorder(true)} onMouseLeave={() => setShowBorder(false)}>
            {showBorder && <div className='buttons'>
                <span className='remove-button' onClick={() => console.log('remove')}>
                    <FaMinusCircle />
                </span>
                <span className='add-button' onClick={() => console.log('add')}>
                    <FaPlusCircle />
                </span>
            </div>}
            <CustomInput text = '' size = 'small' align = 'left' placeholder="Company"/>
            <CustomInput text = '' size = 'small' align = 'left' placeholder="Title"/>
            <CustomInput text = '' size = 'small' align = 'left' placeholder="description"/>
        </div>
    )
}

export default ExperienceCard