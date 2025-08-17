const Appointment = require("../controllers/appointment.controller")
const Router = require("express")
const router = new Router()
const appointmentController = new Appointment()

router.get("/appointment", appointmentController.getAppointments)
router.post("/appointment", appointmentController.createAppointment)
router.delete("/appointment/:id", appointmentController.deleteEvent)

module.exports = router