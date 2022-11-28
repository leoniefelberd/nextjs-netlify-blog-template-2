import Head from "next/head"
import Image from 'next/image'
import styles from "../styles/Home.module.scss"
import Link from 'next/link'
// import { Component } from 'react'
import React, { useState, useEffect, Component } from 'react'
// import { attributes, react as HomeContent } from '../content/home.md';
import ReactPlayer from 'react-player';

import projektData from "../pages/projekt/projekt.json";


// export default class Home extends Component {
class IndexPage extends React.Component {

    render() {
        // let { title, cats } = attributes;


        return (
            <div className={styles.container}>
                <Head>
                    <title>Roshan Adhihetty</title>
                    <meta name="description" content="Roshan Adhihetty – Fotograf" />
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>

                <main className={styles.main}>
                    <div className={styles.sitetitle}>Roshan Adhihetty</div>



                    <div className="auflistungkategorien">
                        {projektData.projekt.map((projekt, idx) => (
                            <div
                                key={projekt.title}
                            >
                                <div className="category-title">
                                    {projekt.title}
                                </div>
                            </div>
                        ))}
                    </div>


                    {/*         
        <article>
          <h1>{title}</h1>
          <HomeContent />

          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>

        </article> */}
                </main>
            </div>

        )
    }
}





export default IndexPage;