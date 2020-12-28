//import React, {useState} from 'react'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteBlog, addLike} from '../reducers/blogListReducer'

const Blog = ({
  blog
}) =>
{
  const [infoView, setInfoView] = useState(false)

  const dispatch = useDispatch()

  const handleLike = (event) =>
  {
    event.preventDefault()
    dispatch(addLike(blog.id))
  }

  const handleDelete = (event) =>
  {
    if (window.confirm('Delete blog: ' + blog.title+'?'))
    {
      event.preventDefault()
      dispatch(deleteBlog(blog.id))
    }
  }

  const blogStyle = {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 7,
  }

  if (!infoView)
  {
    return (
      <div style={blogStyle} className='blog' id='blog'>
        <div onClick={() => setInfoView(!infoView)}>
          Blog: {blog.title}, Author: {blog.author} {}
          <button onClick={() => setInfoView(!infoView)}>View</button>
        </div>
      </div>
    )
  }

  return (
    <div style={blogStyle} className='blog' id='blog'>
      <div onClick={() => setInfoView(!infoView)}>
        Blog: {blog.title}, Author: {blog.author} {}
        <button onClick={() => setInfoView(!infoView)}>View</button>
      </div>
      <div>
        Url: {blog.url}
      </div>
      <div id='likes'>
        Likes: {blog.likes} {}
        <button type='button' onClick={handleLike} style={{color: 'green'}} id='like'> Like </button>
      </div >
      <div>
        User: {blog.user.name}
      </div >
      <button type='button' onClick={handleDelete} style={{color: 'red'}} id='delete'>Delete</button>
    </div>
  )
}

export default Blog
