import React from 'react';
import { getServers } from 'api/server';

let serverList: Array<{}>;

const serverRequest = async () => {
  const request = await getServers();
  const data = request.data;
  return data;
};

serverRequest()
  .then((data) => {
    const serverData = data;
    serverList = serverData.map((server: any) => (
      <li key={server.created}>{server.created}</li>
    ));
    console.log(serverList);
  })
  .catch(console.error);

const Servers = () => (
  <>
    <main>
      <ul>
        {serverList &&
          serverList.map((server) => {
            server;
          })}
      </ul>
    </main>
  </>
);

export default Servers;
