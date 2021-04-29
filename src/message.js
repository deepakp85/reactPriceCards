export default function Message(prop){
    return <div className='col-lg-4'>
                <div className='card mb-5 mb-lg-0'>
                    <div className='card-body'>
                    <h5 className="card-title text-muted text-uppercase text-center">{prop.data.type}</h5>
                    <h6 className="card-price text-center">{prop.data.currency}{prop.data.price}<span className="period">{prop.data.period}</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                        {
                            prop.data.offers.map((e) => <li class={e.isEnabled ? "" : "text-muted"}><span class="fa-li"><i class={`fas ${e.isEnabled ? "fa-check" : "fa-times"}`}></i></span>{e.name}</li>)
                        }
                        </ul>
                        <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
}