import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please login</p>;

  return (
    <div>
      <h4>Welcome: {user.username}</h4>
    </div>
  );
}

export default Profile;
