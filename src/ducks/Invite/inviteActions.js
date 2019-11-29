const TRIGGER_INVITE = 'TRIGGER_INVITE';
const INVITE_SUCCESS = 'INVITE_SUCCESS';
const INVITE_FAIL = 'INVITE_FAIL';

const triggerInvite = (params) => ({
  type: TRIGGER_INVITE,
  params,
});

const inviteSuccess = (res) => ({
  type: INVITE_SUCCESS,
  res,
});

const inviteFail = (err) => ({
  type: INVITE_FAIL,
  err,
});

export {
  TRIGGER_INVITE,
  INVITE_SUCCESS,
  INVITE_FAIL,
  triggerInvite,
  inviteSuccess,
  inviteFail,
};
