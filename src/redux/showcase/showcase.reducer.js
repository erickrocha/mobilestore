import * as action from './showcase.action';
import { updateObject } from '../../library/utility';

const initialState = {
  sections: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, paylod) => {
  switch (paylod.type) {
    case action.SHOWCASE_BEGIN:
      return updateObject(state, { loading: true });
    case action.SHOWCASE_ERROR:
      return updateObject(state, { error: paylod.error });
    case action.GET_SHOWCASE:
      return updateObject(state, { ...paylod.showcase });
    default:
      return state;
  }
};

export default reducer;
