const FooBar = (props) => {
    const isEpic = (props.roll % 2) === 0;
    return (
        <p>{isEpic ? 'Wow! Has ganado un ' : 'Meh! Otro '}
            <span className={isEpic ? 'epic' : 'normal'}>Foo bar</span>
        </p>
    );
}

const Heading = () => <h1>Hola, mundo!</h1>

const HolaMundo = () => {
    const classList = ['heading'];
    const randomFlag = Math.floor(Math.random() * 100, 0);

    return (
        <div className={classList}>
            <Heading />
            <FooBar roll={randomFlag} />
        </div>
    );
}

ReactDOM.render(React.createElement(HolaMundo), document.getElementById('hola-mundo'));