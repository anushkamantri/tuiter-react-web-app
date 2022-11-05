import React from "react";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla-account-image.png",
            "liked": true,
            "replies": 233,
            "retuits": 434,
            "likes": 5445,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
            <div className="row">
                <div className="col-sm">
                    <i className="fa fa-comment"></i>{tuit.replies}
                </div>
                <div className="col-sm">
                    <i className="fa fa-retweet"></i>{tuit.retuits}
                </div>
                <div className="col-sm">
                    { tuit.liked && <p><i className="fa-solid fa-heart"></i> {tuit.likes}</p>}
                    { !tuit.liked && <p><i className="fa-regular fa-heart"></i> {tuit.likes}</p>}
                </div>
                <div className="col-sm">
                    <i className="fa-solid fa-share"></i>
                </div>
            </div>
    );
};
export default TuitStats;