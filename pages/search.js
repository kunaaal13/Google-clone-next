import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import { API_KEY, Context_KEY } from '../Keys';
import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Search</title>
        <link rel="icon" href="/google.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_KEY}&q=${context.query.term}
        &start=${startIndex}`
      ).then((response) => response.json());

  //After the server side is rendered, Pass the results to client
  return {
    props: {
      results: data,
    },
  };
}
