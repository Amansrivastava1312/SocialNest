import User from "../models/userModel.js";
import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { postedBy, text, img } = req.body;
    if (!postedBy || !text) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await User.findById(postedBy);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(400).json({ error: "Unauthorized" });
    }

    const maxLength = 500;
    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ error: `Text must be less than ${maxLength} characters` });
    }
    const newPost = new Post({ postedBy, text, img });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ err: err.message });
    console.log("Error in createPost: ", err.message);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "postedBy",
      "name"
    );
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ err: error.message });
    console.log("Error in getPost: ", error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res.status(400).json({ error: "Unauthorized" });
    }
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ err: error.message });
    console.log("Error in deletePost: ", error.message);
  }
};

export const likeUnlikePost = async (req, res) => {
  try {
    const { id: postId } = req.params; // Destructure id from req.params
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      // Unlike post
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      // Like post
      post.likes.push(userId);
      await post.save();
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const replyToPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const userProfilePic = req.user.profilePic;
    const username = req.user.username;

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const reply = { userId, text, userProfilePic, username };

    post.replies.push(reply);
    await post.save();

    res.status(201).json(reply);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const following = user.following; // Array of user ids

    const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
      createdAt: -1,
    });

    res.status(200).json(feedPosts);
  } catch (error) {
    res.status(500).json({ err: error.message });
    console.log("Error in getFeedPosts: ", error.message);
  }
};