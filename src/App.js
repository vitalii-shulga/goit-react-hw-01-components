import user from './social-profile/user.json';
import data from './statistics/data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';
import { Profile } from 'social-profile/components/Profile';
import { Statistics } from 'statistics/components/Statistics';
import { FriendList } from 'friend-list/components/FriendList';
import { TransactionHistory } from 'transaction-history/components/TransactionHistory';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
