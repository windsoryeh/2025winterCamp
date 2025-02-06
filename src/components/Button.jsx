// 子組件接收 props：
function Button(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
        </div>
    );
}
export default Button;