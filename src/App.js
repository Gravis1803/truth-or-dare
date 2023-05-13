
import './App.css';

const truth = [
  "Bạn thích liếm vị trí nào của đối phương nhất, hãy thực hiện nó trong 10s",
  "Trung bình mỗi lần quan hệ bạn lên đỉnh bao nhiêu lần",
  "Bạn đã từng quan hệ mà không lên đỉnh chưa, cảm giác của bạn khi ấy thế nào",
  "Bạn đã từng có suy nghĩ sẽ quan hệ với người khác ngoài người yêu của bạn chưa",
  "Điều biến thái nhất mà bạn muốn đối phương làm với bạn là gì",
  "Bạn có hay bị nổi hứng thú tình dục khi không có người yêu bạn ở đó không, hãy kể lần gần nhất",
  "Đâu là nơi kỳ lạ nhất mà bạn từng đi một mình vào buổi tối",
  "Bạn đã từng thấy ai đó quan hệ ngoài đời thực chưa",
  "Lần gần nhất bạn xem sex là khi nào",
  "Lần đầu tiên bạn lên đỉnh là khi nào",
  "Nụ hôn đầu tiên của bạn là khi nào",
  "Bộ phận bạn yêu thích nhất trên chính cơ thể mình là gì",
  "Bộ phận bạn yêu thích nhất trên cơ thể đối phương là gì",
  "Bạn có bao giờ mơ được làm tình với đối tác chưa, lần gần nhất là khi nào",
  "Bạn có yêu tôi không, hãy bày tỏ tình yêu của bạn",
  "Có khi nào bạn bị kích thích đến mức không chịu nổi chưa",
  "Bạn muốn quan hệ bao nhiêu lần trong một tuần",
  

];

const dare = [
  "Slave hãy bò xung quanh giường 3 vòng",
  "Boss hãy đánh vào mông slave 3 lần",
  "Cả hai hãy hôn nhau kiểu pháp trong 10s",
  "Tự cởi một món đồ trên cơ thể",
  "Mút đầu ti của đối phương trong 20s",
  "Dùng miệng cởi một món đồ trên cơ thể đối phương",
  "Mát xa một bộ phận mà đối phương yêu cầu",
  "Nếu là nữ thì hãy tự đưa tay vào cô bé, nếu là nam hãy làm cho đối phương",
  "Nhìn vào mắt nhau, nếu ai nháy mắt trước thì phải làm theo yêu cầu của người kia",
  "Cho đối phương đưa tay vào lỗ sau của bạn",
  "Tiếp tục cởi một mảnh đồ trên người đối phương bằng miệng",
  "Nói một câu dơ bẩn",
  "Liếm chỗ ấy của đối phương trong vòng 1 phút",
  "Bịt mắt đối phương và BJ trong 3 phút",
  "Cả hai hãy thực hiện tư thế 69",
  "Nằm sấp và để đối phương dùng roi đánh vào mông hoặc lưng bạn(bạn chọn)",
  "Bạn bị bịt mắt và bị cù lét trong 30s",
  "Thì thầm vào tai đối phương những điều dơ bẩn",
  "Mút tai đối phương trong 20s",
  "Dùng miệng đút nước cho đối phương",
  "Thổi vào gáy đối phương, luân phiên giữa hơi nóng và hơi mát trong 30s",
  "Dùng tay ghi một chữ trên lưng đối phương, nếu đối phương trả lời đúng sẽ được thưởng, nếu sai hãy phạt(tự chọn)",
  "Chụp một bức ảnh của đối phương và gửi vào messenger",
  "Nhảy một điệu nhảy sexy",
  "Bạn nữ hãy cưỡi trên lưng bạn nam, chà xát cô bé vào lưng trong 1 phút",
  "Bạn phải đeo còng tay trong 2 vòng chơi tiếp theo",
  "Bạn nam đưa chuối vào trong cô bé, để yên không làm gì trong 10s rồi rút ra",
  "Ôm nhau thật chặt trong 2 phút, hãy cảm nhận nó",
  "Hôn nhau bằng môi trong 30s",
  "Hôn lên cổ đối phương trong 30s"
];

document.querySelector(".modal")

function handleTruth() {
  console.log(truth[0])
  const counter = Math.floor((Math.random())*(truth.length))
  document.querySelector(".modal").style.display = "block"
  document.querySelector(".text").innerHTML = truth[counter]
  truth.splice(counter, 1)
}

function handleDare() {
  console.log(dare[0])
  const counter = Math.floor((Math.random())*(dare.length))
  document.querySelector(".modal").style.display = "block"
  document.querySelector(".text").innerHTML = dare[counter]
  dare.splice(counter, 1)
}

function handleClose() {
  document.querySelector(".modal").style.display = "none"
  document.querySelector(".text").innerHTML = ''
}

function App() {
  
  return (
    <div className="App">
        <div className='banner'>
        </div>
        <div className='content'>
          <button className='truth button' onClick={handleTruth}>Truth</button>
          <button className='dare button' onClick={handleDare}>Dare</button>
        </div>
        <div className='modal'>
          <span className='text'></span>
          <button className='button close' onClick={handleClose} >Close</button>
        </div>
    </div>
  );
}

export default App;
