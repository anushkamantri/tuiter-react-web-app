import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group" style="list-style-type: none">
           <b class="list-group-item wd-fg-color-white">Who to follow</b>
                    ${who.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')}
           </ul>
`);
}

export default WhoToFollowList;