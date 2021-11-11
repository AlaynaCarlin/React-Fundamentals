import {
    Route,
    Link,
    Routes
} from 'react-router-dom'; //! **
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponent/FunctionalComponentsDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/jsxrules'>JSX Rules</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='/propsdemo'>Props Demo</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/resources' element={<Resources/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/functionalcomponent' element={<FunctionalComponentDemo />} />
                    <Route exact path='/jsxrules' element={<JSXRules />} />
                    <Route exact path='/state' element={<State />} />
                    <Route exact path='/effects' element={<Effects />} />
                    <Route exact path='/propsdemo' element={<PropsDemo />} />
                </Routes>
            </div>
        </div>
    );
};

export default Sidebar;