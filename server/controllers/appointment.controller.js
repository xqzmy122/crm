const db = require("../db");

class Appointment {
  async getAppointments(req, res) {
    const appointments = await db.query(`SELECT * FROM appointment`);
    res.json(appointments.rows);
  }

  async createAppointment(req, res) {
    console.log(req.body);
    const { date, procedure, notes, client_id, id, title } = req.body;
    const newAppointment = db.query(
      `INSERT INTO appointment (date, procedure, notes, client_id, id, title) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [date, procedure, notes, client_id, id, title]
    );
    res.json(newAppointment);
  }

  async deleteEvent(req, res) {
    const id = req.params.id;
    const deletedEvent = db.query(`DELETE FROM appointment WHERE id = $1`, [
      id,
    ]);
    res.json(deletedEvent);
  }
}

module.exports = Appointment;
