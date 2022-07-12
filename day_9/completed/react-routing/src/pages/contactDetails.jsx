import React from "react";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>Hello {params.contactId}</div>;
};

export default ContactDetails;
