import React from 'react'
import styles from './C1.module.css' //globally apply vayo hai css or yo module maa matra vayo?
const Cone = () => {
  return (
    <>
    
    <div className={styles.container}>
        <div className={styles.block1}>

       <div className={styles.numcont}>
 <div className={styles.pawan}>
        <div className={styles.numbers}>1</div>
       <div className={styles.item}>
       <p className={styles.p}>STEP 1</p>
       <h3 className={styles.subh}>YOUR INFO</h3>
       </div>
       </div>

       <div className={styles.pawan}>
        <div className={styles.number}>2</div>
       <div className={styles.item}>
       <p className={styles.p}>STEP 2</p>
       <h3 className={styles.subh}>SELECT PLAN</h3>
       </div>
       </div> <div className={styles.pawan}>
        <div className={styles.number}>3</div>
       <div className={styles.item}>
       <p className={styles.p}>STEP 3</p>
       <h3 className={styles.subh}>ADD-ONO</h3>
       </div>
       </div> <div className={styles.pawan}>
        <div className={styles.number}>4</div>
       <div className={styles.item}>
       <p className={styles.p}>STEP 4</p>
       <h3 className={styles.subh}>SUMMARY</h3>
       </div>
       </div>
        </div>
       
       
       
           
        </div>
        






        <div className={styles.block2}>

          <div className={styles.content}>
                  <h1>Personal info</h1>
                 <p className={styles.sub}>Please provide your names, email address, and phone number.</p>

          </div>
          <div className={styles.input}>
           <p className={styles.label}>Name</p>
<input type="text" placeholder='eg.pawan bhatta' />
<p className={styles.label}>Email Address</p>
<input type="email"  placeholder='eg.stephenking@gmail.com'/>
<p className={styles.label}>Phone Number</p>
<input type="phone" placeholder='eg.+9779812787898'/>
          </div>
          {/* comment added */}
          <button>Next Step</button>
        </div>


        
    </div>
    </>
  )
}

export default Cone