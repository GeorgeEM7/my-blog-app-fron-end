import "./comment-list.css";
import swal from "sweetalert";
import { HiPencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import UpdateCommentModel from "./UpdateComment";

const CommentList = () => {

  const [updateComment, setUpdateComment] = useState(false) 
	
	const deleteCommentHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Comment has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Changes are not saved");
      }
    });
  }


  return (
    <div className="comment-list">
      <h4 className="comment-list-count">2 Comments</h4>
      {[1, 2].map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-username">George Emad</div>
            <div className="comment-item-time">2 Houres ago</div>
          </div>
          <div className="comment-item-text-icons">
            <p className="comment-item-text">
              hello this is comment lllllllllllllllllong
            </p>
            <div className="comment-item-icons-wrapper">
              <div onClick={()=> setUpdateComment(true)}>
                <HiPencilAlt  size={22}/>
              </div>
              <div onClick={deleteCommentHandler}>
                <AiFillDelete size={22}/>
              </div>
            </div>
          </div>
        </div>
      ))}
      {updateComment && <UpdateCommentModel  setUpdateComment={setUpdateComment}/>}
    </div>
  );
};

export default CommentList;
