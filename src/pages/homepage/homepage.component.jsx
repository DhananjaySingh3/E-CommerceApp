import React from 'react';
import './homepage.styles.scss';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

/*
const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
*/

// const HomePage = ({history}) => {
    const HomePage = () => {
    return (
        <div className="homepage">
          {/* <DirectoryMenu history={history}></DirectoryMenu>*/} 
            <DirectoryMenu></DirectoryMenu>
        </div>
    );
};

export default HomePage;