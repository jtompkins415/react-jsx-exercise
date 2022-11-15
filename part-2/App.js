const App = () => {
    return (
        <div>
            <Tweet username="SOOPERHUMAN25" name="John Tompkins" date="05-25-21" message="Lorem Ipsum"/>
            <Tweet username="Cterry248" name="Caitlin Terry" date="12-24-20" message="Locked Down for the holidays and loving it!"/>
            <Tweet username="SeaCumber" name="Scott Macumber" date="06-25-22" message="I HATE BURGERS!!"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))