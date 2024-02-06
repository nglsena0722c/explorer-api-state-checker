import React from 'react';
import './App.css';
import Row from './Row';
import EVMRow from './EVMRow';

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">

    <div className="text-[40px]">XPLA Explorer API State Checker</div>
    <div className="mt-7 overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <tbody>
          <Row name="LCD" link="https://dimension-lcd.xpla.dev/blocks/latest "/>
          <Row name="FCD" link="https://dimension-fcd.xpla.dev/v1/block_page?page=1&pageSize=25&order=DESC"/>
          <Row name="RPC" link="https://dimension-rpc.xpla.dev/block"/>
          <EVMRow name="EVM_RPC" link="https://dimension-evm-rpc.xpla.dev/"/>
          <Row name="Github Usercontent" link="https://raw.githubusercontent.com/xpladev/explorer-assets/main/accounts.json"/>
          <Row name="assets.xpla.io" link="https://assets.xpla.io/extensions.json"/>
        </tbody>
      </table>
    </div>
  </main>
  );
}

export default App;
