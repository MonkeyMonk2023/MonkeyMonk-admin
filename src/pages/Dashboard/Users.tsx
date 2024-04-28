import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import JsonToExcel from '../../components/JsonToExcel';

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchItem, setSearchItem] = useState<string>('username');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersData = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }) as User,
        );
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchItemChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSearchItem(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const searchTerms = user[searchItem as keyof User].toLowerCase();
    const lowercaseQuery = searchQuery.toLowerCase();
    return searchTerms.includes(lowercaseQuery);
  });

  const excelData = filteredUsers.map((user) => ({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  }));

  return (
    <DefaultLayout>
      <div className="mx-auto">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="flex mb-4 space-x-4">
            <select
              value={searchItem}
              onChange={handleSearchItemChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="username">Username</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="phoneNumber">Phone Number</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search users..."
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>{users.length != 0 && <JsonToExcel data={excelData} />}</div>
        </div>
        <div className="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user: User) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.phoneNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Users;
