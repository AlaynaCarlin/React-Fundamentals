import {useState} from 'react';
import PropTypes from 'prop-types'

//* functional component
const PropsDemo = () => {
    //* state variables. storing style properties
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    //*props object. stores the style properties that we set in the variables above
    let styles = {
        color : color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign
    };

    //*methods--- ternaries
    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('blue') : setBackgroundColor('purple');
    };

   const toggleBorderRadius = () => {
       borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
   }

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    };

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    //* react elements that represent user-defined components
                <FunctionalComponent string='Border color toggle' function={toggleColor} selectedStyle={color} />
                <FunctionalComponent string='Background color toggle' function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                <FunctionalComponent string='Border radius toggle' function={toggleBorderRadius} selectedStyle={borderRadius} />
                <FunctionalComponent string='Border style toggle' function={toggleBorderStyle} selectedStyle={borderStyle} />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

//* being called lines 48-51. being passed string, function, selectedStyle
const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p> //* value of string defined on call
            <button onClick={props.function}>Press me</button>//* when clicked call the toggle color method
            <TinyComponent selectedStyle={props.selectedStyle} />//* call a component. 
        </div>
    );
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : { props.selectedStyle }</p>//* 
        </div>
    );
};

//! function isn't running (modules 6.7) & chelsey doesn't know why
FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
}
//!-----------------------------------------------------------------

FunctionalComponent.propsTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}