import { Component, type ReactNode } from "react";
import { logError } from "@/lib/perf";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  /** Section name for logging */
  section?: string;
  /** If true, shows inline fallback instead of full-page */
  inline?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
}

const MAX_RETRIES = 3;

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null, retryCount: 0 };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    const section = this.props.section || "unknown";
    logError(`[${section}] ${error.message}`, info.componentStack);

    if (typeof window !== "undefined" && (window as any).__perf_metrics) {
      (window as any).__perf_metrics.errors.push({
        message: error.message,
        stack: info.componentStack,
        timestamp: Date.now(),
        section,
        retryCount: this.state.retryCount,
      });
    }
  }

  handleRetry = () => {
    if (this.state.retryCount >= MAX_RETRIES) {
      console.warn(`[ErrorBoundary] Max retries (${MAX_RETRIES}) reached for ${this.props.section || "component"}`);
      return;
    }
    this.setState(prev => ({
      hasError: false,
      error: null,
      retryCount: prev.retryCount + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      const canRetry = this.state.retryCount < MAX_RETRIES;

      if (this.props.inline) {
        return (
          <div className="py-12 text-center">
            <p className="text-sm text-muted-foreground font-body mb-3">
              This section could not be loaded.
            </p>
            {canRetry && (
              <button
                onClick={this.handleRetry}
                className="text-xs text-accent font-body hover:underline"
              >
                Retry ({MAX_RETRIES - this.state.retryCount} attempts left)
              </button>
            )}
          </div>
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-heading font-bold text-primary mb-4">Something went wrong</h1>
            <p className="text-sm text-muted-foreground font-body mb-6">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            {canRetry ? (
              <button
                onClick={this.handleRetry}
                className="px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium font-body hover:opacity-90 transition-opacity"
              >
                Try Again ({MAX_RETRIES - this.state.retryCount} left)
              </button>
            ) : (
              <a
                href="/"
                className="px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium font-body hover:opacity-90 transition-opacity inline-block"
              >
                Reload Page
              </a>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
