import { useEffect, useRef, useCallback } from "react";

export default function Index() {
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker(
      new URL("./../workers/file.worker.js", import.meta.url),
      { type: "module" }
    );
    workerRef.current.onmessage = (evt) =>
      alert(`WebWorker Response => ${evt.data}`);
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleWork = useCallback(async () => {
    workerRef.current.postMessage({});
  }, []);

  return (
    <div>
      <p>Do work in a WebWorker!</p>
      <button onClick={handleWork}>Get random name</button>
    </div>
  );
}
