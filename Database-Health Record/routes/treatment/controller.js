const pool = require('../../connection');

const getTreatment = (req, res) =>{
    pool.query(`Select * from treatment `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}

const addTreatment= (req, res) => {
    const {hospital_id,patient_id,doctor_id,timestamp,summary_notes,bill_id} = req.query;
    pool.query(`INSERT INTO treatment (hospital_id, patient_id, doctor_id, timestamp, summary_notes,bill_id) 
             VALUES ($1, $2, $3, $4, $5,$6)`, [hospital_id,patient_id,doctor_id,timestamp,summary_notes,bill_id], 
             (error, results) => {
        if(error) throw error;
        res.status(200).send("Bill added successfully");
        console.log("Bill added");
    })
}

module.exports={
    getTreatment,addTreatment
}






//Mapping

// const addTreatment = (req, res) => {
//     const data = req.body;

//     const obj = data.map(treat => {
//         pool.query(`INSERT INTO treatment (hospital_id, patient_id, doctor_id, timestamp, summary_notes,bill_id) 
//         VALUES ($1, $2, $3, $4, $5,$6)`, [treat.hospital_id,treat.patient_id,treat.doctor_id,treat.timestamp, treat.summary_notes,treat.bill_id], (error, results) => {
//             if(error) throw error;
//         })
//     })
//     if (obj) {
//         res.status(200).send("Record added successfully");
//         console.log("Record added");
//     }
// }