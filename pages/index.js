import { useEffect, useRef, useCallback } from "react";

import Worker from "workers/file.worker.js";

export default function Index() {
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker();
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
