import Avatar from '../avatar';
import CustomInput from '../customInput';
import SocialInput from '../socialInput';
import Title from '../title';

import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import './style.css'

function InfoCard() {
    return (
        <div className='info-card'>
            <Avatar />
            <CustomInput text = 'Oliver' size = 'big' align = 'center'/>
            <CustomInput text = 'Chang' size = 'big' align = 'center'/>

            <hr />
            <Title text="CONTACT" />
            <SocialInput icon = {<BsFillEnvelopeFill />} text = 'william.vic0019@gmail.com'/>
            <SocialInput icon = {<BsLinkedin />} text = '' placeholder='LinkedIn'/>
            <SocialInput icon = {<BsTelephoneFill />} text = '' placeholder='Phone' phone = {1}/>
            <hr />
            <Title text="EXPERIENCE" />
        </div>
    )
}

export default InfoCard
