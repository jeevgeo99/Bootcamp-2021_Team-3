const pool = require('../../connection');

const query4 = (req, res) =>{
    pool.query(`SELECT patient_name,sum(total_amount)
    FROM billing
    JOIN patient ON billing.patient_id = patient.patient_id
    GROUP BY patient.patient_id;    
    `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}

module.exports={
    query4
}
