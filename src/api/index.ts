import axios from "axios";
type PARAMS_TYPE = {
  _start: number;
  _limit: number;
};
const getQuestions = async (type: string, params?: PARAMS_TYPE) => {
  try {
    const res = await axios.get(`http://localhost:8000/${type}`, {
      params,
    });
    return res;
  } catch (error) {
    console.log("Errors when get questions:", error);
  }
};
export default getQuestions;
