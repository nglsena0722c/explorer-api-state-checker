import React from 'react';
import './App.css';
import Row from './Row';
import EVMRow from './EVMRow';
import useErrorRecord from './Zustand/useError';

function App() {
  const { errorRecord } = useErrorRecord();

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 " style={{
      zoom : 1.1
    }}>
      <div className="text-[40px]">XPLA Explorer API State Checker</div>
      <div className=" mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <tbody>
            <Row name="LCD" link="https://dimension-lcd.xpla.dev/blocks/latest" />
            <Row name="FCD" link="https://dimension-fcd.xpla.dev/v1/block_page?page=1&pageSize=25&order=DESC" />
            <Row name="RPC" link="https://dimension-rpc.xpla.dev/block" />
            <EVMRow name="EVM_RPC" link="https://dimension-evm-rpc.xpla.dev/" />
            <Row name="Github Usercontent" link="https://raw.githubusercontent.com/xpladev/explorer-assets/main/accounts.json" />
            <Row name="assets.xpla.io" link="https://assets.xpla.io/extensions.json" />
          </tbody>
        </table>
      </div>
      <div className="mt-10 p-4 w-full mx-[40px] border-[1px] border-solid border-black flex flex-col items-center ">
        <div className="text-[30px]">
          ErrorBoard
        </div>
        <div className="w-full p-[20px] bg-white">
          {
            (errorRecord && errorRecord.length !== 0) ?
              errorRecord.map((err) => <div>
                {err.time} - {err.name} : {err.error}
              </div>)
              :
              <span>No errors yet.</span>
          }
        </div>
      </div>
    </main>
  );
}


export default App;
