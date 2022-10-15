import Button from "./Button";
import Input from "./Input";

function App() {
  return (
    <div className="container">
      <div className="items">
        <Input />
        <div className="button-group">
          <Button content="7" mathContent = "7" />
          <Button content="8" mathContent = "8" />
          <Button content="9" mathContent = "9" />
          <Button content="+" mathContent = "+" bgColorCode = "#256D85"/>
        </div>
        <div className="button-group">
          <Button content="4" mathContent = "4" />
          <Button content="5" mathContent = "5" />
          <Button content="6" mathContent = "6" />
          <Button content="-" mathContent = "-" bgColorCode = "#256D85"/>
        </div>
        <div className="button-group">
          <Button content="1" mathContent = "1" />
          <Button content="2" mathContent = "2" />
          <Button content="3" mathContent = "3" />
          <Button content="x" mathContent = "*" bgColorCode = "#256D85"/>
        </div>
        <div className="button-group">
          <Button content="0" mathContent = "0" />
          <Button content="." mathContent = "." />
          <Button content="AC" mathContent = "AC" />
          <Button content="/" mathContent = "/" bgColorCode = "#256D85"/>
        </div>
          <Button content="=" mathContent = "=" bgColorCode="#06283D"></Button>
      </div>
    </div>    
  )
}

export default App;
