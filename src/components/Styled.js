import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  #textInput {
    border: 1px solid black;
    padding: 6px 10px;
    background : black;
    color : white;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .error {
    color: white;
    background: red;
    text-align: center;
    border: 1px solid black;
    margin-top: 20px
  }
  
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border: 1px solid black;
    padding: 10px;
    background: black;
  }

  p {
    font-family: 'tahoma';
    font-size:1.1 rem;
    color : white;
  }

  h5 {
    font-size: 0.8rem;
  }

 .kel {
    margin: 15px 0 15px 0;
    text-align: center;
    border: 1px solid black;
    padding: 10px;
  }
`;