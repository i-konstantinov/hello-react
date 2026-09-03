const Rule1 = () => {
    return(/*Omitting the element type in the tags creates an empty container like ngContainer*/
        <> 
            <h2>1. Every component must return a single root element</h2>
            <ul>
                <li>you can't return multiple elements sitting side by side</li>
                <li>they need to be wrapped in a parent container</li>
            </ul>
        </>
    )
}

const Rule2 = () => {
    return(
        <> 
            <h2>2. Every single tag must be properly closed</h2>
            <ul>
                <li>even the ones that don't need closing tags in HTML</li>
            </ul>
        </>
    );
};

const Rule3 = () => {
    return( 
        <>
            <h2>3. Attribute names must be written in camelCase</h2>
            <ul>
                <li>Since JSX is and extension of JavaScript, HTML attributes that conflict with JavaScript keywords need different names</li>
                <li>And since attributes written in JSX become keys of JavaScript objects, they need to be valid JavaScript variable names</li>
            </ul>
        </>
    );
}

const Rule4 = () => {
    return(
        <> 
            <h2>4. You can embed JavaScript expressions directly in your markup using curly braces</h2>
        </>
    );
}

export const Rules = () => {
    return(
        <div className="card">
            <h1>JSX Rules:</h1>
            <Rule1 />
            <Rule2 />
            <Rule3 />
            <Rule4 />
        </div>
    )
}