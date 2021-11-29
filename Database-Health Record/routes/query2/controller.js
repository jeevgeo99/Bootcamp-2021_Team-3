const pool = require('../../connection');

const query2 = (req, res) =>{
    pool.query(`SELECT hospital_name,sum(total_amount)    
    FROM hospital
    RIGHT JOIN patient ON hospital.hospital_id = patient.hospital_id
    RIGHT JOIN billing ON patient.patient_id = billing.patient_id
    WHERE billing.bill_date = '2021-03-02' GROUP BY hospital_name; 
    `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}

module.exports={
    query2
}
