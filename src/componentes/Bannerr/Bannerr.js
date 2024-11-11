import './Bannerr.css'


export const Bannerr = ({image}) => {
    // JSX
    return (
        <header className="bannerr">
            <img src={image} alt="O banner"/>
        </header>
    )
}