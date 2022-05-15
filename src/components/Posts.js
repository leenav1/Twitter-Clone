import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts = () => {
    return (
        <div className="postss">
            <div className="postss__first">
                <div className="posts__first__img">
                    <img src="/images/profile1.jfif" alt="profile img" />
                </div>
                <div className="posts__first__name">
                    <strong>Bibby Siderfin</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="posts__first__username">
                    Bibby Siderfin <span>10/16/2021</span>
                </div>
            </div>
            <div className="postss__details">
                <div className="postss__details__msg">
                    Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
                </div>
                <div className="postss__details__img">
                    <img src="/images/post.webp" alt="post" />
                </div>
                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 45
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 4
                    </span>
                    <span>
                        <FaHeart className="re" /> 345
                    </span>
                    <span>
                        <FaLeaf className="re" /> 234
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Posts;