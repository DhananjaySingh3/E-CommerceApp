import React from 'react';
import './preview-collections.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollections = ({ title, items }) => {
    console.log(title, items);
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, index) => {
                        return index < 4;
                    }
                    )
                        .map(({ id, ...otherItemProps }) => {
                            return (
                                <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                            )
                        }
                        )
                }
            </div>
        </div>
    );
};

export default PreviewCollections;