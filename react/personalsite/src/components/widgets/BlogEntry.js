const BlogEntry = (props) => {
    const {blogData} = props;

    const redirectToBlog = () => {
        window.location.href = blogData.url;
    }

    const createTagsList = () => {
        let postTagsText = "Tags: ";
        blogData.tags.forEach(tag => {
            postTagsText += tag + ', ';
        });
        return <h4>{postTagsText.slice(0, postTagsText.length - 2)}</h4>;
    }

    return (
        <div onClick={redirectToBlog}>
            <h3 className="blogTitleLine">{blogData.title}</h3>
            <h3 className="blogDateLine">{blogData.date}</h3>
            <p className="blogDescription">{blogData.description}</p>
            <h4>{createTagsList()}</h4>
        </div>
    );
}

export default BlogEntry;