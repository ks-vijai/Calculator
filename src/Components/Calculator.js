import React, { useState, useReducer } from "react";
import "./style.css";

let initialOperation = {
  previousValue: 0,
  operation: "",
  symbol: "",
};

function Calculator() {
  let [prevValue, setPrevValue] = useState("");
  let [currentValue, setCurrentValue] = useState("");
  let [showValue, setShowValue] = useState(false);
  let [answer, setAnswer] = useState(0);

  let reducer = (currentState, action) => {
    switch (action) {
      case "division":
        if (answer > 0) {
          setPrevValue(answer);
          setShowValue(false);
          setAnswer(0);
          setCurrentValue("");
          return {
            previousValue: answer,
            operation: "division",
            symbol: "/",
          };
        } else {
          return {
            previousValue: prevValue,
            operation: "division",
            symbol: "/",
          };
        }
      case "add":
        if (answer > 0) {
          setPrevValue(answer);
          setShowValue(false);
          setAnswer(0);
          setCurrentValue("");
          return {
            previousValue: answer,
            operation: "add",
            symbol: "+",
          };
        } else {
          return {
            previousValue: prevValue,
            operation: "add",
            symbol: "+",
          };
        }
      case "subtract":
        if (answer > 0) {
          setPrevValue(answer);
          setShowValue(false);
          setAnswer(0);
          setCurrentValue("");
          return {
            previousValue: answer,
            operation: "subtract",
            symbol: "-",
          };
        } else {
          return {
            previousValue: prevValue,
            operation: "subtract",
            symbol: "-",
          };
        }
      case "multiply":
        if (answer > 0) {
          setPrevValue(answer);
          setShowValue(false);
          setAnswer(0);
          setCurrentValue("");
          return {
            previousValue: answer,
            operation: "multiply",
            symbol: "*",
          };
        } else {
          return {
            previousValue: prevValue,
            operation: "multiply",
            symbol: "*",
          };
        }
      case "modulo":
        if (answer > 0) {
          setPrevValue(answer);
          setShowValue(false);
          setAnswer(0);
          setCurrentValue("");
          return {
            previousValue: answer,
            operation: "modulo",
            symbol: "%",
          };
        } else {
          return {
            previousValue: prevValue,
            operation: "modulo",
            symbol: "%",
          };
        }
      default:
        return {
          operation: "",
        };
    }
  };

  let setValue = (e) => {
    if (data.previousValue > 0 && data.operation) {
      setShowValue(true);
      currentValue = currentValue + e.target.value;
      setCurrentValue(currentValue);
      calculateAnswer();
    } else {
      prevValue = prevValue + e.target.value;
      setPrevValue(prevValue);
    }
  };

  let [data, reduce] = useReducer(reducer, initialOperation);

  let calculateAnswer = () => {
    let ansValue;
    switch (data.operation) {
      case "add":
        ansValue = parseFloat(data.previousValue) + parseFloat(currentValue);
        setAnswer(parseFloat(ansValue));
        break;
      case "subtract":
        ansValue = parseFloat(data.previousValue) - parseFloat(currentValue);
        setAnswer(parseFloat(ansValue));
        break;
      case "multiply":
        ansValue = data.previousValue * currentValue;
        setAnswer(parseFloat(ansValue));
        break;
      case "division":
        ansValue = data.previousValue / currentValue;
        setAnswer(parseFloat(ansValue));
        break;
      case "modulo":
        ansValue = data.previousValue % currentValue;
        if (parseFloat(data.previousValue) < parseFloat(currentValue)) {
          setAnswer("Error");
        } else {
          setAnswer(parseFloat(ansValue));
        }
        break;
      default:
        setAnswer(0);
        break;
    }
  };

  let resetToDefaultValues = () => {
    setShowValue(false);
    data.operation = "";
    data.symbol = "";
    setAnswer(0);
    setCurrentValue("");
  };

  let clearOldValue = () => {
    setPrevValue(answer);
    resetToDefaultValues();
  };

  let clearAll = () => {
    resetToDefaultValues();
    setPrevValue("");
  };

  return (
    <React.Fragment>
      <div className="heading-bar">
        <h2 className="heading">Calculator</h2>
      </div>
      <div className="caluclator-grid">
        <div className="output-screen">
          <div className="previous-value">
            {prevValue} {data.symbol}
            {showValue && currentValue}
          </div>
          <div className="current-value">{answer}</div>
        </div>
        <button className="clear-button" onClick={clearAll}>
          AC
        </button>
        <button onClick={() => reduce("modulo")}>%</button>
        <button onClick={() => reduce("division")}>/</button>
        <button value="1" onClick={(e) => setValue(e)}>
          1
        </button>
        <button value="2" onClick={(e) => setValue(e)}>
          2
        </button>
        <button value="3" onClick={(e) => setValue(e)}>
          3
        </button>
        <button onClick={() => reduce("multiply")}>*</button>
        <button value="4" onClick={(e) => setValue(e)}>
          4
        </button>
        <button value="5" onClick={(e) => setValue(e)}>
          5
        </button>
        <button value="6" onClick={(e) => setValue(e)}>
          6
        </button>
        <button onClick={() => reduce("add")}>+</button>
        <button value="7" onClick={(e) => setValue(e)}>
          7
        </button>
        <button value="8" onClick={(e) => setValue(e)}>
          8
        </button>
        <button value="9" onClick={(e) => setValue(e)}>
          9
        </button>
        <button onClick={() => reduce("subtract")}>-</button>
        <button value="." onClick={(e) => setValue(e)}>
          .
        </button>
        <button value="0" onClick={(e) => setValue(e)}>
          0
        </button>
        <button className="clear-button" onClick={clearOldValue}>
          =
        </button>
      </div>
    </React.Fragment>
  );
}

export default Calculator;
