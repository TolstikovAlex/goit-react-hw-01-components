import { Profile } from "./profile/Profile";
import user from './profile/user.json';
import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json';
import { FriendList } from "./friend-list/FriendList";
import friends from './friend-list/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
