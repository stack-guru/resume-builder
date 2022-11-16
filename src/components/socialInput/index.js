import CustomInput from '../customInput'
import './style.css'

function SocialInput(props) {
    return (
        <div className='social-input color-text'>
            {props.icon}
            <CustomInput text={props.text} size='small' align='center' placeholder={props.placeholder}/>
        </div>
    )
}

export default SocialInput