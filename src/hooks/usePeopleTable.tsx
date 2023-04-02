import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import type { Person } from '../interfaces/people';
import { People } from '../data/people';
import { Checkbox } from '@mui/material';
import { addFavorite } from '../redux/states/favorites';
import { addPeople } from '../redux/states/people';
import { getLocalStorage } from '../utilities/localStorage.utility';

export const usePeopleTable = (): { columns: GridColDef[] } => {
  const getFavorites = (): Person[] => {
    const favoritesLocalStorage = getLocalStorage('favorites');

    if (favoritesLocalStorage !== null) {
      return favoritesLocalStorage;
    }

    return [];
  };

  const [selectedPeople, setSelectedPeople] = useState<Person[]>(getFavorites());

  const dispatch = useDispatch();

  const findPerson = (person: Person): Person | undefined => {
    return selectedPeople.find((p) => {
      return p.id === person.id;
    });
  };

  const filterSelectedPeople = (person: Person): Person[] => {
    return selectedPeople.filter((p) => {
      return p.id !== person.id;
    });
  };

  const handleChange = (person: Person): void => {
    const filteredPeople = findPerson(person)
      ? filterSelectedPeople(person)
      : [...selectedPeople, person];

    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size='medium'
              checked={!!findPerson(params.row)}
              onChange={() => {
                handleChange(params.row);
              }}
            />
          }
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Happiness',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return { columns };
};
