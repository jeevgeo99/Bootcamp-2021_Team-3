const pool = require('../../connection');



const getUsercred = (req, res) =>{
    pool.query(`Select * from user_cred `, (error, results)=>{
        if(error) throw error; 
        res.status(200).json(results.rows); 
    })
}

const addUsercred= (req, res) => {
    const {user_id,username,password} = req.query;
    pool.query(`insert into user_cred(user_id, username,password) 
    values ($1, $2, $3)`, [user.user_id,user.username,user.password], (error, results) => {
        if(error) throw error;
        res.status(200).send("Bill added successfully");
        console.log("Bill added");
    })
}


module.exports={
    getUsercred,addUsercred
}




//Mapping

// const addUsercred = (req, res) => {
//     const data = req.body;

//     const obj = data.map(user => {
//         pool.query(`insert into user_cred(user_id, username,password) 
//         values ($1, $2, $3)`, [user.user_id,user.username,user.password], (error, results) => {
//             if(error) throw error;
//         })
//     })
//     if (obj) {
//         res.status(200).send("Record added successfully");
//         console.log("Record added");
//     }
// }