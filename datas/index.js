import axios from "axios";

// axios.get("http://localhost:8000/a2").then((data) => {
//   const newData = data?.data.map((d, i) => { return ({ ...d, id: i + 1 }) })
//   return newData
// }).then((d) => {
// return axios.put("http://localhost:8000/a2",JSON.stringify(d),{
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
// }).then(d => {
//   console.log(d)
// })
// const datas = [{
//     "en": "book",
//     "vn": "đặt chỗ",
//     "type": "v.",
//     "ipa": "/bʊk/"
//   },
//   {
//     "en": "borrow",
//     "vn": "mượn",
//     "type": "v.",
//     "ipa": "/ˈbɒr.əʊ/"
//   },
//   {
//     "en": "boss",
//     "vn": "sếp",
//     "type": "n.",
//     "ipa": "/bɒs/"
//   },
//   {
//     "en": "bottom",
//     "vn": "đáy",
//     "type": "n., adj.",
//     "ipa": "/ˈbɒt.əm/"
//   },
//   {
//     "en": "bowl",
//     "vn": "bát",
//     "type": "n.",
//     "ipa": "/bəʊl/"
//   },
//   {
//     "en": "brain",
//     "vn": "não",
//     "type": "n.",
//     "ipa": "/breɪn/"
//   },
//   {
//     "en": "bridge",
//     "vn": "cầu",
//     "type": "n.",
//     "ipa": "/brɪdʒ/"
//   },
//   {
//     "en": "bright",
//     "vn": "sáng",
//     "type": "adj.",
//     "ipa": "/braɪt/"
//   },
//   {
//     "en": "brilliant",
//     "vn": "rực rỡ",
//     "type": "adj.",
//     "ipa": "/ˈbrɪl.jənt/"
//   },
//   {
//     "en": "broken",
//     "vn": "bị hỏng",
//     "type": "adj.",
//     "ipa": "/ˈbrəʊ.kən/"
//   },
//   {
//     "en": "brush",
//     "vn": "chải",
//     "type": "v., n.",
//     "ipa": "/brʌʃ/"
//   },
//   {
//     "en": "burn",
//     "vn": "đốt cháy",
//     "type": "v.",
//     "ipa": "/bɜːn/"
//   },
//   {
//     "en": "businessman",
//     "vn": "doanh nhân",
//     "type": "n.",
//     "ipa": "/ˈbɪz.nɪs.mən/"
//   },
//   {
//     "en": "button",
//     "vn": "nút",
//     "type": "n.",
//     "ipa": "/ˈbʌt.ən/"
//   },
//   {
//     "en": "camp",
//     "vn": "cắm trại",
//     "type": "n., v.",
//     "ipa": "/kæmp/"
//   },
//   {
//     "en": "camping",
//     "vn": "cắm trại",
//     "type": "n.",
//     "ipa": "/ˈkæm.pɪŋ/"
//   },
//   {
//     "en": "campus",
//     "vn": "khuôn viên",
//     "type": "n.",
//     "ipa": "/ˈkæm.pəs/"
//   },
//   {
//     "en": "can",
//     "vn": "có thể",
//     "type": "modal v.",
//     "ipa": "/kæn/"
//   },
//   {
//     "en": "candy",
//     "vn": "kẹo",
//     "type": "n.",
//     "ipa": "/ˈkæn.di/"
//   },
//   {
//     "en": "care",
//     "vn": "chăm sóc",
//     "type": "n., v.",
//     "ipa": "/keər/"
//   },
//   {
//     "en": "careful",
//     "vn": "cẩn thận",
//     "type": "adj.",
//     "ipa": "/ˈkeə.fəl/"
//   },
//   {
//     "en": "carefully",
//     "vn": "một cách cẩn thận",
//     "type": "adv.",
//     "ipa": "/ˈkeə.fəl.i/"
//   },
//   {
//     "en": "carpet",
//     "vn": "thảm",
//     "type": "n.",
//     "ipa": "/ˈkɑː.pɪt/"
//   },
//   {
//     "en": "cartoon",
//     "vn": "hoạt hình",
//     "type": "n.",
//     "ipa": "/kɑːˈtuːn/"
//   },
//   {
//     "en": "case",
//     "vn": "trường hợp",
//     "type": "n.",
//     "ipa": "/keɪs/"
//   },
//   {
//     "en": "cash",
//     "vn": "tiền mặt",
//     "type": "n.",
//     "ipa": "/kæʃ/"
//   },
//   {
//     "en": "catch",
//     "vn": "bắt",
//     "type": "v.",
//     "ipa": "/kætʃ/"
//   },
//   {
//     "en": "cause",
//     "vn": "nguyên nhân",
//     "type": "n., v.",
//     "ipa": "/kɔːz/"
//   },
//   {
//     "en": "celebrate",
//     "vn": "kỷ niệm",
//     "type": "v.",
//     "ipa": "/ˈsɛl.ɪ.breɪt/"
//   },
//   {
//     "en": "celebrity",
//     "vn": "người nổi tiếng",
//     "type": "n.",
//     "ipa": "/sɪˈlɛb.rɪ.ti/"
//   },
//   {
//     "en": "cell",
//     "vn": "tế bào",
//     "type": "n.",
//     "ipa": "/sɛl/"
//   },
//   {
//     "en": "century",
//     "vn": "thế kỷ",
//     "type": "n.",
//     "ipa": "/ˈsɛn.tʃər.i/"
//   },
//   {
//     "en": "certain",
//     "vn": "chắc chắn",
//     "type": "adj.",
//     "ipa": "/ˈsɜː.tən/"
//   },
//   {
//     "en": "certainly",
//     "vn": "chắc chắn rồi",
//     "type": "adv.",
//     "ipa": "/ˈsɜː.tən.li/"
//   },
//   {
//     "en": "chance",
//     "vn": "cơ hội",
//     "type": "n.",
//     "ipa": "/tʃæns/"
//   },
//   {
//     "en": "character",
//     "vn": "nhân vật",
//     "type": "n.",
//     "ipa": "/ˈkær.ɪk.tər/"
//   },
//   {
//     "en": "charity",
//     "vn": "từ thiện",
//     "type": "n.",
//     "ipa": "/ˈtʃær.ɪ.ti/"
//   },
//   {
//     "en": "chat",
//     "vn": "trò chuyện",
//     "type": "v., n.",
//     "ipa": "/tʃæt/"
//   },
//   {
//     "en": "check",
//     "vn": "kiểm tra",
//     "type": "n.",
//     "ipa": "/tʃɛk/"
//   },
//   {
//     "en": "chef",
//     "vn": "đầu bếp",
//     "type": "n.",
//     "ipa": "/ʃɛf/"
//   },
//   {
//     "en": "chemistry",
//     "vn": "hóa học",
//     "type": "n.",
//     "ipa": "/ˈkɛm.ɪ.stri/"
//   },
//   {
//     "en": "chip",
//     "vn": "miếng nhỏ",
//     "type": "n.",
//     "ipa": "/tʃɪp/"
//   },
//   {
//     "en": "choice",
//     "vn": "sự lựa chọn",
//     "type": "n.",
//     "ipa": "/tʃɔɪs/"
//   },
//   {
//     "en": "church",
//     "vn": "nhà thờ",
//     "type": "n.",
//     "ipa": "/tʃɜːrtʃ/"
//   },
//   {
//     "en": "cigarette",
//     "vn": "điếu thuốc lá",
//     "type": "n.",
//     "ipa": "/ˌsɪɡ.ərˈɛt/"
//   },
//   {
//     "en": "circle",
//     "vn": "vòng tròn",
//     "type": "n., v.",
//     "ipa": "/ˈsɜː.kəl/"
//   },
//   {
//     "en": "classical",
//     "vn": "cổ điển",
//     "type": "adj.",
//     "ipa": "/ˈklæs.ɪ.kəl/"
//   },
//   {
//     "en": "clear",
//     "vn": "rõ ràng",
//     "type": "adj.",
//     "ipa": "/klɪər/"
//   },
//   {
//     "en": "clearly",
//     "vn": "một cách rõ ràng",
//     "type": "adv.",
//     "ipa": "/ˈklɪər.li/"
//   },
//   {
//     "en": "clerk",
//     "vn": "thư ký",
//     "type": "n.",
//     "ipa": "/klɜːk/"
//   },
//   {
//     "en": "climate",
//     "vn": "khí hậu",
//     "type": "n.",
//     "ipa": "/ˈklaɪ.mət/"
//   },
//   {
//     "en": "close",
//     "vn": "gần",
//     "type": "adj.",
//     "ipa": "/kləʊz/"
//   },
//   {
//     "en": "closed",
//     "vn": "đóng",
//     "type": "adj.",
//     "ipa": "/kləʊzd/"
//   },
//   {
//     "en": "closet",
//     "vn": "tủ quần áo",
//     "type": "n.",
//     "ipa": "/ˈklɒz.ɪt/"
//   },
//   {
//     "en": "clothing",
//     "vn": "quần áo",
//     "type": "n.",
//     "ipa": "/ˈkləʊ.ðɪŋ/"
//   },
//   {
//     "en": "cloud",
//     "vn": "đám mây",
//     "type": "n.",
//     "ipa": "/klaʊd/"
//   },
//   {
//     "en": "coach",
//     "vn": "huấn luyện viên",
//     "type": "n.",
//     "ipa": "/kəʊtʃ/"
//   },
//   {
//     "en": "coast",
//     "vn": "bờ biển",
//     "type": "n.",
//     "ipa": "/kəʊst/"
//   },
//   {
//     "en": "code",
//     "vn": "mã",
//     "type": "n.",
//     "ipa": "/kəʊd/"
//   },
//   {
//     "en": "colleague",
//     "vn": "đồng nghiệp",
//     "type": "n.",
//     "ipa": "/ˈkɒl.iːɡ/"
//   },
//   {
//     "en": "collect",
//     "vn": "thu thập",
//     "type": "v.",
//     "ipa": "/kəˈlɛkt/"
//   },
//   {
//     "en": "column",
//     "vn": "cột",
//     "type": "n.",
//     "ipa": "/ˈkɒl.əm/"
//   },
//   {
//     "en": "comedy",
//     "vn": "hài kịch",
//     "type": "n.",
//     "ipa": "/ˈkɒm.ə.di/"
//   },
//   {
//     "en": "comfortable",
//     "vn": "thoải mái",
//     "type": "adj.",
//     "ipa": "/ˈkʌm.fə.tə.bəl/"
//   },
//   {
//     "en": "comment",
//     "vn": "bình luận",
//     "type": "n.",
//     "ipa": "/ˈkɒm.ɛnt/"
//   },
//   {
//     "en": "communicate",
//     "vn": "giao tiếp",
//     "type": "v.",
//     "ipa": "/kəˈmjuː.nɪ.keɪt/"
//   },
//   {
//     "en": "community",
//     "vn": "cộng đồng",
//     "type": "n.",
//     "ipa": "/kəˈmjuː.nə.ti/"
//   },
//   {
//     "en": "compete",
//     "vn": "cạnh tranh",
//     "type": "v.",
//     "ipa": "/kəmˈpiːt/"
//   },
//   {
//     "en": "competition",
//     "vn": "cuộc thi",
//     "type": "n.",
//     "ipa": "/ˌkɒm.pəˈtɪʃ.ən/"
//   },
//   {
//     "en": "complain",
//     "vn": "phàn nàn",
//     "type": "v.",
//     "ipa": "/kəmˈpleɪn/"
//   }]

// datas.forEach((d) => {
//     axios.post("http://localhost:8000/a2", JSON.stringify(d))
// })
axios.get('http://localhost:8000/a2')
  .then(response => {
    const data = response.data;

    // Thêm key id cho từng item
    const updatedData = data.map((item, index) => {
      return { ...item, id: index+1 };
    });

    // Gửi yêu cầu PUT để cập nhật dữ liệu
    return axios.put('http://localhost:8000/a2', updatedData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  })
  .then(response => {
    console.log('Updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });