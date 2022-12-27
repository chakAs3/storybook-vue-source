export interface CTableDataSourceProps {
  key: string;
  client: string;
  destination: string;
  departDate: string;
  returnDate: string;
  participants: number;
  state: string;
  parameterState: string;
}

export interface CTableColumnsProps {
  title: string;
  dataIndex: string;
  key: string;
}
