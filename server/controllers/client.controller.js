const db = require("../db")

class ClientController {
  async createClient(req, res) {
    const {name, insta} = req.body
    const newClient = await db.query(`INSERT INTO client (name, insta) values ($1, $2) RETURNING *`, [name, insta])
    res.json(newClient)
  }

  async getClients(req, res) {
    const clients = await db.query(`SELECT * FROM client`)
    res.json(clients.rows)
  }

  async deleteClient(req, res) {
    const id = req.params.id 
    console.log(id);
    const client = await db.query(`DELETE FROM client WHERE id = $1`, [id])
    res.json(client)
  }
}

module.exports = ClientController