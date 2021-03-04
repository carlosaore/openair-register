import styled from 'styled-components';

const Barra = styled.div`
  width: 80%;
  margin: 10px auto auto auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  :last-child {
    border-bottom: solid green;
  }
  

`

const Img = styled.img`
  height: 100px;
  height: 70px;
  margin-left: 5px;
`

function App() {
  return (
    <>
      <HeroImg1 />
      <Info />
      <Register />
    </>
  );
}

export default App;
