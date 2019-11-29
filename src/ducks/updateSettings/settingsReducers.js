import { POOLSETTINGS_SUCCESS } from './settingsActions';

const poolSettings = (state = { poolSettings: [] }, action) => {
  switch (action.type) {
    case POOLSETTINGS_SUCCESS:
      return { ...state, poolSettings: action.poolSettings };
    default:
      return state;
  }
};

export default poolSettings;

