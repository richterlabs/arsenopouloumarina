import React from 'react';
import SectionTitle from "./SectionTitle";
import GalleryOne from "./GalleryOne";


const PopupData = [
    {
        id: "01",
        image: "./images/compressed/office-1.JPG",
        popupLink: [
            './images/portfolio/office-1.jpg',
        ],
    },
    {
        id: "02",
        image: "./images/portfolio/portfolio-02.jpg",
        popupLink: [
            './images/portfolio/portfolio-02.jpg',
        ],
    },
    {
        id: "03",
        image: "./images/portfolio/portfolio-03.jpg",
        popupLink: [
            './images/portfolio/portfolio-03.jpg',
        ],
    },
    {
        id: "04",
        image: "./images/portfolio/portfolio-04.jpg",
        popupLink: [
            './images/portfolio/portfolio-04.jpg',
        ],
    },
    {
        id: "05",
        image: "./images/portfolio/portfolio-04.jpg",
        popupLink: [
            './images/portfolio/portfolio-02.jpg',
        ],
    },
    {
        id: "06",
        image: "./images/portfolio/portfolio-05.jpg",
        popupLink: [
            './images/portfolio/portfolio-05.jpg',
        ],
    },
]


const Elements = () => {
    return (
        <>
                <div className="main-content">
                    {/* Start Elements Area  */}
                    <div className="rwt-gallery-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--20">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "ΓΚΑΛΕΡΙ"
                                        title = "Ο ΧΩΡΟΣ ΜΑΣ"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <div className="row mt_dec--30 row--15">
                                {PopupData.map((item) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30" key={item.id}>
                                        <GalleryOne galleryItem={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Elements Area  */}

                </div>
        </>
    )
}
export default Elements;