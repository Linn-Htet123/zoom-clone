import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <main>{params.id}</main>;
};

export default Meeting;
