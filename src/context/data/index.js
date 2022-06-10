import React from "react";
import Api from "../../service";

const Data = React.createContext({});

export const DataProvider = ({ children }) => {
  const [date, setDate] = React.useState("2022-05-16");
  const [clientes, setClientes] = React.useState([]);
  const [dataSet, setDataSet] = React.useState({});
  const [tables, setTables] = React.useState([]);

  const getAllDataByDate = React.useCallback(async () => {
    Api.get(`/geral/${date}`)
      .then((resp) => {
        setDataSet(resp.data[0]);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [date]);

  const getAllDataByDateAndClientes = React.useCallback(
    async (id) => {
      Api.get(`/geral/${date}/clientes/${id}`)
        .then((resp) => {
          setDataSet(resp.data[0]);
        })
        .catch((er) => {
          console.log(er);
        });
    },
    [date]
  );

  const getAllClientesByDate = React.useCallback(async () => {
    Api.get(`/geral/${date}/clientes`)
      .then((resp) => {
        let clientes = [
          {
            id: 0,
            nome: "Geral",
          },
          ...resp.data.map((item) => ({
            id: item.id,
            nome: item.clientName,
          })),
        ];
        setClientes(clientes);
        setTables(resp.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [date]);

  React.useEffect(() => {
    getAllDataByDate();
  }, [date]);

  React.useEffect(() => {
    getAllClientesByDate();
  }, [date]);

  const changeCliente = React.useCallback(
    (data) => {
      if (data == 0) {
        getAllDataByDate();
      } else {
        getAllDataByDateAndClientes(data);
      }
    },
    [date]
  );

  return (
    <Data.Provider
      value={{
        date,
        setDate,
        dataSet,
        clientes,
        changeCliente,
        tables,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default function useData() {
  return React.useContext(Data);
}
