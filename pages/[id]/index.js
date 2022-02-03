import React from "react";
const axios = require("axios").default;
import { useRouter } from "next/router";

// const deleteHero = () => {

//     try {

//     }

// }

function EachHero({ hero }) {
  const router = useRouter();
  const heroId = router.query.id;
  console.log(heroId);

  const deletehero = async () => {
    try {
      const deletehe = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Identity of hero</h1>
      <div className="card m-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{hero.superHero}</h5>
          <p className="card-text">
            <b>{hero.realName}</b> <br />
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            href={`/${hero._id}`}
            onClick={deletehero}
            className="btn btn-danger mx-3"
          >
            Delete Hero
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  console.log(res.data);
  const { hero } = res.data;
  return {
    props: {
      hero: hero,
    },
  };
}

export default EachHero;
