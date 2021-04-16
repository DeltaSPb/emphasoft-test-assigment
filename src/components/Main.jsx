import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from './Modal';

const Main = ({ children }) => (
  <main className="bg-light d-flex flex-grow-1">
    <Container className="overflow-auto col-11 col-md-8 bg-whilte shadow">
      {children}
    </Container>
    <Modal />
  </main>
);

export default Main;
