import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreComponent/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-light">
        ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 bg-light">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-light">
        ${WhoToFollowList()}

   </div>
  </div>
   `);
}
$(exploreComponent);