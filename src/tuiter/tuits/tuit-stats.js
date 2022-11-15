import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-sm">
                <i className="fa fa-comment"></i>{" "}{tuit.replies}{" "}
            </div>
            <div className="col-sm">
                <i className="fa fa-retweet"></i>{" "}{tuit.retuits}{" "}
            </div>
            <div className="col-sm">
                <i onClick={() =>
                    dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true,
                    }))}
                   className={`bi
                    ${tuit.liked === true ? "bi-heart-fill text-danger" : "bi-heart"}`}
                ></i>{" "}{tuit.likes}{" "}
            </div>
            <div className="col-sm">
                <i onClick={() =>
                    dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes === undefined ? 1 : tuit.dislikes + 1,
                        disliked: true,
                    }))}
                   className={`bi
                    ${tuit.disliked === true ? "bi-hand-thumbs-down-fill text-primary"
                       : "bi-hand-thumbs-down"}`}
                ></i>{" "}{tuit.dislikes === undefined ? 0 : tuit.dislikes}{" "}
            </div>
            <div className="col-sm">
                <i className="fa-solid fa-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;