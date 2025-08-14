const ClientController = require("../controllers/client.controller");
const Router = require("express")
const router =  new Router()
const clientController = new ClientController()

router.get("/client" , clientController.getClients)
router.post("/client", clientController.createClient)
router.delete("/client/:id", clientController.deleteClient)

module.exports = router