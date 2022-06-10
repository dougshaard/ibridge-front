import React from "react";
import { Select } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import useData from "../../context/data";
const { Option } = Select;

export const Header = () => {
  const use = useData();

  const onChange = (date, dateString) => {
    if (dateString) {
      use.setDate(date.format("YYYY-MM-DD"));
    }
  };

  const disabledDate = (current) => {
    return current < moment("2022-05-16") || current > moment("2022-05-20");
  };

  return (
    <div>
      <Select
        placeholder="Cliente:"
        style={{ width: 120 }}
        onChange={use.changeCliente}
      >
        {use.clientes.map((item) => (
          <Option value={item.id}>{item.nome}</Option>
        ))}
      </Select>
      <Space direction="vertical" style={{ marginLeft: 20 }}>
        <DatePicker
          disabledDate={disabledDate}
          format={"DD/MM/YYYY"}
          locale={{
            lang: {
              placeholder: "Selecionar data",
              locale: "pt_BR",
            },
          }}
          value={moment(use.date)}
          onChange={onChange}
        />
      </Space>
    </div>
  );
};
