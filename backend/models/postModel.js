import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId, // mongoose.Schema.Types.ObjectId is a data type provided by mongoose
      ref: "User",
      required: true,
    },
    text: { type: String, maxLength: 500 },
    img: { type: String, default: "" },
    likes: {
      // array of user ids
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    replies: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: { type: String },
        userProfilePic: { type: String },
        username: { type: String },
      },
    ],
  },
  { timestamps: true }
); // timestamps: true will automatically add createdAt and updatedAt fields to the schema

const Post = mongoose.model("Post", postSchema);
export default Post;
