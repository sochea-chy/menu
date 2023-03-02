import { Badge } from "antd";
import React from "react";
import ListLayout from "../../../layout/list";

const List = () => {
  const columns = [
    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Seat Number",
      dataIndex: "seat_number",
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (total) => <>${total}</>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        if (status === "pedding") {
          return <Badge status="warning" text="Pedding" />;
        }
        if (status === "confirm") {
          return <Badge status="success" text="Confirm" />;
        } else {
          return <Badge status="error" text="Cancel" />;
        }
      },
    },
  ];

  return <ListLayout newAction={true} url="report" columns={columns} isReport={true} />;
};

export default List;
