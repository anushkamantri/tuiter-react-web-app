const WhoToFollowListItem = (who) => {
    return (`
<li>
<a href="#" class="list-group-item">
                                <div class="row">
                                    <div class="col-2">
                                        <img
                                                src=${who.avatarIcon}
                                                width="40px"
                                                height="40px"
                                                class="rounded-circle">
                                    </div>
                                    <div class="col ms-2">
                                        <b>${who.userName}</b></br>
                                        @${who.handle}
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-primary rounded-pill">Follow</button>
                                    </div>
                                </div>
                            </a>
</li>`);
}
export default WhoToFollowListItem;