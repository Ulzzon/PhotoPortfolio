import React from 'react';
import Blogpost from '../components/blogpost';
import blogdata from '../data/blogposts.json';

const Blog = (props) => {
  console.log(blogdata);
  const listItems = blogdata.posts.map((post) =>
    <Blogpost post={post} />
  );

  return (
    <div>
      {listItems}
    </div>
  );
};

export default Blog;
