import styles from "../styles/Home.module.css";
import { getImage } from "../services/getApi";
import { useState } from "react";

const Home = () => {
  const [imageURL, setImagemURL] = useState();
  const [alt, setAlt] = useState();

  async function validateImage(e) {
    e.preventDefault();

    await getImage(imageURL)
      .then((res) => {
        const data = res;
        console.log(data);
        setAlt(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={validateImage}>
        Image URL
        <input onChange={(e) => setImagemURL(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      <p>Alt:{alt}</p>
      {/* <Head>
        <title>Alt Image Generator</title>
        <meta name="description" content="Alt image generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.h1}> Alt Image Generator</h1>
      <p>
        Send a request to `/api/generate` with `imageUrl` as a query parameter:
      </p>
      <Link
        className={styles.highlight}
        href="/api/generate?imageUrl=https://dub.sh/confpic"
      >
        http://localhost:3000/api/generate?imageUrl=https://dub.sh/confpic
      </Link> */}
    </div>
  );
};

export default Home;
