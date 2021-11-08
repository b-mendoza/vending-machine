import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import dynamic from 'next/dynamic';

import Counter from 'components/Counter';

import { ProductData } from 'typings/product';

const LazyText = dynamic(() => import('antd/lib/typography/Text'), {
  loading: () => <div />,
});

type ControlPanelProps = {
  dataSource: ProductData[];
  isLoading?: boolean;
};

const columns: ColumnsType<ProductData> = [
  { dataIndex: 'name', ellipsis: true, title: 'Name' },
  { dataIndex: 'timesDispatched', ellipsis: true, title: 'Times Dispatched' },
  {
    dataIndex: 'timeToBePrepared',
    ellipsis: true,
    title: 'Time to be Prepared',
    render: (timeToBePrepared: number, rowData) => {
      const { status } = rowData;

      return status === 'PREPARING' ? (
        <>
          <Counter initialCount={timeToBePrepared} /> second(s)
        </>
      ) : (
        'N/A'
      );
    },
  },
  {
    dataIndex: 'status',
    ellipsis: true,
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
