// При сдаче домашней работы есть ссылка на репозиторий с исходным кодом проекта.
// В шапке репозитория есть ссылка на живую страницу на GitHub pages.
// При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений.
// Все что компонент ожидает в виде пропсов, передается ему при вызове.
// Стилизация выполнена CSS-модулями или Styled Components, поэтому классы в результирующем DOM будут отличаться от примеров.

import user from './social-profile/user.json';
import data from './statistics/data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';
import { Profile } from 'components/social-profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friend-list/FriendList';
import { TransactionHistory } from 'components/transaction-history/TransactionHistory';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
