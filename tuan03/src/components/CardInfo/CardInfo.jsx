

const CardInfo = ({info}) => {
    console.log("Dữ liệu đang được truyền xuống cha...")
  return (
    <div className="cardInfo-container">
        <div className="card-info">
            <h3>Họ tên: {info.name}</h3>
            <p>Email: {info.email}</p>
            <p>Age: {info.age}</p>
        </div>
    </div>
  )
}

export default CardInfo