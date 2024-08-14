import axios from "axios";

axios.get("http://localhost:8000/a2").then((data) => { console.log(data) })
const datas = [
  { name: "sddsds" },
  {name:"dsdsdsdsdsd"}
]
datas.forEach((d) => {
    axios.post("http://localhost:8000/a2", JSON.stringify(d))
})