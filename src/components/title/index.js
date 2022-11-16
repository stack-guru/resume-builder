import './style.css'

function Title(props) {
    return (
        <>
            <div className='title-container'>
                <span className='color-text title'>{props.text}</span>
            </div>
        </>
    )
}

export default Title