const FooBar = () => <p>Foo bar</p>

const Heading = () => <h1>Hola, mundo!</h1>

const HolaMundo = () => {
    return (
        <div className={'heading'}>
            <Heading />
            <FooBar />
        </div>
    )
}

ReactDOM.render(React.createElement(HolaMundo), document.getElementById('hola-mundo'));