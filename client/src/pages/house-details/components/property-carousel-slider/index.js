import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Helmet } from "react-helmet";

const CarouselSlider = () => {
    return (

        <>
            <Helmet>
                <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/jquery-11.0.min.js'></script>
                <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/unitegallery.min.js'></script>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/unite-gallery.css" />
                <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/ug-theme-default.js'></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/ug-theme-default.css" />

            </Helmet>
            <div className="col-12" style={{ marginTop: 20 }}>

                <div id="gallery" style={{ display: 'none' }}>
                    <img alt="Preview Image 1" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb1.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image1.jpg" data-description="Preview Image 1 Description" />
                    <img alt="Preview Image 2" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb2.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image2.jpg" data-description="Preview Image 2 Description" />
                    <img alt="Youtube Video" data-type="youtube" data-videoid="A3PDXmYoF5U" data-description="You can include youtube videos easily!" />
                    <img alt="Preview Image 3" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb3.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image3.jpg" data-description="Preview Image 3 Description" />
                    <img alt="Vimeo Video" data-type="vimeo" src="http://i.vimeocdn.com/video/447294219_200x150.jpg" data-image="http://i.vimeocdn.com/video/447294219_640.jpg" data-videoid={73234449} data-description="This gallery can also play vimeo videos!" />
                    <img alt="Preview Image 4" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb4.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image4.jpg" data-description="Preview Image 4 Description" />
                    <img alt="Html5 Video" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/html5_video.png" data-type="html5video" data-image="http://vjs.zencdn.net/v/oceans.png" data-videoogv="http://vjs.zencdn.net/v/oceans.ogv" data-videowebm="http://vjs.zencdn.net/v/oceans.webm" data-videomp4="http://vjs.zencdn.net/v/oceans.mp4" data-description="This is html5 video demo played by mediaelement2 player" />
                    <img alt="Preview Image 5" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb1.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image1.jpg" data-description="Preview Image 5 Description" />
                    <img alt="Wistia Video" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/wistia_video.jpg" data-type="wistia" data-image="images/big/wistia_video.jpg" data-videoid="9oedgxuciv" data-description="Hey, the gallery plays Wistia videos too!" />
                    <img alt="Preview Image 6" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb2.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image2.jpg" data-description="Preview Image 6 Description" />
                    <img alt="Sound Cloud Track" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/sound_cloud.jpg" data-type="soundcloud" data-image="images/thumbs/sound_cloud.jpg" data-trackid={8390970} data-description="This gallery can play a soundcloud track" />
                    <img alt="Preview Image 7" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb3.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image3.jpg" data-description="Preview Image 7 Description" />
                    <img alt="Preview Image 8" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb4.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image4.jpg" data-description="Preview Image 8 Description" />
                    <img alt="Preview Image 9" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb1.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image1.jpg" data-description="Preview Image 9 Description" />
                    <img alt="Preview Image 10" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb2.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image2.jpg" data-description="Preview Image 10 Description" />
                    <img alt="Preview Image 11" src="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/thumbs/thumb3.jpg" data-image="https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/images/big/image3.jpg" data-description="Preview Image 11 Description" />
                </div>

            </div>
            <Helmet>

                <script type='text/javascript' src='https://cdn.jsdelivr.net/gh/sushilreact/uploadassets/gallery.js'></script>
            </Helmet>
        </>
    )
}

export default CarouselSlider;