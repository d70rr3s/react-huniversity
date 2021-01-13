const rng = () => Math.floor(Math.random() * 100, 0);

const FooBar = ({ rolled, handler }) => {
    const isEpic = (rolled % 2) === 0;
    return (
        <>
            <p>Has lanzado un {rolled}. {isEpic ? 'Wow! Has ganado un ' : 'Meh! Otro '}
                <span className={isEpic ? 'epic' : 'normal'}>Foo bar</span>
            </p>
            <button className={'roll-button'} onClick={handler}>Voy a probar suerte</button>
        </>
    );
}

const Heading = () => <h1>Hola, mundo!</h1>

const HolaMundo = () => {
    const classList = ['heading'];
    const [rolled, roll] = React.useState(rng());

    const rollHandler = () => {
        roll(rng());
    }

    return (
        <div className={classList}>
            <Heading />
            <FooBar rolled={rolled} handler={rollHandler} />
        </div>
    );
}

ReactDOM.render(React.createElement(HolaMundo), document.getElementById('hola-mundo'));