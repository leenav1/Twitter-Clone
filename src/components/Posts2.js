import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts2 = () => {
    return (
        <div className="postss2">
            <div className="postss__third">
                <div className="posts__third__img">
                    <img src="/images/profile3.jfif" alt="profile img" />
                </div>
                <div className="posts__third__name">
                    <strong>Pace Carmel</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="posts__third__username">
                    Pace Carmel<span>7/24/2021</span>
                </div>
            </div>
            <div className="postss2__details">
                <div className="postss2__details__msg">
                    Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.
                </div>
                <div className="postss2__details__img">
                    <img src="/images/postss2.jpg" alt="post" />
                </div>
                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 75
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 14
                    </span>
                    <span>
                        <FaHeart className="re" /> 335
                    </span>
                    <span>
                        <FaLeaf className="re" /> 674
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Posts2;