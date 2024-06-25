export const Albom = ({ name, year, children}) => {
    return <div>
        <h1>{name}</h1>
        <p>Relisd in {year}</p>
        {children}
    </div>
}