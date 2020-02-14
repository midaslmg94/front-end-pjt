import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Streaming</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Live</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Support</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Concert</a></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;