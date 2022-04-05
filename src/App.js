import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import data from '../src/mock/data.json'
import {addPositions} from "./Store/Positions/actionPositions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPositions(data))
    })

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
