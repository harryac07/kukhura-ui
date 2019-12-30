import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import { take } from 'lodash'

import Bloglist from './component/Bloglist'
import LatestPost from './component/LatestPost'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'
import Loader from 'components/common/components/CommonLoader'

import { fetchBlogList, addSelectedBlogDetail } from './action'

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //Dispatch action
        this.props.fetchBlogList();
    }
    loadMoreBlogPosts = () => {
        const { blogPaginationEndOffset } = this.props.blog;
        //Dispatch action
        this.props.fetchBlogList(blogPaginationEndOffset + 4);
    }
    render() {
        const { blogList, blogPaginationEndOffset, heroBlogPost } = this.props.blog;
        const { history } = this.props;
        if (blogList.length === 0) {
            return <Loader showLoader={true} />
        }
        return (
            <div>
                {/* Recent post */}
                <LatestPost
                    recentPost={heroBlogPost}
                    history={history}
                    addSelectedBlogDetail={this.props.addSelectedBlogDetail}
                />
                {/* Newsroom bloglist */}
                <Bloglist
                    blogList={take(blogList, blogPaginationEndOffset)}
                    loadMoreBlogPosts={this.loadMoreBlogPosts}
                    isMoreBlog={blogPaginationEndOffset < blogList.length}
                    addSelectedBlogDetail={this.props.addSelectedBlogDetail}
                    history={history}
                />
                <Divider />

                {/* Slogan banner */}
                <SloganBanner
                    bgImageUrl="https://dummyimage.com/1200x300/cccccc/000.jpg"
                    sloganText="Consume fresh egg everyday! Quality can't be compromised."
                    textSizeLevel={2}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        blog: state.blog,
        router: state.router
    };
};

const withConnect = connect(mapStateToProps, {
    fetchBlogList,
    addSelectedBlogDetail
});
export default compose(withConnect)(Blog);