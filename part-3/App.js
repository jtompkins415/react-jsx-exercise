const App = () => {
    return (
        <div>
            <Person name="Marigold" age={32} hobbies={["dancing", "biking", "cooking"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))