const PostSummaryItem = (post) => {
    return (`
<li>
 <a href="#" class="list-group-item list-group-item-action">
                            <div class="row">
                                <div class="col">
                                    <div class=" wd-fg-color-gray wd-fg-text-font-13px">
                                        ${post.topic}
                                    </div>
                                    <div class="col wd-fg-text-font-13px">
                                        <b>${post.userName}
                                            <i class="fas fa-check"></i> - ${post.time}</br>
                                            ${post.title}
                                        </b>
                                    </div>
                                    <div class=" wd-fg-color-gray wd-fg-text-font-13px">
                                        ${post.tweets} Tuits
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row align-items-end">
                                        <img
                                                src=${post.image}
                                                width="100px"
                                                height="140px"
                                                class="rounded">
                                    </div>
                                </div>
                            </div>
                        </a>
</li>`);
}
export default PostSummaryItem;