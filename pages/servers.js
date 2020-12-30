import React from 'react';
import { getServers } from 'api/server';

function Servers({ servers }) {
  return (
    <main>
      <ul>
        {servers.map((server) => {
          <li key="server.created">server.title</li>;
        })}
      </ul>
    </main>
  )
}

export async function getStaticProps() {
  const request = await getServers();
  const servers = request.data;
  console.log(servers)
  return {
    props: {
      servers,
    }
  }
}

export default Servers;
