import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import Bloglist from './component/Bloglist'
import LatestPost from './component/LatestPost'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'

import { fetchBlogList } from './action'

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
    const { blogList } = this.props.blog;
    return (
      <div>
        {/* Recent post */}
        <LatestPost recentPost={blogList[0]} />
        {/* Newsroom bloglist */}
        <Bloglist blogList={blogList} loadMoreBlogPosts={this.loadMoreBlogPosts} />
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
    blog: state.blog
  };
};

const withConnect = connect(mapStateToProps, {
  fetchBlogList,
});
export default compose(withConnect)(Blog);