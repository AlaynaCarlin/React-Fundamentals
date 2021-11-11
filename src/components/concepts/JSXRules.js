import React from "react";

const JSXRules = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles html</dt>
                    <dd>It;s not. It's actually closer to javaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construt and update the Dom, or what you see on the screen</dd>

                    <dt>Not required</dt>
                    <dd>you can write in vanilla JS, but most people use JSX</dd>
                </dl>
            </div>
            <NormalComponent />
            <CreateElementComponent />
        </div>
    );
};
const NormalComponent = () => {
    return(
        <div style={{ border: '2px solid black'}}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src='https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg' />
        </div>
    );
};

const CreateElementComponent = () => {
    return(
        React.createElement('div', { style: { border: '2px solid black' } },
        React.createElement('h1', null, 'Create Element Component'),
        React.createElement('p', null, 'this was constructed with createElement() in the return'),
        React.createElement('img', {src: 'https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18krMhA.png' }, null)
        )
    );
};


export default JSXRules;