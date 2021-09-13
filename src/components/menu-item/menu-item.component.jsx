import React from 'react';
import './menu-item.styles.scss';

import { withRouter } from 'react-router-dom';

/* As a Functional Component
const MenuItem = (props) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);
De-Structuring the props as shown below*/

// const MenuItem = ({ title, id, imageUrl, size, history }) => (
    const MenuItem = ({ title, id, imageUrl, size, }) => (
    <div className={`${size} menu-item`}>
    <div style={{ backgroundImage: `url(${imageUrl})` }} className={`background-image`} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem); // export default withRouter(MenuItem); This will return MenuItem with props "history,locationa and match"

/*As a Class Component
export default class MenuItem {
    constructor(props) {
        super(props);
    };

    render(
        return(
            <div>
            </div>
        );
    );
};

export default MenuItem;*/
