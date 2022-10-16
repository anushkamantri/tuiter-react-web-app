const NavigationSidebar = () => {
    return (`
            <div class="list-group">
                <a href="../home.html" class="list-group-item list-group-item-action"><i
                        class="fab fa-twitter"></i></a>

                <a href="../home.html" class="list-group-item">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-sm-none d-md-inline"> Home</span></a>

                <a href="#" class="list-group-item list-group-item-action active">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-sm-none d-md-inline"> Explore</span></a>

                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-sm-none d-md-inline"> Notifications</span></a>

                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-sm-none d-md-inline"> Messages</span></a>

                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-sm-none d-md-inline"> Bookmarks</span></a>

                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-sm-none d-md-inline"> Lists</span></a>

                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-sm-none d-md-inline"> Profile</span></a>

                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fas fa-ellipsis-h"></i>
                    <span class="d-none d-sm-none d-md-inline"> More</span></a>

                <a href="../tuit.html" class="mt-2">
                    <button class="btn btn-primary w-100 rounded-pill">
                        Tuit
                    </button>
                    </span></a>
</div>
 `);
}
export default NavigationSidebar;