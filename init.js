import "./db";
import app from "./app"; // 마치 내가 app을 갖고 있듯이

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

// application을 app파일에서 가져왔기때문에 밑에처럼 코드 작성 가능
app.listen(PORT, handleListening);
