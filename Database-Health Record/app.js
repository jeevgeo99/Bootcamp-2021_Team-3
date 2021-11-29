const express=require('express')
const app=express();
const pool = require("./connection");
const usercredRoutes=require("./routes/user_cred/routes")
const patientRoutes=require("./routes/patient/routes")
const billingRoutes=require("./routes/billing/routes")
const treatmentRoutes=require("./routes/treatment/routes")
const query1Routes=require("./routes/query1/routes")
const query2Routes=require("./routes/query2/routes")
const query3Routes=require("./routes/query3/routes")
const query4Routes=require("./routes/query4/routes")
const query5Routes=require("./routes/query5/routes")
//const demo_table=require("./routes/demo_table/routes")

app.use(express.json({limit: '500mb'}));

app.use('/api/v1/user_cred', usercredRoutes);
app.use('/api/v1/patient', patientRoutes);
app.use('/api/v1/billing', billingRoutes);
app.use('/api/v1/treatment', treatmentRoutes);
app.use('/api/v1/query1', query1Routes);
app.use('/api/v1/query2', query2Routes);
app.use('/api/v1/query3', query3Routes);
app.use('/api/v1/query4', query4Routes);
app.use('/api/v1/query5', query5Routes);
//app.use('/api/v1/demo_table', demo_table);
/*
app.get('/api/v1/demo_table',(req,res) => {
    const a = new Date();
    let status;
    for (let index = 0; index < 1000000; index++) {
        pool.query("SELECT fullname FROM demo_table WHERE demo_id=$1",[index+1],(error,results) => {
            if(error) throw error;
            let r = results.rows;
            if(r === 999999) {
                const b = new Date();
                const time = b-a;
                console.log(time);
            }
        })
        status = index
    }
    console.log(status);
})
*/
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})
