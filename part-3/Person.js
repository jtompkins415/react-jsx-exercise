const Person = ({name, age, hobbies}) => {
    let voteText = age >= 18 ? "Go vote!" : "You must be 18";
    let shortName = name.length > 8 ? name.slice(0,5) : name
    let hobbyMap = hobbies.map(h => (
        <li>
            {h}
        </li>
    ))
    return (
        <div>
            <p> Learn some more information about this person:</p>
            <h3>
                Name: {shortName}
            </h3>
            <ul>
               Hobbies: {hobbyMap}
            </ul>
            <h3>
                {voteText}
            </h3>
            
        </div>
    )
}