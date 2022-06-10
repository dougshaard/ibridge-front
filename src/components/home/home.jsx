import React from "react";
import "./styles.css";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { Table } from "antd";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import useData from "../../context/data";
export const Home = () => {
  const use = useData();

  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    CanvasRenderer,
  ]);
  const columns = [
    {
      title: "Cliente",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Chamadas Total",
      dataIndex: "chamadas_total",
      key: "chamadas_total",
    },
    {
      title: "Chamadas Falha Operadora",
      dataIndex: "chamadas_falha_operadora",
      key: "chamadas_falha_operadora",
    },
    {
      title: "Chamadas Telefone incorreto",
      dataIndex: "chamadas_telefone_incorreto",
      key: "chamadas_telefone_incorreto",
    },
    {
      title: "Chamadas Não Atendida",
      dataIndex: "chamadas_nao_atendida",
      key: "chamadas_nao_atendida",
    },
    {
      title: "Chamadas Atendimento Maquina",
      dataIndex: "chamadas_atendimento_maquina",
      key: "chamadas_atendimento_maquina",
    },
    {
      title: "Chamadas Atendimento Humano",
      dataIndex: "chamadas_atendimento_humano",
      key: "chamadas_atendimento_humano",
    },
    {
      title: "Chamadas abandono Pré Fila",
      dataIndex: "chamadas_abandono_pre_fila",
      key: "chamadas_abandono_pre_fila",
    },
    {
      title: "Chamadas Abandono Fila",
      dataIndex: "chamadas_abandono_fila",
      key: "chamadas_abandono_fila",
    },
    {
      title: "Chamadas Atendimento PA",
      dataIndex: "chamadas_atendimento_pa",
      key: "chamadas_atendimento_pa",
    },
    {
      title: "Ocorrências Total",
      dataIndex: "ocorrencias_total",
      key: "ocorrencias_total",
    },
    {
      title: "Ocorrências sem Contato",
      dataIndex: "ocorrencias_sem_contato",
      key: "ocorrencias_sem_contato",
    },
    {
      title: "Ocorrências com Contato",
      dataIndex: "ocorrencias_com_contato",
      key: "ocorrencias_com_contato",
    },
    {
      title: "Ocorrências Abordagem",
      dataIndex: "ocorrencias_abordagem",
      key: "ocorrencias_abordagem",
    },
    {
      title: "Ocorrências Fechamento",
      dataIndex: "ocorrencias_fechamento",
      key: "ocorrencias_fechamento",
    },
  ];

  return (
    <div>
      <div className="rowHome">
        <h2>Chamadas (por Dia e por Classificação)</h2>
        <h2>Ocorrências</h2>
      </div>
      <div style={{ display: "flex" }}>
        <ReactECharts
          echarts={echarts}
          style={{ width: "35%" }}
          option={{
            tooltip: {},
            legend: {},
            xAxis: {
              type: "category",
              data: [
                "Chamadas Total",
                "Chamadas Falha Operadora",
                "Chamadas Telefone incorreto",
                "Chamadas Não Atendida",
                "Chamadas Atendimento Maquina",
                "Chamadas Atendimento Humano",
                "Chamadas abandono Pré Fila",
                "Chamadas Abandono Fila",
                "Chamadas Atendimento PA",
              ],
            },
            yAxis: {},
            series: [
              {
                data: [
                  use.dataSet.chamadas_total,
                  use.dataSet.chamadas_falha_operadora,
                  use.dataSet.chamadas_telefone_incorreto,
                  use.dataSet.chamadas_nao_atendida,
                  use.dataSet.chamadas_atendimento_maquina,
                  use.dataSet.chamadas_atendimento_humano,
                  use.dataSet.chamadas_abandono_pre_fila,
                  use.dataSet.chamadas_abandono_fila,
                  use.dataSet.chamadas_atendimento_pa,
                ],
                type: "line",
              },
            ],
          }}
        />
        <ReactECharts
          echarts={echarts}
          style={{ width: "33%" }}
          option={{
            tooltip: {},
            series: [
              {
                type: "pie",
                data: [
                  {
                    value: use.dataSet.chamadas_total,
                    name: "Chamadas Total",
                  },
                  {
                    value: use.dataSet.chamadas_falha_operadora,
                    name: "Chamadas Falha Operadora",
                  },
                  {
                    value: use.dataSet.chamadas_telefone_incorreto,
                    name: "Chamadas Telefone incorreto",
                  },
                  {
                    value: use.dataSet.chamadas_nao_atendida,
                    name: "Chamadas Não Atendida",
                  },
                  {
                    value: use.dataSet.chamadas_atendimento_maquina,
                    name: "Chamadas Atendimento Maquina",
                  },
                  {
                    value: use.dataSet.chamadas_atendimento_humano,
                    name: "Chamadas Atendimento Humano",
                  },
                  {
                    value: use.dataSet.chamadas_abandono_pre_fila,
                    name: "Chamadas abandono Pré Fila",
                  },
                  {
                    value: use.dataSet.chamadas_abandono_fila,
                    name: "Chamadas Abandono Fila",
                  },
                  {
                    value: use.dataSet.chamadas_atendimento_pa,
                    name: "Chamadas Atendimento PA",
                  },
                ],
              },
            ],
          }}
        />
        <ReactECharts
          echarts={echarts}
          style={{ width: "33%" }}
          option={{
            tooltip: {},
            legend: {},
            xAxis: {
              data: [
                "Ocorrências Total",
                "Ocorrências sem Contato",
                "Ocorrências com Contato",
                "Ocorrências Abordagem",
                "Ocorrências Fechamento",
              ],
            },
            yAxis: {},
            series: [
              {
                name: "Ocorrências",
                type: "bar",
                data: [
                  use.dataSet.ocorrencias_total,
                  use.dataSet.ocorrencias_sem_contato,
                  use.dataSet.ocorrencias_com_contato,
                  use.dataSet.ocorrencias_abordagem,
                  use.dataSet.ocorrencias_fechamento,
                ],
              },
            ],
          }}
        />
      </div>
      <Table
        id="id"
        rowKey={"id"}
        dataSource={use.tables}
        columns={columns}
        pagination={false}
        scroll={{ x: 1200 }}
      />
    </div>
  );
};
