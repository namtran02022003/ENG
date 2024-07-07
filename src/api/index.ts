import axios from "axios"

const getQuestions = async (category:string) => {
    try {
    const questions = await axios.get("/datas/Questions.json")
        return questions.data[category]
    } catch (error) {
        console.log("Errors when get question:", error)
    }
    
}
export default getQuestions