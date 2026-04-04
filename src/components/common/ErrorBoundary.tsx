import { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1 className="error-title">出错了</h1>
            <p className="error-message">
              抱歉，页面遇到了一些问题
            </p>
            {error && (
              <details className="error-details">
                <summary>错误详情</summary>
                <pre>{error.toString()}</pre>
              </details>
            )}
            <button onClick={this.handleRetry} className="error-retry-btn">
              🔄 重新加载
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
