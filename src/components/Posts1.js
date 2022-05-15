import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts1 = () => {
    return (
        <div className="postss1">
            <div className="postss__second">
                <div className="posts__second__img">
                    <img src="/images/profile2.jfif" alt="profile img" />
                </div>
                <div className="posts__second__name">
                    <strong>Bryna Braidwood</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="posts__second__username">
                    Bryna Braidwood<span>3/12/2021</span>
                </div>
            </div>
            <div className="postss1__details">
                <div className="postss1__details__msg">
                    Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. </div>
                <div className="postss1__details__img">
                    <img src="/images/postss1.jfif" alt="post" />
                </div>
                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 37
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 9
                    </span>
                    <span>
                        <FaHeart className="re" /> 398
                    </span>
                    <span>
                        <FaLeaf className="re" /> 134
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Posts1;