import ExperienceCard from '../experienceCard';
import InfoCard from '../infoCard';

import './style.css'

function Page(props) {
    
    return (
        <div className='page'>
            {
                props.cards.map((e, i) => e.name === 'info' ? <InfoCard key={i}/> : <ExperienceCard detail={e} key={i}/>)
            }            
        </div>
    )
}

export default Page;