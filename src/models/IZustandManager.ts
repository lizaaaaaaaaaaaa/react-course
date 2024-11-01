import IUser from "./IUser";
import IPost from "./IPost";
import IComment from "./IComment";
import IPostWithComments from "./IPostWithComments";

export default interface IZustandManager {
    usersSlice: {
        users: IUser[],
        setUsers: (users: IUser[]) => void;
    },
    postsSlice: {
        posts: IPost[],
        setPosts: (posts: IPost[]) => void;
    },
    commentsSlice: {
        comments: IComment[],
        setComments: (comments: IComment[]) => void;
    }
}

