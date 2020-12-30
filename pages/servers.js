import React from 'react';
import { getServers } from 'api/server';
import { GetServerSideProps } from "next";
import Head from 'next/head';
import Card from 'components/Card/Card';
import CardHead from 'components/Card/CardHead';
import CardContent from 'components/Card/CardContent';
import css from 'styled-jsx/css';

const Servers = ({ servers }) => (
  <main>
    <Head>
      <title>UpCloud</title>
    </Head>
    <Card>
      <CardHead title="Servers">
      </CardHead>
      <ul>
        {servers.map((server) => {
          return (
            <li key="{server.title}">
              {server.state === "stopped" &&
                <span className="stopped icon"></span>
              }
              {server.state === "started" &&
                <span className="started icon"></span>
              }
              <div className="server-info">
                <p>{server.title}</p>
                <span>Hostname: {server.hostname}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </Card>
    <style jsx>
      {`
      @import 'color';
      @import 'rem';
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      li {
        padding: rem(20px);
        border-bottom: 1px solid color(grey, card-border);
      }

      p {
        margin-bottom: 0;
      }

      .server-info {
        display: inline-block;
        margin-left: 1rem;
      }

      .server-info span {
        font-size: rem(12px);
        color: color(grey, base);
      }

      span.icon {
        width: rem(16px);
        height: rem(16px);
        display: inline-block;
        border-radius: rem(3px);
        position: relative;
        top: rem(-5px);
      }

      span.icon.stopped {
        background-color: color(red);
      }

      span.icon.started {
        background-color: color(ui, green)
      }
      `}
    </style>
  </main>
)

export async function getServerSideProps(context) {
  const request = await getServers();
  const servers = request.data;
  servers.map((server) => {
    console.log(server.created)
  })
  return {
    props: { servers }
  }
}

export default Servers;
