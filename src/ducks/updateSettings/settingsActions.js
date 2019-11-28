const TRIGGER_POOLSETTINGS = 'TRIGGER_EXAMPLE';
const POOLSETTINGS_LOADING = 'EXAMPLE_LOADING';
const POOLSETTINGS_SUCCESS = 'POOLSETTINGS_SUCCESS';
const POOLSETTINGS_FAIL = 'POOLSETTINGS_FAIL';

const triggerPoolSettings = () => ({
  type: TRIGGER_POOL,
});

const poolSettingsLoading = (isLoading) => ({
  type: poolSettings_LOADING,
  isLoading,
});

const poolSettingsSuccess = (poolSettings) => ({
  type: POOLSETTINGS_SUCCESS,
  poolSettings,
});

const poolSettingsFail = (err) => ({
  type: POOLSETTINGS_FAIL,
  err,
});

export {
  TRIGGER_POOLSETTINGS,
  POOLSETTINGS_LOADING,
  POOLSETTINGS_SUCCESS,
  POOLSETTINGS_FAIL,
  triggerPoolSettings,
  poolSettingsLoading,
  poolSettingsSuccess,
  poolSettingsFail,
};
