import { useState } from "react";
const axios = require("axios").default;
import { Form, Button } from "react-bootstrap";
import Router, { useRouter } from "next/router";

function editHero({ hero }) {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const headleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const headleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Edit a hero</h1>
      <form onSubmit={headleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>SupreHero Name</Form.Label>
          <Form.Control
            onChange={headleChange}
            type="text"
            name="superHero"
            placeholder="Enter supreHero name"
            value={form.superHero}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Real Name</Form.Label>
          <Form.Control
            onChange={headleChange}
            type="text"
            name="realName"
            placeholder="Enter  real name"
            value={form.realName}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
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

export default editHero;
