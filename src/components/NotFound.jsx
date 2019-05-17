import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound(props){
  return(
    <div style={{textAlign:'center'}}>
      <h1>متاسفیم صفحه مورد نظر پیدا نشد</h1>
      <h5>می توانید از
         <Link to='/' className="hyperLinkColor"> این لینک </Link>
          استفاده کنید
      <h5>Error 404 Page Not Found</h5>
      </h5><br/><br/><br/><br/><br/><br/>
    </div>
  )
}
