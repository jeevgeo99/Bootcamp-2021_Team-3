const pool = require('../../connection');


const getBilling = (req, res) =>{
    pool.query(`Select * from billing `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}



const addBilling= (req, res) => {
    const {service_cost,patient_id, test_cost, bill_date, total_amount} = req.query;
    pool.query(`INSERT INTO billing (service_cost, patient_id, test_cost, bill_date, total_amount) 
            VALUES ($1, $2, $3, $4, $5)`, [service_cost,patient_id,test_cost,bill_date,total_amount], (error, results) => {
        if(error) throw error;
        res.status(200).send("Bill added successfully");
        console.log("Bill added");
    })
}

module.exports={
    getBilling,addBilling
}




//Mapping


// const addBilling = (req, res) => {
//     const data = req.body;

//     const obj = data.map(bill => {
//         pool.query(`INSERT INTO billing (service_cost, patient_id, test_cost, bill_date, total_amount) 
//         VALUES ($1, $2, $3, $4, $5)`, [bill.service_cost,bill.patient_id,bill.test_cost,bill.bill_date, bill.total_amount], (error, results) => {
//             if(error) throw error;
//         })
//     })
//     if (obj) {
//         res.status(200).send("Record added successfully");
//         console.log("Record added");
//     }
// }
