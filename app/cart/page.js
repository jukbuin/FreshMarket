export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={장바구니[0]}/>
            <CartItem item={장바구니[1]}/>
            <Banner card="비씨카드"/>
            <Banner card="현대카드"/>
            <Button color="#e8eaf6"/>
        </div>
    )
}

function Banner(props){
    return <h5>{props.card} 결제 행사중</h5>
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Button(props) {
    return (
        <div>
            <button style={{background : props.color, borderStyle : "none", borderRadius : "2px"}}>결제하기</button>
        </div>
    )
}