import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import dynamic from 'next/dynamic';

import { ProductData } from 'typings/product';

const LazyText = dynamic(() => import('antd/lib/typography/Text'), {
  loading: () => <div />,
});

type ControlPanelProps = {
  dataSource: ProductData[];
  isLoading?: boolean;
};

const columns: ColumnsType<ProductData> = [
  { dataIndex: 'name', title: 'Name' },
  { dataIndex: 'count', title: 'Count' },
  { dataIndex: 'preparationTime', title: 'Preparation Time' },
  {
    dataIndex: 'status',
    title: 'Status',
    render: (status: ProductData['status']) => (
      <LazyText type={status === 'PREPARING' ? 'danger' : 'success'}>
        {status}
      </LazyText>
    ),
  },
];

function ControlPanel({ dataSource, isLoading = false }: ControlPanelProps) {
  return (
    <Table<ProductData>
      bordered
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      pagination={false}
      scroll={{ y: '20rem' }}
      size="small"
      tableLayout="fixed"
      title={() => 'Control Panel'}
    />
  );
}

export default ControlPanel;
