(() => {
    "use strict";

    const root = document.querySelector("#root");

    const myReactComponent = React.createElement("h1", {}, "I am creating my first React component");

    console.log(myReactComponent);

    const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"));

    console.log(myNestedReactComponent);

    // const App = React.createElement("h1", {}, "Our First React page has rendered");
    // const App = myReactComponent;
    // const App = myNestedReactComponent;
    //  SYNTACTIC SUGAR w/JSX and Babel
    const App = () => <h1>Our First React Page has rendered AGAIN!!!</h1>;
    ReactDOM.render(<App />, root);

})();


