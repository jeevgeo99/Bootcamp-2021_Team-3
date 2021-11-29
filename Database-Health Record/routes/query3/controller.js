const pool = require('../../connection');
const query3 = (req, res) =>{
    pool.query(`select doctor_id, count(patient_id) 
    from treatment 
    where  doctor_id='1' 
    group by doctor_id;
    `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}
module.exports={
    query3
}
