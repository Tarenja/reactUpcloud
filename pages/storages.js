import React from 'react';
import { getStorages } from 'api/storage';
import { GetServerSideProps } from "next";
import Head from 'next/head';
import Card from 'components/Card/Card';
import CardHead from 'components/Card/CardHead';
import CardContent from 'components/Card/CardContent';
import css from 'styled-jsx/css';

const Storages = ({ storages }) => (
  <main>
    <Head>
      <title>UpCloud</title>
    </Head>
    <Card>
      <CardHead title="Storages">
      </CardHead>
      <CardContent>
        <ul>
          {storages.map((storage) => {
            return (
              <li key="{storage.title}">{storage.title} <span>({storage.size} GB)</span></li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
    <style jsx>
      {`
        @import "color";

          li {
            margin-bottom: 0.3rem;
          }

          li span {
            color: color(grey, slider-bg);
          }

      `}
    </style>
  </main>
)

export async function getServerSideProps(context) {
  const request = await getStorages();
  const storages = request.data;
  console.log(storages)
  return {
    props: { storages }
  }
}

export default Storages;
