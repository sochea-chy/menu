import { Avatar } from "antd";
import React from "react";
import ListLayout from "../../../layout/list";
import FormComponents from "./form";

const List = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => <Avatar shape="square" size={64} src={image} />
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

  return <ListLayout url = "category" columns={columns} form={FormComponents} beforeSubmit={beforeSubmit} beforeInitialValues={beforeInitialValues} />;
};

export default List;
