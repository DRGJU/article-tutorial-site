const SimpleTest = () => {
  return (
    <div style={{ padding: '100px', color: 'white' }}>
      <h1 style={{ fontSize: '48px', color: 'red' }}>测试页面 - 如果你能看到这段文字说明 React 正常！</h1>
      <p style={{ fontSize: '24px' }}>这是测试内容</p>
      <button onClick={() => alert('按钮正常工作！')}>点击测试</button>
    </div>
  );
};

export default SimpleTest;
