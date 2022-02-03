const axios = require("axios").default;

const index = ({ heros }) => {
  return (
    <div>
      <h1 className="display-3">SuperHero Identity Menager</h1>
      <div style={{ display: "flex", "flex-wrap": "wrap" }}>
        {heros.map((hero) => {
          return (
            <div className="card m-5" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{hero.superHero}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={`/${hero._id}`} className="btn btn-primary mx-3">
                  View Hero
                </a>
                <a href={`/${hero._id}/edit`} className="btn btn-primary">
                  Edit Hero
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  console.log(res.data);
  const { heros } = res.data;
  return {
    props: {
      heros: heros,
    },
  };
}

export default index;
