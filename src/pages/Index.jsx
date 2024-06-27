import React from "react";

const Index = () => {
  const data = [
    {
      systemId: "123456789",
      account: "acc123",
      orderId: "1001",
      paymentName: "支付寶",
      paymentCode: "ZFB001",
      paymentAccount: "12345678901",
      payer: "張三",
      amount: 1000,
      fee: 10,
      channelFee: 18,
      totalCommission: 28,
      availableBalance: 972,
      profit: 3,
    },
    {
      systemId: "987654321",
      account: "acc456",
      orderId: "1002",
      paymentName: "微信支付",
      paymentCode: "WX001",
      paymentAccount: "98765432101",
      payer: "李四",
      amount: 2000,
      fee: 20,
      channelFee: 36,
      totalCommission: 56,
      availableBalance: 1944,
      profit: 6,
    },
    {
      systemId: "456789123",
      account: "acc789",
      orderId: "1003",
      paymentName: "銀行轉帳",
      paymentCode: "BK001",
      paymentAccount: "45678912301",
      payer: "王五",
      amount: 1500,
      fee: 15,
      channelFee: 27,
      totalCommission: 42,
      availableBalance: 1458,
      profit: 4.5,
    },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-6xl p-4 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="bg-gray-200 p-2 rounded-t-lg">
          <div className="grid grid-cols-12 gap-2 font-bold">
            <div>系統單號</div>
            <div>帳號</div>
            <div>單號</div>
            <div>支付名稱</div>
            <div>支付代碼</div>
            <div>支付帳號</div>
            <div>付款人</div>
            <div>金額</div>
            <div>應付手續費</div>
            <div>管道費用</div>
            <div>總傭金</div>
            <div>可用餘額</div>
            <div>盈餘</div>
          </div>
        </div>
        <div className="bg-white">
          {data.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-12 gap-2 p-2 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div>{row.systemId}</div>
              <div>{row.account}</div>
              <div>{row.orderId}</div>
              <div>{row.paymentName}</div>
              <div>{row.paymentCode}</div>
              <div>{row.paymentAccount}</div>
              <div>{row.payer}</div>
              <div>{row.amount}</div>
              <div>{row.fee}</div>
              <div>{row.channelFee}</div>
              <div>{row.totalCommission}</div>
              <div>{row.availableBalance}</div>
              <div>{row.profit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;