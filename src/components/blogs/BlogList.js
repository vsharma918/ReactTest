import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../actions/blogs";
import UserHeader from "./UserHeader";
class BlogList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.blogs.map(blog => (
      <div className="item" key={blog.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{blog.title}</h2>
            <p> {blog.body}</p>
          </div>
          <UserHeader userId={blog.userId} />
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div class="ui inverted relaxed divided list"> {this.renderList()}</div>
    );
  }
}
const mapStateToProps = state => {
  return { blogs: state.blogs };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(BlogList);
