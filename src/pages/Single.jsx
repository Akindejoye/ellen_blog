import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "./../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="Post" />
        <div className="user">
          {post.img && <img src={post?.userImg} alt="" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="Edit" />
              </Link>
              <img src={Delete} alt="" onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
