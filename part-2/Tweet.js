const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{date}</div>
            <p>{message}</p>
        </div>
    )
};