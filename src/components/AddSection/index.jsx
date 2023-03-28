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
  }
`

export default function AddInput() {
  return (
    
        <AddSection>
            <label htmlFor="">Nome do medicamento da FU</label>
            <input type="text" />
        </AddSection>
  );
}