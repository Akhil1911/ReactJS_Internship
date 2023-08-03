import Concepts from "../FirstProject/Concepts"
import "../FirstProject/index.css";
const concepts = [
  {
    title: "Components",
    image: "../images/components.png",
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: "../images/state.png",
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: "../images/events.png",
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function Index() {
  return (
    <div>
      <header> 
        {/* make header reusable too */}
        <img src={"../images/key-concepts.png"} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <Concepts concepts={concepts} />
    </div>
  );
}

export default Index;
