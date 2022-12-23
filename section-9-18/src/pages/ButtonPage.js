import Button from "../components/Button";
import { GoBell } from 'react-icons/go'

const ButtonPage = () => {
  <div>
    <Button outline primary rounded onClick={() => console.log('Click')} onMouseEnter={() => console.log("Hover")}>
      <GoBell />
      Order
    </Button>
    <Button outline secondary rounded >
      Order
    </Button>
    <Button outline warning rounded >
      Order
    </Button>
    <Button outline success rounded >
      Order
    </Button>
    <Button outline danger rounded >
      Order
    </Button>
  </div>
};

export default ButtonPage;