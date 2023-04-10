import React from 'react';
import PropTypes from 'prop-types';
import Albumlist from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name:'Nàng Thơ Indie Việt',
            thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/9/f/7/69f79743891040db77ab1212afd95701.jpg'
        },
        {
            id:2,
            name:'Cho Ngày Làm Việc',
            thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/c/4/4/dc44b14e190e9a7e6ac3bf94f38d86df.jpg'
        },
        {
            id:3,
            name:'V-Pop: 100 Hits Thập',
            thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/a/9/e/0a9e43f3bc9346957f2750d2f1c0fb32.jpg'
        },
        {
            id:4,
            name:'Nàng Thơ Indie Việt',
            thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/4/2/9/542921046c4eff5a7b54439673d85c50.jpg'
        }
    ]
    return (
        <div>
            <h2>có thể bạn sẽ thích</h2>
            <Albumlist albumList={albumList}></Albumlist>
        </div>
    );
}

export default AlbumFeature;