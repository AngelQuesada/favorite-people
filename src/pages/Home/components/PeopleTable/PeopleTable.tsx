import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import type { GridRowModel } from '@mui/x-data-grid';
import type { Person } from '../../../../interfaces/people';
import type { AppStore } from '../../../../redux/store';

import { usePeopleTable } from '../../../../hooks/usePeopleTable';

const PeopleTable: React.FC = () => {
  const { columns } = usePeopleTable();

  const people: Person[] = useSelector((state: AppStore) => state.people);

  return (
    <>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        style={{
          marginTop: '2rem',
          maxWidth: '900px',
          backgroundColor: 'white',
          width: '100%',
        }}
        columns={columns}
        rows={people}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        paginationMode='client'
        getRowId={(row: GridRowModel) => row.id}
      />
    </>
  );
};

export default PeopleTable;
