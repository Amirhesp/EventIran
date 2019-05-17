import React from 'react'
export default class SingleEvent extends React.Component {

  render(){
    let data = this.props.data;
    return (

      <div className="col l3 m4 s12">
        <div className="card small" id="cardsheight">
          <a href="/details">
            <div className="card-image" style={{marginBottom: "5px"}}>
             <img src={require('../pic.jpg')} alt= "img" />
            </div>
          <h3 className="card-title fontColorLB" style={{
              fontSize: "15px",
              textAlign:'center',
              padding: "5px",
              margin:5
            }}
          >{data.name}
          </h3>
          <p style={{
              fontSize:'11px',
              padding:3,
              margin:2,
              color:'#555',
              textAlign:'center'
            }}
          >{data.city} {data.date}
          </p>
          </a>
          <hr style={{border:'none',borderTop:'1px solid #eee',width:'95%',marginBottom:2}}/>
          <div className="card-action" style={{padding:5,borderTop:'0px solid',paddingTop:0}}>
            <p style={{
                fontSize: "10px",
                color:'#555',
                margin:3,
              }}
            >
              برگزار کننده :
            </p>
            <a href="" style={{
                fontSize: "13px"
              }}
            >{data.promoter}
            </a>
            <a className="btn buttonColor col l12" style={{
                fontSize: "14px",
                marginTop: "6px"
              }}
            >
              ثبت نام
            </a>
          </div>
        </div>
</div>

    )
  }

}
