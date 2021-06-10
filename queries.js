const Pool = require("pg").Pool;

const pool = new Pool({
  user: "agent",
  host: "localhost",
  database: "deadDrop",
  password: "password",
  port: 5432,
});

const stack = new Stack();
const createUser = async (request, responce, element) => {
  let data, agentid, structureid;
  if (element) {
    data = element.data;
    agentid = element.agentid;
    structureid = element.structureid;
  } else {
    data = request.body.data;
    agentid = request.body.agentid;
    structureid = request.body.structureid;
  }

  pool.query(
    "INSERT INTO agent (data, agendid, structureid) VALUES ($1, $2, $3)",
    [date, agentid, structureid],
    (error, result) => {
      if (error) throw error;
      responce.status(201).json("user successfully created");
    }
  );
};

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    try{
    createUser(null, null, element)
    }
    catch(error) {
        console.error(error)
    }
    return this.count - 1;
  }
}

module.exports ={
    stack,
    createUser
};



