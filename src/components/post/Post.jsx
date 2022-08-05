import './post.css'
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"
import {useState} from 'react'

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like + 1);
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {Users.filter(u => u.id === post.userId)[0].username}
                        </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} className='postImg' alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                    <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler}  />
                    <span className="postLikeCounter">{like} people like this</span>

                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
