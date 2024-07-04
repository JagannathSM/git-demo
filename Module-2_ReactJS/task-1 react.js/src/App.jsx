import './App.css'

export default function App(){

  return (
    <div className="container App">
        <CardsValue/>
    </div>
  )
}

function CardsValue(){
  const cards_detail = [
    {title:"FREE",pack:"$0/month",data:["✔ Single User","✔ 50GB Storage","✔ Unlimited Public Projects","✔ Community Access"],data1:["✘ Unlimited Private Projects","✘ Dedicated Phone Support", "✘ Free Subdomain","✘ Monthly Status Reports",""]},
    {title:"PLUS",pack:"$9/month",data:["✔ Single User","✔ 50GB Storage","✔ Unlimited Public Projects","✔ Community Access","✔ Unlimited Private Projects","✔ Dedicated Phone Support", "✔ Free Subdomain"],data1:["✘ Monthly Status Reports",""]},
    {title:"PRO",pack:"$49/month",data:["✔ Single User","✔ 50GB Storage","✔ Unlimited Public Projects","✔ Community Access","✔ Unlimited Private Projects","✔ Dedicated Phone Support", "✔ Free Subdomain","✔ Monthly Status Reports"],data1:[""]}
  ]
  return(
    
    <div className='row'>
    {    cards_detail.map((ele)=>{
      
    const card_style = {
      backgroundColor: "#fff1f1",
      color:"black",
      margin:"15px 5px",
      borderRadius : "25px",
      width:"100%"
    }
    const buttons = {
      width:"100%",
      borderRadius : "25px"
    }
  return(
        <div className='col-md-4'>
          <div className="card" style={card_style}>
            <div className="card-body">
              <small className="text-muted">{ele.title}</small>
              <h4 className="card-title">{ele.pack}</h4>
              <CardInnerPart arr={ele.data} arr1={ele.data1}/>
              <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true" style={buttons}>Button</a>
            </div>
          </div>
        </div>
)}
)}
  </div>
)}

function CardInnerPart({arr,arr1}){
  const para_style = {
    display: "flex",
    justifyContent: "justify",
    color:"black"
  }
  const para_style1 = {
    display: "flex",
    justifyContent: "justify"
  }
  return(
    <div className='Para_class'>
     {arr.map((res)=>{
      return(
        <p style={para_style}>{res}</p>
      )
     }
    )}
    {arr1.map((ele1)=>{
      return(
        <p style={para_style1}>{ele1}</p>
      )
    }
    )}
    </div>
  )
}