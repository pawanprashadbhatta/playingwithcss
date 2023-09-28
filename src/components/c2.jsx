import React from 'react'
import styles from'./c2.module.css'
const C2 = () => {

    const Steps = [
        { number: 1, subheading: 'STEP 1', step: 'YOUR INFO'},
        { number: 2,  subheading: 'STEP 2', step:  'SELECT PLAN'},
        { number: 3, subheading: 'STEP 3', step: 'ADD-ON' },
        { number: 4,  subheading: 'STEP 4',step: 'SUMMARY '}
      ];
  return (
    <>
    <div className={styles.container}>

    <div className={styles.block1}>
      <div className={styles.numcont}>
        {Steps.map((step) => (
          <div className={styles.stepContainer} key={step.number}>
            <div className={styles.number}>{step.number}</div>
           
            <h3 className={styles.item}></h3>
            <div className={styles.item}>
                <h3 className={styles.subheading}>{step.subheading}</h3>
              <p className={styles.step}>{step.step}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>





    <div className={styles.block2}>
  <div className={styles.content}>
    <h1>Personal Info</h1>
    <p className={styles.sub}>Please provide your name, email address, and phone number.</p>
  </div>
  
  <div className={styles.input}>
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Pawan Bhatta"
        className={styles.inputField}
      />
    </div>

    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        placeholder="e.g. stephenking@gmail.com"
        className={styles.inputField}
      />
    </div>

    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        placeholder="e.g. +9779812787898"
        className={styles.inputField}
      />
    </div>
  </div>

  {/* Comment added */}
  <button>Next Step</button>
</div>


    </div>
    </>
  )
}

export default C2