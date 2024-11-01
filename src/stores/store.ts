import IZustandManager from "../models/IZustandManager";
import {create} from "zustand/react";

const useZustandStore = create<IZustandManager>()(set => {
    return {
        usersSlice: {
            users: [],
            setUsers: (users) => {
                return set(state => ({
                    ...state,
                    usersSlice: {
                        ...state.usersSlice,
                        users: users
                    }
                }))
            }
        },
        postsSlice: {
            posts: [],
            setPosts: (posts) => {
                return set(state => ({
                    ...state,
                    postsSlice: {
                        ...state.postsSlice,
                        posts: posts
                    }
                }))
            }
        },
        commentsSlice: {
            comments: [],
            setComments: (comments) => {
                return set(state => ({
                    ...state,
                    commentsSlice: {
                        ...state.commentsSlice,
                        comments: comments
                    }
                }))
            }
        },
    }
});

export default useZustandStore;