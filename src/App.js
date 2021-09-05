import ExpenseItem from "./components/ExpenseItem";

function App() {
  //regular js ==>imparative approch as we give step by step instructions that the ingine will follow
  // document.getElementById("root").innerHTML = "this is Aya!";
  // const para = document.createElement("p");
  // para.textContent = "hello";
  // document.getElementById("root").append(para);
  //but react uses a declaritive approch to do the dom work
  // and update the view with target state defined in the function
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
