const Pool = require("pg").Pool;
let instance = null;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "howareyou@17",
  database: "formls",
});

module.exports = pool;
pool.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  //console.log('db ' + pool.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async insertDetails(data) {
    console.log(data);
    const response = await new Promise((resolve, reject) => {
      const query = `INSERT INTO candidate_details(pname,gender,dob,email,phone,linkedin,github,time) values ('${data.name}','${data.gender}','${data.dob}',
		  '${data.email}','${data.phone}','${data.linkedin}','${data.github}',now());`;

      pool.query(query, (err, result) => {
        console.log(result);
        if (err) reject(new Error(err.message));
        resolve(result);
      });
    });
    return response !== 0 ? true : false;
  }

  
  async insertExp(data) {
    console.log(data);
    console.log(Object.keys(data).length);
    // var i=0;
    var length = Object.keys(data.experience).length;
    for (var i = 0; i < length; i++) {
      const response = await new Promise((resolve, reject) => {
        const query = `INSERT INTO experience(company,designation,from_date,to_date,ctc) values ('${data.experience[i].company}','${data.experience[i].designation}','${data.experience[i].fromdate}',
		  '${data.experience[i].todate}','${data.experience[i].ctc}');`;
        console.log(query);
        pool.query(query, (err, result) => {
          console.log(result);
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });
    }
    return response !== 0 ? true : false;
  }

  async getskills() {
		try {
			const response = await new Promise((resolve, reject) => {
				const query =
					'SELECT skill FROM skillmaster;';
        
				pool.query(query, (err, results) => {
					if (err) reject(new Error(err.message));
          console.log(results.rows);
					resolve(results.rows);
				});
			});
			return response;
		} catch (error) {
			console.log('error in read', error);
		}
	}

  async insertSalary(data) {
    console.log(data);
    const response = await new Promise((resolve, reject) => {
      console.log("hi");
      const query = `INSERT INTO candidate_profiling(expected_salary) values ('${data.expected_salary}');`;

      pool.query(query, (err, result) => {
        console.log(result);
        if (err) reject(new Error(err.message));
        resolve(result);
        console.log(err);
      });
    });
    return response !== 0 ? true : false;
  }
  async insertEdu(data) {
    // console.log(data);
    const response = await new Promise((resolve, reject) => {
      const values = [...data.school, ...data.bachelors, ...data.master].map(
        (item) => `('${Object.values(item).slice(1).join("','")}')`
      );
      const query = `INSERT INTO education (category, institution, stream, yearofpassing, percentage) VALUES ${values.join(
        ", "
      )}`;
      console.log(query);
      pool.query(query, (err, result) => {
        console.log(result);
        if (err) reject(new Error(err.message));
        console.log(err);
        resolve(result);
      });
    });
    return response !== 0 ? true : false;
  }
}

module.exports = DbService;
