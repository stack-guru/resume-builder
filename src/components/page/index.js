import ExperienceCard from '../experienceCard';
import InfoCard from '../infoCard';

import './style.css'

function Page(props) {
    return (
        <div className='page'>
            {props.cards}
        </div>
    )
}

export default Page;