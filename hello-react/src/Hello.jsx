import React from "react";

export const Hello = () => {
    return(
        <div>
            <h1>Hello, Ivan jsx comp</h1>
        </div>
    )
};

export const HelloWithoutJSX = () => {
    return React.createElement(
        "div", // type of element
        {id: "container"}, // attrs
        React.createElement("h1", null, "Hello, Ivan noJSX") // children
    );
}