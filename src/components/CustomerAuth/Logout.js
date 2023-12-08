import { useDispatch } from 'react-redux';
import { logoutSuccess } from "../../Redux/reducers/slice/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear any stored tokens or user data
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
export default Logout
