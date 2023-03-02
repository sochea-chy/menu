import { QRCode } from "antd";
import React from "react";
import ListLayout from "../../../layout/list";
import FormComponents from "./form";

const List = () => {
  const columns = [
    {
      title: "QRCode",
      dataIndex: "seat_number",
      render: (seat_number) => <QRCode value={`http://localhost:3000/client?seat_number=${seat_number}`}/>
    },
    {
      title: "Seat Number",
      dataIndex: "seat_number",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "discription",
    }
  ];

  const beforeInitialValues = (values) => {
    const newValue = {...values}
    newValue.image = values?.image?.file?.response ? values?.image?.file?.response  :  values.image;
    return newValue;
  }

  const beforeSubmit = (values) => {
    const newValues = { ...values };
    newValues.image = values?.image?.file?.response ? values?.image?.file?.response  :  values.image;
    return newValues;
  }

  return <ListLayout url = "seat" columns={columns} form={FormComponents} beforeSubmit={beforeSubmit} beforeInitialValues={beforeInitialValues} />;
};

export default List;
