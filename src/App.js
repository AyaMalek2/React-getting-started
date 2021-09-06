import Expenses from "./components/Expenses/Expenses";
// "./components/Expenses";

function App() {
  //regular js ==>imparative approch as we give step by step instructions that the ingine will follow
  // document.getElementById("root").innerHTML = "this is Aya!";
  // const para = document.createElement("p");
  // para.textContent = "hello";
  // document.getElementById("root").append(para);
  //but react uses a declaritive approch to do the dom work
  // and update the view with target state defined in the function

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
