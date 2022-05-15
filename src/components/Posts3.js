import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts3 = () => {
    return (
        <div className="postss3">
            <div className="postss__fourth">
                <div className="posts__fourth__img">
                    <img src="/images/profile4.jfif" alt="profile img" />
                </div>
                <div className="posts__fourth__name">
                    <strong>Shurlocke Sumption"</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="posts__fourth__username">
                    Shurlocke Sumption<span>3/12/2021</span>
                </div>
            </div>
            <div className="postss3__details">
                <div className="postss3__details__msg">
                    Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.
                </div>
                <div className="postss3__details__img">
                    <img src="/images/postss3.jfif" alt="post" />
                </div>
                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 89
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 20
                    </span>
                    <span>
                        <FaHeart className="re" /> 677
                    </span>
                    <span>
                        <FaLeaf className="re" /> 134
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Posts3;