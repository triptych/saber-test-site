// saber-node.js
exports.onCreatePages = function(){
    console.log("in oncreatepages");
    //console.log("this:", this);
    //console.log("this.pages", this.pages)
    //console.log("posts", [...this.pages.values()]);

    // Do something ...
    // Pages are read into the `this.pages` Map
    // Sort posts by createdAt (date) from new to old 
    const posts = [...this.pages.values()]
        .filter(page => page.attributes.type === 'post' && !page.attributes.draft)
        .sort((a,b) => {
            return a.attributes.createdAt > b.attributes.createdAt ? 1 : -1
        })
    for (const[index, post] of posts.entries()) {
        // It's NOT recommended to mutate `page` directly to add additional props
        // Use `extendPageProp` instead to add more properties to the `page` prop
        this.pages.extendPageProp(post.internal.id, {
            prevPost: this.pages.getPagePublicFields(posts[index -1]),
            nextPost: this.pages.getPagePublicFields(posts[index +1])
        })
    }    
}