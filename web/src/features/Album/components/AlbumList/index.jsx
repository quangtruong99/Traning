import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

Albumlist.propTypes = {
    albumList:PropTypes.array.isRequired
};

function Albumlist({albumList}) {


    return (
        <div>
            <ul className='albumlist'>
                {albumList.map(album => (
                    <li key={album.id}>
                        <Album album={album}></Album>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Albumlist;