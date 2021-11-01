import React, { useState, useEffect } from 'react';
import axios from 'axios'

//component to display images
export default function DisplayImages() {

    const [images, setImages] = useState([])

    //helper function to generate an array of images
    function getImagesArray(imageObject) {
        let imageArry = []
        for (const image in imageObject) {
            imageArry.push({
                title: imageObject[image].title,
                imageInfo: imageObject[image].imageinfo,
            })
        }
        setImages([...imageArry])
    }

    useEffect(async () => {
        //get the images from wikipedia api
        await axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&list=&pageids=21648&generator=images&iiprop=timestamp%7Cuser%7Curl&iiurlparam=&gimlimit=100')
            .then(response => {
                getImagesArray(response.data.query.pages)
            })

    }, [])

    return (
        <div className="row card-deck">
            {images.map((image, index) => {
                const imageDate = new Date(image.imageInfo[0].timestamp).toDateString()
                return (
                    <>
                        {image.imageInfo !== undefined && <div className="col col-md-3 p-2 card h-100" key={index}>
                            <a
                                href={image.imageInfo[0].descriptionurl}
                                className="no-decoration"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={image.imageInfo[0].url}
                                    width="200" height="200"
                                />
                            </a>
                            <div className="card-body p-0">                                
                                <p className="card-text">
                                    {image.title.substring(5).split('.').slice(0, -1).join('.')}
                                </p>
                                <h6 className="card-title">@{image.imageInfo[0].user}</h6>
                                <p className="card-text">
                                    <small className="text-muted">Last updated {imageDate}</small>
                                </p>
                            </div>
                        </div>}
                    </>
                )
            })}
        </div>
    )
}
