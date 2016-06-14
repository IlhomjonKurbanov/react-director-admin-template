'use strict';

const initialState = {
  isFetching: false,
  data: {
    login: null,
    firstname: '',
    lastname: '',
    picture: null
  },
  time: null
};

const userInfos = (state = initialState, action) => {
  switch (action.type) {

  case 'REQUEST_USER_INFOS_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case 'RECEIVED_USER_INFOS_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      data:       { ...action.userInfos },
      time:       action.time
    };

  case 'ERROR_USER_INFOS_DATA':
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};


export default userInfos;