const pool = require('../../connection');

const query1 = (req, res) =>{
    pool.query(`SELECT sum(total_amount)        
    FROM billing
    WHERE billing.bill_date < '2020-04-04';
    `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}

module.exports={
    query1
}
