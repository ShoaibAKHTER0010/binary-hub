import React from 'react'


const Choose = () => {
  const log1 = "/images/log-1.png";
  const blackarrow = "/images/black-arrow.png";
  const globe = "/images/globe.png";
                   

  return (
    <section>
        {/* main-div */}
        <div style={{height: '70vh',  }}>
            {/* div-one */}
            <div>
            <div style={{color: '#9A2935', fontSize: 18, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Why Choose Us</div>

            <div style={{color: '#641B33', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Why choose us ?</div>

            </div>

             {/* div-two */}
             <div style={{ display: "flex", justifyContent:"space-around", gap:"20px",}}> 
            {/* card-one */}
            <div class="background">
  <div class="container">
    <img  src={log1} width="80" />
  </div>
  <div style={{height: 36, color: '#641B33', fontSize: 26, fontFamily: 'Inter', fontWeight: '700',}}>Innovation</div>
  <div style={{color: '#A8A8A9', fontSize: 16, fontFamily: 'Inter', fontWeight: '500'}}>
    Sed ut perspiciatis unde omnis iste natus
    <br />
    error sit voluptatem accusantium.
  </div>
</div>

{/* card-two */}
<div class="background">
  <div style={{display: "flex", flexDirection: "column", gap:"40px" }}>
    <img  src={log1} width="80" />
  </div>
  <div style={{height: 36, color: '#641B33', fontSize: 26, fontFamily: 'Inter', fontWeight: '700',}}>Quality-Focused</div>
  <div style={{color: '#A8A8A9', fontSize: 16, fontFamily: 'Inter', fontWeight: '500'}}>
    Sed ut perspiciatis unde omnis iste natus
    <br />
    error sit voluptatem accusantium.
  </div>
</div>

{/* card-three */}
<div class="background">
  <div class="container">
    <img  src={log1} width="80" />
  </div>
  <div style={{height: 36, color: '#641B33', fontSize: 26, fontFamily: 'Inter', fontWeight: '700',}}>Value For Money</div>
  <div style={{color: '#A8A8A9', fontSize: 16, fontFamily: 'Inter', fontWeight: '500'}}>
    Sed ut perspiciatis unde omnis iste natus
    <br />
    error sit voluptatem accusantium.
  </div>
</div>
             </div>

             </div>

              {/* div-three */}
            <div style={{display: "flex", flexDirection: "column", gap:"100px"}}> 
              {/* one */}
            <div style={{display: "flex", justifyContent:"space-between"}}>
            <div style={{color: '#641B33', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Do you want to explore <br />
              our outstanding work?</div>
              {/* image */}
              <div>
              <img  src={globe} width="80" />
              </div>
            </div>

            {/* two */}
            <div style={{display: "flex", justifyContent:"space-between"}}>
            <div style={{color: '#A8A8A9', fontSize: 16, fontFamily: 'Inter', fontWeight: '500'}}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
accusantium , totam rem aperiam, eaque ipsa quae ab illo <br /> inventore <br />
et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim <br />
ipsam voluptatem quia voluptas sit.
  </div>

  {/* links */}
 <div style={{display: "flex", justifyContent:"space-between"}}>
 <div>dribbble<span> <img src={blackarrow} alt="Example" width="10" /></span></div>
  <div>linkedin<span><img src={blackarrow} alt="Example" width="10" /></span></div>
  <div>contact Us<span><img src={blackarrow} alt="Example" width="10" /></span></div>
 </div>


            </div>

            </div>
      
    </section>
  )
}

export default Choose
