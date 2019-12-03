import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { triggerInvite } from '../../ducks/invite/inviteActions';
import { popUpState } from '../../ducks/popUpState/popUpActions';

const Invite = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.invite);
  const poolId = useSelector(state => state.getPool.pool.poolSettingsInfo[0].id);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    if(status.res === 'Sent') {
      setName('');
      setEmail('');
      dispatch(popUpState('none'));
    }
  }, [status])
console.log('info', poolId)
  const onSubmit = () => {
    firebase.auth().fetchSignInMethodsForEmail(email)
   .then(providers => {
    if (providers.length === 0) {
      dispatch(triggerInvite({ dest:email, name, poolId }));
    } else {
      // Send the user a message.
      dispatch(triggerInvite({ dest:email, name, poolId }));
    }
  });
}

  
  return (
    <div className='invite'>
      <div>
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={ onSubmit }>Invite</button>
      <div>
        {status.res && status.res !== 'Sent' ? status.res: ''}
      </div>
    </div>
  );
};

export default Invite;