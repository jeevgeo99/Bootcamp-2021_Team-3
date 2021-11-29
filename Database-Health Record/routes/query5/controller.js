const pool = require('../../connection');
const query5 = (req, res) =>{
    pool.query(`SELECT hospital.hospital_name, patient.patient_name, doctor.doctor_name , treatment.summary_notes 
    FROM treatment
    INNER JOIN hospital ON treatment.hospital_id = hospital.hospital_id
    INNER JOIN doctor ON treatment.doctor_id = doctor.doctor_id
    INNER JOIN patient ON treatment.patient_id = patient.patient_id
    WHERE patient.patient_name LIKE 'D%';    
    `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}
module.exports={
    query5
}
