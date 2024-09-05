import React, { useState } from 'react';
import Use from './Use';

function Manage() {
  const [channel, setChannel] = useState('dash');
  const res = Use('https://jsonplaceholder.typicode.com/users');
  // console.log(res);
  
  const change = () => {
    setChannel('MAX');
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {res && res.length > 0 ? (
              res.map((item) => (
                <tr key={item.id} style={{ color: 'red' }}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <div style={{ border: '3px solid green' }}>
        <h1>Manage: {channel}</h1>
        <br />
        <button onClick={change}>Click</button>
      </div>
    </>
  );
}

export default Manage;
