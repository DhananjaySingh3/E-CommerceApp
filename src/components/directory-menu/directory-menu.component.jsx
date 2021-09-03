import React from 'react';
import './directory-menu.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

/*
const DirectoryMenu = () => {
    return(
        <div>
            <div className="directory-menu">
                <MenuItem></MenuItem>
            </div>
        </div>
    );
};
*/

/*This is shortcut for above syntax where we dont have to use return 
const DirectoryMenu = () => (
    <div className="directory-menu">
        <MenuItem title="Test"></MenuItem>
    </div>
);

export default DirectoryMenu;
*/

/*This will be a class function as we need to have data for menu-item hence state and if state then class function */

/*
class DirectoryMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSections: [],
        };
    };

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.menuSections.map(
                        (section) => {
                        return <MenuItem title={section.title} key={section.key}/>
                        }
                    )
                }
            </div>
        );

    };
}

*/

class DirectoryMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSections: [
                { title: 'hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', id: 1 },
                { title: 'womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', id: 2 },
                { title: 'jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', id: 3 },
                { title: 'sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakeers.png', id: 4, size: 'large' },
                { title: 'mens', imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png', id: 5, size: 'large' },
            ],
        };
    };

    render() {
        return (
            <div className="directory-menu">
                {this.state.menuSections.map(
                    ({ title, id, imageUrl, size }) => (
                        <MenuItem title={title} imageUrl={imageUrl} key={id} size={size} />
                    )
                )
                }
            </div>
        );
    };

}


export default DirectoryMenu;