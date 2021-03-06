import axios from 'axios';

const url = 'http://localhost:5000/api/friends';

// Getting friends
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(url)
    .then(({ data }) => dispatch(
      {
        type: FETCHING_FRIENDS_SUCCESS,
        payload: data
      }
    ))
    .catch(err => dispatch(
      {
        type: FETCHING_FRIENDS_FAILURE,
        payload: err
      }
    ));
};