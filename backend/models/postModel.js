import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postdBy: {
      type: mongoose.Schema.Types.ObjectId, // mongoose.Schema.Types.ObjectId is a data type provided by mongoose
      ref: "User",
      required: true,
    },
    text: { type: String, maxLength: 500, required: true },
    img: { type: String, default: "" },
    likes: { type: Number, default: 0 },
    replies: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      text: { type: String, required: true },
      userProfilePic: { type: String },
      username: { type: String },
    },
  },
  { timestamps: true }
); // timestamps: true will automatically add createdAt and updatedAt fields to the schema

const Post = mongoose.model("Post", postSchema);
export default Post;
