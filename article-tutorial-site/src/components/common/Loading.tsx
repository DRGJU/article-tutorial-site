import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="loading-text">加载中...</p>
      </div>
    </div>
  );
};

export default Loading;
