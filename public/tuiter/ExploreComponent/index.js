import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
<div>
<!--                    SEARCH BOX-->
            <div class="row">
                        <div class="w-50">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-transparent rounded-pill fas fa-search border-0 mt-1"></span>
                                </div>
                                <label for="search-box"></label>
                                <input id="search-box"
                                       type="search"
                                       placeholder="Search Tuiter"
                                       class="form-control rounded-pill pe-2">
                            </div>
                        </div>
                        <a href="explore-settings.html" class="col">
                            <i class="fas fa-cog fa-2x"></i>
                        </a>
           </div>
           
<!--           TABS -->
           <ul class="nav mb-2 nav-tabs" role="tablist">
                       <li class="nav-item">
                                <a class="nav-link active" href="for-you.html" class="nav-link">For you</a>
                            </li>
                            <li class="nav-item">
                                <a href="trending.html" class="nav-link">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a href="news.html" class="nav-link">News</a>
                            </li>
                            <li class="nav-item">
                                <a href="sports.html" class="nav-link">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a href="entertainment.html" class="nav-link d-none d-md-block">Entertainment</a>
                            </li>
           </ul>
           
<!--            image with overlaid text -->
<a href="#" class="list-group-item list-group-item-action">
                            <div class="col">
                                <div class="row">
                                    <img
                                            src="../../images/starship-content-image.jpeg"
                                            width="220px"
                                            height="300px"
                                            class="rounded">
                                    <div class="wd-bottom-left wd-fg-text-font-30px wd-fg-color-white">
                                        <b>SpaceX's Starship</b>
                                    </div>

                                </div>
                            </div>

                        </a>
<!--                        Posts -->
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
