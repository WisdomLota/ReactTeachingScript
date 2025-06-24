// src/UserProfileCard.jsx
function UserProfileCard() {
  const userName = "Alice Wonderland";
  const userBio = "Exploring the rabbit hole of React development.";
  const profilePic = "https://via.placeholder.com/150";

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center', maxWidth: '300px', margin: '20px auto' }}>
      <img src={profilePic} alt={`${userName}'s profile`} style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} />
      <h2>{userName}</h2>
      <p>{userBio}</p>
    </div>
  );
}

export default UserProfileCard; // We need to export our component to use it elsewhere.

