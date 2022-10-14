import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Cargando...</span>
    </Spinner>
  );
}
