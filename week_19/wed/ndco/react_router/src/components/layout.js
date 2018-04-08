import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Tacos from './tacos';

const Layout = () => {
    return (
        <div className='layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/tacos'>Tacos</Link></li>
                        <li><Link to='/pizza'>Pizza</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/tacos' component={Tacos} />
                <Route path='/pizza' render={() => <div>PIZAA</div>} />
            </div>
        </div>
    )
}

export default Layout;