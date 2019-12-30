import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import BlogPostDetail from './component/BlogPostDetail'
import Loader from 'components/common/components/CommonLoader'

import { fetchBlogDetail } from './action'

class BlogDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        // Dispatch action
        this.props.fetchBlogDetail(id);
    }

    render() {
        const { blogDetail, loading } = this.props.blogDetail;
        if (!blogDetail.id || loading) {
            return <Loader showLoader={true} />
        }
        return (
            <div>
                <BlogPostDetail goBack={() => this.props.history.goBack()} post={blogDetail} />
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
});
export default compose(withConnect)(BlogDetail);