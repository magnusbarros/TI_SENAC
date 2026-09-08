import {usuario} from "./usuario"
import {operador} from "./operador"
import {medico} from "./medicos"
import {pessoa} from "./pessoa"

let user = new usuario("bepis", "123.112.446-85", "12/05/95")
user.agendamento()

let op = new operador("bipus", "779.664.854-96", "13/08/65")
op.agendamento()
op.consulta()

let med = new medico("bubis", "332.448.221-85", "05/09/78")
med.agendamento()
med.medicina()