import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {selectFilter} from "../Store/Filters/selectorFilter";
import {useDispatch, useSelector} from "react-redux";
import {clearFilter, removeFilter} from "../Store/Filters/actionFilter";


const FilterPanel = () => {

  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  if(currentFilter.length === 0)  return null


  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map(filter => (
              <Badge onClear={() => dispatch(removeFilter(filter))} key={filter} variant="clearable">{filter}</Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};