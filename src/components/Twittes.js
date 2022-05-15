import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Posts1 from "./Posts1";
import Posts2 from "./Posts2";
import Posts3 from "./Posts3";
import Posts4 from "./Posts4";
import Posts5 from "./Posts5";


const Twittes = () => {
    return (
        <div className="posts">
            <div className="posts__home">Home</div>
            <CreateTweet />
            <Posts />
            <Posts1 />
            <Posts2 />
            <Posts3 />
            <Posts4 />
            <Posts5 />
        </div>
    );
};

export default Twittes;