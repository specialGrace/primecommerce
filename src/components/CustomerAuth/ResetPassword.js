import { useDispatch } from 'react-redux';
import { resetPasswordSuccess, authError } from "../../Redux/reducers/slice/authSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();

  const handleForgotPassword = async (email) => {
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        dispatch(resetPasswordSuccess(true));
      } else {
        dispatch(authError(data.message));
      }
    } catch (err) {
      dispatch(authError('Network error. Please try again.'));
    }
  };

  return (
    <div>
      {/* Your forgot password form here */}
      <button onClick={() => handleForgotPassword('user@example.com')}>
        Reset Password
      </button>
    </div>
  );
};
export default ResetPassword
