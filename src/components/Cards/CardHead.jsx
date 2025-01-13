import React from 'react'

const CardHead = () => {
    const arrow = "/images/arrow.png";
    const icon = "/images/icon.png";


  return (
    <section>
        {/* main-div */}
         <div style={{
           display: "flex", justifyContent:"space-around", gap:"20px",
           backgroundColor: "#f5f5f5", 
         }}>
        {/* div-one */}
       <div>
       <div style={{color: '#9A2935', fontSize: 18, fontFamily: 'Inter', fontWeight: '500',  wordWrap: 'break-word'}}>Our Portfolio</div>

<div style={{color: '#641B33', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Our Company <br /> Portfolio</div>
       </div>


        {/* div-two */}
      <div>
        <img src={arrow} alt="Example" width="100" />
        </div>
       {/* div-three */}
        <div>
            <button>ALL MEMBER <span> <img src={icon} alt="Example" width="20" /></span> </button>
            
        </div>
        </div>
      
    </section>
  )
}

export default CardHead
