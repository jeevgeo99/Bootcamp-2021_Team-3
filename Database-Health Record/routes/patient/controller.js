const pool = require('../../connection');


const getPatient = (req, res) =>{
    pool.query(`Select * from patient `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}
const addPatient= (req, res) => {
    const {patient_id,patient_name,patient_address,patient_contact,patient_emergencycontact,hospital_id,user_id} = req.query;
    pool.query(`insert into patient(patient_id, patient_name,patient_address,patient_contact,patient_emergencycontact,hospital_id,user_id) 
            values ($1, $2, $3, $4, $5,$6,$7)`, [patient_id,patient_name,patient_address,patient_contact,patient_emergencycontact,hospital_id,user_id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Bill added successfully");
        console.log("Bill added");
    })
}



module.exports={
    getPatient,addPatient
}



//Mapping

// const addPatient = (req, res) => {
//     const data = req.body;

//     const obj = data.map(patients => {
//         pool.query(`insert into patient(patient_id, patient_name,patient_address,patient_contact,patient_emergencycontact,hospital_id,user_id) 
//         values ($1, $2, $3, $4, $5,$6,$7)`, [patients.patient_id,patients.patient_name,patients.patient_address,patients.patient_contact, patients.patient_emergencycontact,patients.hospital_id,patients.user_id], (error, results) => {
//             if(error) throw error;
//         })
//     })
//     if (obj) {
//         res.status(200).send("Record added successfully");
//         console.log("Record added");
//     }
// }
