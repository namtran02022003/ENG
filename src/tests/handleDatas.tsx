import axios from "axios";
import { useEffect, useState } from "react";

const MakeDatas = () => {
  const [oldDatas, setOldDatas] = useState([]);
  useEffect(() => {
    const getOldDatas = async () => {
      const res = await axios.get(
        "http://localhost:8000/a1?_page=2&_per_page=25"
      );
      setOldDatas(res.data);
    };
    getOldDatas();
  }, []);
  console.log(oldDatas);
  return <div>ok</div>;
};
export default MakeDatas;
