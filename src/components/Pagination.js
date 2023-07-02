import { useEffect, useState } from "react"
import { Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Pagination(props) {
  let [pagination, setPagination] = useState([]);

  function setPaginationArray() {
    let copyPagination = [];
    for(let i = props.currentPage; i <= props.currentPage + 4; i++) {
      copyPagination.push(i);
    }
    setPagination(copyPagination);
    console.log('pagination', pagination);
  }


  useEffect(() => {
    setPaginationArray();
  }, [props.currentPage])


  return (
    <div className="layout-center">
      <div className="pagination-wrap">
        <IconButton disabled={props.currentPage === 1 ? true : false } aria-label="page-prev" onClick={props.prev}>
          <ArrowBackIosNewIcon style={{fontSize: 'small'}} />
        </IconButton>
        {
          pagination.map((item) => {
            return (
              <Button className={'pagination-num-btn ' + (item === props.currentPage ? 'is-active' : null)} color="inherit" size="small" key={item} onClick={() => { props.jump(item) }}>{item}</Button>
            )
          })
        }
        <IconButton className="pagination-icon-next-btn" aria-label="page-next" onClick={props.next}>
          <ArrowForwardIosIcon style={{fontSize: 'small'}} />
        </IconButton>
      </div>
    </div>  
  )
}