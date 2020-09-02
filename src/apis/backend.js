import axios from 'axios';

const cancellationToken = axios.CancelToken.source();
const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  cancelToken: cancellationToken.token,
});

export const callRequest = (url, method, data) => instance({ method, url, data });
export const dispose = () => cancellationToken.cancel();
export const isCancelled = (value) => axios.isCancel(value);

export const GET_USER = 'GET_USER';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const GET_COMMENTS = 'GET_COMMENTS';
export const POST_USER = 'POST_USER';
export const POST_POST = 'POST_POST';
export const POST_COMMENT = 'POST_COMMENT';
export const POST_RESPONSE = 'POST_RESPONSE';

export const getRequestConfig = (request, params) => {
  const { userID, postID, commentID } = params;
  let URL, method;
  switch (request) {
    case GET_USER:
      URL = `api/users/${userID}`;
      method = 'get';
      break;
    case GET_POSTS:
      URL = 'api/posts';
      method = 'get';
      break;
    case GET_POST:
      URL = `api/posts/${postID}`;
      method = 'get';
      break;
    case GET_COMMENTS:
      URL = `api/posts/${postID}/comments`;
      method = 'get';
      break;
    case POST_USER:
      URL = `api/users`;
      method = 'post';
      break;
    case POST_POST:
      URL = `api/posts`;
      method = 'post';
      break;
    case POST_COMMENT:
      URL = `api/posts/${postID}/comments`;
      method = 'post';
      break;
    case POST_RESPONSE:
      URL = `api/posts/${postID}/comments/${commentID}`;
      method = 'post';
      break;
    default:
      break;
  }
  return { URL, method }
}