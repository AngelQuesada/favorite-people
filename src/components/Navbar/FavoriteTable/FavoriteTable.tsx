import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import type { GridRowModel } from '@mui/x-data-grid';
import type { Person } from '../../../interfaces/people';
import type { AppStore } from '../../../redux/store';
import { usePeopleTable } from '../../../hooks/usePeopleTable';

const FavoriteTable: React.FC = () => {
  const { columns } = usePeopleTable();

  const favorites: Person[] = useSelector((state: AppStore) => state.favorites);

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
        rows={favorites}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        getRowId={(row: GridRowModel) => row.id}
      />
    </>
  );
};

export default FavoriteTable;
