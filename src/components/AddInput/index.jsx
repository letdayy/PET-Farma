import { AddSection } from "./style";

export default function AddInput(props) {
  return (
    
        <AddSection>
            <label htmlFor="">{props.description}</label>
            <input type="text" />
        </AddSection>
  );
}