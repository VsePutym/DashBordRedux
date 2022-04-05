import {useDispatch, useSelector} from "react-redux";
import {selectAllPositions, selectVisiblePositions} from "../Store/Positions/selectorPositions";
import {JobPosition} from "./JobPosition";
import {addFilter} from "../Store/Filters/actionFilter";
import {selectFilter} from "../Store/Filters/selectorFilter";

const JobList = () => {


  const currentFilter = useSelector(selectFilter);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilter));

  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} handleAddFilter={handleAddFilter} />
      ))}
    </div>
  )
}

export {JobList};