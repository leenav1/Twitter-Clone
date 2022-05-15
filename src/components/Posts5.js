import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts5 = () => {
    return (
        <div className="postss5">
            <div className="postss5__sixth">
                <div className="posts__sixth__img">
                    <img src="/images/profile6.jfif" alt="profile img" />
                </div>
                <div className="posts__sixth__name">
                    <strong>Brendan Corsor</strong> <FaRegCheckCircle className="verify" />
                </div>
                <div className="posts__sixth__username">
                    Brendan Corsor<span>3/24/2021</span>
                </div>
            </div>
            <div className="postss5__details">
                <div className="postss5__details__msg">
                    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.
                </div> <img src="/images/postss5.jfif" alt="post" />

                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 57
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 6
                    </span>
                    <span>
                        <FaHeart className="re" /> 785
                    </span>
                    <span>
                        <FaLeaf className="re" /> 876
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Posts5;