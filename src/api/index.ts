import axios from "axios";
type PARAMS_TYPE = {
  _page: number;
  _limit: number;
};
const getQuestions = async (type: string, params?: PARAMS_TYPE) => {
  try {
    const questions = await axios.get(`http://localhost:8000/${type}`, {
      params,
    });
    return questions.data;
  } catch (error) {
    console.log("Errors when get questions:", error);
  }
};
export default getQuestions;
