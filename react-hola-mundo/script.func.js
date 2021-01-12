const FooBar = () => React.createElement('p', null, 'Foo bar')

const HolaMundo = () => React.createElement('div', null, [
    React.createElement('h1', null, 'Hola, mundo'),
    React.createElement(FooBar)
])

ReactDOM.render(React.createElement(HolaMundo), document.getElementById('hola-mundo'));