import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import BlogPostDetail from './component/BlogPostDetail'
import Loader from 'components/common/components/CommonLoader'

import { fetchBlogDetail, createPostComment } from './action'

class BlogDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { 0: type, id } = this.props.match.params;
        const { blogDetail } = this.props.blogDetail;
        /* Fetch only if not exists */
        if (!blogDetail.id || (id != blogDetail.id)) {
            // Dispatch action
            this.props.fetchBlogDetail(id, type);
        }
    }
    submitComment = (commentData) => {
        const { 0: type } = this.props.match.params;
        console.log(commentData, type);
        // Dispatch action
        this.props.createPostComment(commentData, type);
    }
    render() {
        const { blogDetail, loading } = this.props.blogDetail;
        const { 0: type, } = this.props.match.params;

        if (!blogDetail.id || loading) {
            return <Loader showLoader={true} />
        }
        return (
            <div>
                <BlogPostDetail
                    submitComment={this.submitComment}
                    post={blogDetail}
                    postType={type} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        blog: state.blog,
        blogDetail: state.blogDetail,
        router: state.router
    };
};

const withConnect = connect(mapStateToProps, {
    fetchBlogDetail,
    createPostComment
});
export default compose(withConnect)(BlogDetail);