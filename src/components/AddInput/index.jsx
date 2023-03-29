import styled from 'styled-components';


const AddSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3rem;

  label {
    margin-left: 1rem;
  }


  input {
    background-color: #F8B3E5;
    height: 30px;
    width: 90%;
    border-radius: 6px;
    margin: 15px;
    padding: 0.5rem;
  }
`

export default function AddInput(props) {
  return (
    
        <AddSection>
            <label htmlFor="">{props.description}</label>
            <input type="text" />
        </AddSection>
  );
}