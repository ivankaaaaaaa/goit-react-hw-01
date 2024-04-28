import { FriendListItem } from "./FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friends)}>
      {friends.map((friend) => (
        <li className={clsx(css.friendsItem)} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};