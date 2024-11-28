import React from 'react';
import ProfileCard from './components/ProfileCard';

const users = [
  { id: 1, name: 'Guy Terry', age: 30, profileImage: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: 2, name: 'Sylvia Lowe', age: 25, profileImage: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 3, name: 'Bertha Hunter', age: 28, profileImage: 'https://randomuser.me/api/portraits/women/18.jpg' },
];

function App() {
  return (
    <div>
      <h1>Profile Cards</h1>

      {/* Using Map */}
      <h2>Using map()</h2>
      <div>
        {users.map(user => (
          <ProfileCard
            key={user.id}
            name={user.name}
            age={user.age}
            profileImage={user.profileImage}
          />
        ))}
      </div>

      {/* Without Using Map */}
      <h2>Without using map()</h2>
      <div>
        <ProfileCard
          name={users[0].name}
          age={users[0].age}
          profileImage={users[0].profileImage}
        />
        <ProfileCard
          name={users[1].name}
          age={users[1].age}
          profileImage={users[1].profileImage}
        />
        <ProfileCard
          name={users[2].name}
          age={users[2].age}
          profileImage={users[2].profileImage}
        />
      </div>
    </div>
  );
}

export default App;
