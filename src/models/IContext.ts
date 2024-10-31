import IUser from "./IUser";
import IPost from "./IPost";
import IComment from "./IComment";
import IPostWithComments from "./IPostWithComments";

export default interface IContext {
    usersSlice: {
        users: IUser[]
    },
    postsSlice: {
        posts: IPost[]
    },
    commentsSlice: {
        comments: IComment[]
    },
    postsWithCommentsSlice: {
        postsWithComments: IPostWithComments[]
    }
}