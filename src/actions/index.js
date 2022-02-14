import _ from "lodash";
import JsonPlaceHolder from "../apis/JsonPlaceHolder"

export const FetchPostsandUsers = () => async (dispatch,getState) =>{    //it is same as below func returning function
  await dispatch(FetchPosts());
//  const userId=  _.uniq(_.map(getState().posts,'userId'))  // return all unique userId of posts
//  userId.forEach(user => dispatch(FetchUsers(user)))
  //Altenate of above 2 lines
 _.chain(getState().posts)
 .map('userId')
 .uniq()
 .forEach(id => dispatch(FetchUsers(id)))
 .value();
}

export const FetchPosts = () => {
  return async function (dispatch,getstate){
    const response = await JsonPlaceHolder.get('/posts');

    dispatch({type: "FETCH_POSTS",payload: response.data})
  }
} 

export const FetchUsers = (id) =>{
  return async function (dispatch,getstate){
    const response = await JsonPlaceHolder('/users/'+id);

    dispatch({type: "FETCH_USER",payload: response.data})
  }
}


//One way of minimizing no of req
// export const FetchUsers = (id) => dispatch =>{
//   _fetchUser(id,dispatch)
// }

// const _fetchUser = _.memoize(async(id,dispatch) => {
//     const response = await JsonPlaceHolder.get('/users/'+id);

//     dispatch({type: "FETCH_USER",payload: response.data})
// })