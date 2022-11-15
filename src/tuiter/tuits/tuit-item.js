import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla-account-image.png",
            "liked": false,
            "replies": 233,
            "retuits": 434,
            "likes": 5445,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars!"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={48} height={48} className="rounded-pill" src={`/images/${tuit.image}`} alt={'someimg'}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="fw-bolder">{tuit.userName} <i
                        className="fa fa-check-circle"></i>{tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                </div>

            </div>
            <div className="pt-2 ms-4">
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
};
export default TuitItem;