import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
Album.propTypes = {
    album:PropTypes.object
};



function Album({album}) {
    // function useMagicColor() {
    //     const [color,setColor] = useState('');
    //     useEffect(()=> {
    //         const intervalRef = setInterval(() => {
    //             const now = new Date();
    //             console.log(now);
    //             const newTimeString = Moment(now,"DD/MM/YYYY");
    //             const dateObject = newTimeString.toDate();
    //             setColor(dateObject.toString())
    //         }, 2000);
    //         return () => {
    //             clearInterval(intervalRef)
    //         }
    //     })
    //     return color
    // }
    // const color = useMagicColor();
    return (
        <div>
            {/* <span>{color}</span> */}
            <h1>{album.name}</h1>
            <img src={album.thumbnail} alt={album.name} />
        </div>
    );
}

export default Album;