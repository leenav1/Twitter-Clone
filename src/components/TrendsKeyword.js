import React from "react";

const TrendsKeyword = () => {
    const [state, setState] = React.useState([
        {
            id: 1,
            country: "Trending in India",
            keyword: "#SPIDERMAN",
            totalKeywords: "2000k",
        },
        {
            id: 2,
            country: "Trending in DC",
            keyword: "#BATMAN",
            totalKeywords: "6000k",
        },
        {
            id: 3,
            country: "Trending in Multiverse",
            keyword: "#DRSTRANGE",
            totalKeywords: "2560k",
        },
        {
            id: 4,
            country: "War in Ukraine",
            keyword: "#UKRAINE_Drives",
            totalKeywords: "2789k",
        },
        {
            id: 5,
            country: "Trending in Entertainment",
            keyword: "#KGFChapter3",
            totalKeywords: "865k",
        },
        {
            id: 6,
            country: "Trending in India",
            keyword: "#COBRA",
            totalKeywords: "450k",
        },
        {
            id: 7,
            country: "Trending in Sports",
            keyword: "#AmbatiRayudu",
            totalKeywords: "640k",
        },
    ]);
    return (
        <div className="keywords">
            <div className="key">
                <div className="keyword__heading">
                    <h4>Trends for you</h4>
                </div>
                {state.map((keyword) => (
                    <div key={keyword.id}>
                        <div className="country">{keyword.country}</div>
                        <div className="keyword__name">
                            <strong>{keyword.keyword}</strong>
                        </div>
                        <div className="keyword__tweets">{keyword.totalKeywords}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendsKeyword;