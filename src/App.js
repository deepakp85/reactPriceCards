import Message from './message'
export default function App(){
let pricedata = [
    {type:'FREE',
    currency:'$',
    price:0,
    period:'/month',
    offers:[
      {
        name:'Single User',
        isEnabled:true    
      },
      {
        name:'5GB Storage',
        isEnabled:true
      },
      {
        name:'Unlimited Public Projects',
        isEnabled:true
      },
      {
        name:'Community Access',
        isEnabled:true
      },
      {
        name:'Unlimited Private Projects',
        isEnabled:false
      },
      {
        name:'Dedicated Phone Support',
        isEnabled:false
      },
      {
        name:'Free Subdomain',
        isEnabled:false
      },
      {
        name:'Monthly Status Reports',
        isEnabled:false
      }]
    },
    {type:'PLUS',
    currency:'$',
    price:9,
    period:'/month',
    offers:[
      {
        name:'5 Users',
        isEnabled:true    
      },
      {
        name:'50GB Storage',
        isEnabled:true
      },
      {
        name:'Unlimited Public Projects',
        isEnabled:true
      },
      {
        name:'Community Access',
        isEnabled:true
      },
      {
        name:'Unlimited Private Projects',
        isEnabled:true
      },
      {
        name:'Dedicated Phone Support',
        isEnabled:true
      },
      {
        name:'Free Subdomain',
        isEnabled:true
      },
      {
        name:'Monthly Status Reports',
        isEnabled:false
      }]
    },
    {type:'PRO',
    currency:'$',
    price:49,
    period:'/month',
    offers:[
      {
        name:'Unlimeted Users',
        isEnabled:true    
      },
      {
        name:'150GB Storage',
        isEnabled:true
      },
      {
        name:'Unlimited Public Projects',
        isEnabled:true
      },
      {
        name:'Community Access',
        isEnabled:true
      },
      {
        name:'Unlimited Private Projects',
        isEnabled:true
      },
      {
        name:'Dedicated Phone Support',
        isEnabled:true
      },
      {
        name:'Unlimited Free Subdomains',
        isEnabled:true
      },
      {
        name:'Monthly Status Reports',
        isEnabled:true
      }]
    }
]
return <>
<section className="pricing py-5">
<div className="container">
  <div className="row">
  {
  pricedata.map((obj) => <Message data={obj}></Message>)
  }
  </div>
</div>
</section>
</>
}
  