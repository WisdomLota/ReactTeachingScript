// src/UserProfileCard.jsx
function UserProfileCard(props) { // Now accepts 'props' as an argument
  // We can destructure props right here for cleaner code!
  const { userName, userBio, profilePic } = props; // 

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center', maxWidth: '300px', margin: '20px auto' }}>
      <img src={profilePic} alt={`${userName}'s profile`} style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} />
      <h2>{userName}</h2>
      <p>{userBio}</p>
    </div>
  );
}

export default UserProfileCard;
