class FooBar extends React.Component {
    render() {
        return React.createElement('p', null, 'Foo bar');
    }
}

class HolaMundo extends React.Component {
    render() {
        return React.createElement('div', null, [
            React.createElement('h1', null, 'Hola, mundo'),
            React.createElement(FooBar)
        ]);
    }
}

ReactDOM.render(React.createElement(HolaMundo), document.getElementById('hola-mundo'));