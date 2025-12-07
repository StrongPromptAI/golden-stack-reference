import { useQuery } from '@tanstack/react-query';

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: () => fetch('/api/health').then((res) => res.json()),
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Golden Stack</h1>
        <p className="text-gray-600 mb-8">React + FastAPI + UV</p>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-500 mb-2">API Status:</p>
          {isLoading ? (
            <span className="text-yellow-600">Checking...</span>
          ) : data?.status === 'healthy' ? (
            <span className="text-green-600">Connected</span>
          ) : (
            <span className="text-red-600">Not connected</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
