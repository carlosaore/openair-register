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
  height: 70px;
  margin-left: 5px;
`

function App() {
  return (
    <>
      <Barra>
        <Img src="http://www.dooblocawi.com/client/AssemblyCache/Atc_639f4647-0b6b-420a-a4d3-b55160ffadf4_0.png" alt=""/>
        <Img src="http://www.dooblocawi.com/client/AssemblyCache/Atc_7fe28d3d-4032-43c3-94f2-cb32fb604290_0.png" alt=""/>
        <Img src="http://www.dooblocawi.com/client/AssemblyCache/Atc_bb2686fe-f3c5-4351-acd1-51eb383385ff_0.png" alt=""/>
        <Img src="http://www.dooblocawi.com/client/AssemblyCache/Atc_50492416-0909-4f22-b8ea-d82fe8f0bed4_0.jpeg" alt=""/>
        <Img src="http://www.dooblocawi.com/client/AssemblyCache/Atc_faa5b74a-46ec-47cf-ae94-ddc8de6cdfba_0.png" alt=""/>
      </Barra>     
    </>
  );
}

export default App;
