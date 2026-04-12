const listeners = new Set();

export function subscribeToast(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function showToast(message) {
  listeners.forEach((fn) => fn(message));
}
