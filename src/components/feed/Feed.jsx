import Share from '../../share/Share'
import Post from '../../components/post/Post'
import './feed.css'
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className='feed'>
      <Share/>
      {Posts.map((p)=> (
        <Post key={p.id} post={p}/>
      ))}
     
      </div>
  )
}
