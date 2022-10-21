import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fab fa-twitter"></i>
                <span className="d-none d-sm-none d-md-inline"> Tuiter</span>
            </a>
            <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
                <i className="fas fa-home"></i>
                <span className="d-none d-sm-none d-md-inline"> Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
                <i className="fas fa-hashtag"></i>
                <span className="d-none d-sm-none d-md-inline"> Explore</span>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fas fa-bell"></i>
                <span className="d-none d-sm-none d-md-inline"> Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                <i className="fas fa-envelope"></i>
                <span className="d-none d-sm-none d-md-inline"> Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="fas fa-bookmark"></i>
                <span className="d-none d-sm-none d-md-inline"> Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                <i className="fas fa-list"></i>
                <span className="d-none d-sm-none d-md-inline"> Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <i className="fas fa-user"></i>
                <span className="d-none d-sm-none d-md-inline"> Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <i className="fas fa-ellipsis-h"></i>
                <span className="d-none d-sm-none d-md-inline"> More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;