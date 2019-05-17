import React from 'react'
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const tdStyle={
  padding:5
}
function createData(id , name, author, date) {
  return { id, name, author, date};
}
const data = [
  createData(125 , 'جامعه متن باز قم' , ' علیرضا '  , ' 28/5/1395  - 17:30' ),
  createData(126 , 'جامعه متن باز قم' , ' علیرضا '  , ' 28/5/1395  - 17:30' ),
  createData(127 , 'جامعه متن باز قم' , ' علیرضا '  , ' 28/5/1395  - 17:30' ),
  createData(128 , 'جامعه متن باز قم' , ' علیرضا فخاریان قمی '  , ' 28/5/1395  - 17:30' )

];

export default function MyTickets(props){
  console.log(data);
  return (
    <Card style={{direction:'rtl',marginTop:10}}>
      <CardContent>
        <h5> بلیط های من  :</h5>
        <hr style={{border:'none', marginBottom:10,borderTop:'1px solid #eee'}}/>
        <Typography component="p" color="textSecondary">
          در این قسمت می‌توانید گزارش خریدهایتان را همراه با تاریخ و ساعت ببینید و نتیجه خرید و محل برگزاری و جزئیات رویداد خریداری‌شده را نیز بررسی نمایید.
        </Typography><br/>
        <Divider /><br/><br/>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell style={tdStyle}> رویداد ها : </TableCell>
              <TableCell style={tdStyle}> برگزار کننده :</TableCell>
              <TableCell style={tdStyle}> تاریخ :</TableCell>
              <TableCell style={tdStyle}> عملیات :</TableCell>
              <TableCell style={tdStyle}></TableCell>
              <TableCell style={tdStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell style={tdStyle}> {n.name} </TableCell>
                  <TableCell style={tdStyle}> {n.author} </TableCell>
                  <TableCell style={tdStyle}> {n.date} </TableCell>
                  <TableCell style={tdStyle}> <Button variant="raised" color="primary"> دانلود بلیط </Button></TableCell>
                  <TableCell style={tdStyle}> <Button variant="raised" color="primary"> انتقال بلیط </Button></TableCell>
                  <TableCell style={tdStyle}> گزارش </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  )
}
