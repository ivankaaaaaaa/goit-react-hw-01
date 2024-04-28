import clsx from "clsx";
import css from "./FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friendsItemWrapper)}>
      <img
        className={clsx(css.friendPhoto)}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css.friendName)}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};