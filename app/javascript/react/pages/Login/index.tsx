import React from "react";
import Container from "~/components/Container";
import Button from "~/components/Button";
import Authentication from "~/layouts/Authentication";
import Form from "~/components/Form";
import { login } from "~/api/authentication";
import { paths } from "~/paths";

export default function Login() {

  const handleSubmit = () => {
    window.location.href = paths.dashboard();
  };

  return (
    <Authentication>
      <Container>
        <Form service={login} onSubmit={handleSubmit}>
          <Form.Input
            name="user[email]"
            path="email"
            label="Email"
            type="text"
          />
          <Form.Input
            name="user[password]"
            path="password"
            label="Password"
            type="password"
          />
          <Button type="submit" title="Log In" />
        </Form>
      </Container>
    </Authentication>
  );
}
