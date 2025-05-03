
import { getInversionsAll } from './actions/inversionsAction';
import { SET_DATA_INVERSIONS } from './slices/inversionsSlice';

export const GET_DATA_START = () => {
    return async (dispatch, getState) => {
        dispatch(
            SET_DATA_INVERSIONS(
                
                    await getInversionsAll(),
            )
        )
    };
};