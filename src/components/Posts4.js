import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts4 = () => {
    return (
        <div className="postss4">
            <div className="postss4__fifth">
                <div className="posts__fifth__img">
                    <img src="/images/profile5.jfif" alt="profile img" />
                </div>
                <div className="posts__fifth__name">
                    <strong>Meade Grayshon</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="posts__fifth__username">
                    Meade Grayshon<span>3/3/2021</span>
                </div>
            </div>
            <div className="postss4__details">
                <div className="postss4__details__msg">
                    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.Suspendisse potenti.
                    <img src="/images/postss4.jfif" alt="post" />
                </div>
                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 29
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 8
                    </span>
                    <span>
                        <FaHeart className="re" /> 231
                    </span>
                    <span>
                        <FaLeaf className="re" /> 123
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Posts4;