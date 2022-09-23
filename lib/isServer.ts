const isServer = () => {
  return ! (typeof window != 'undefined' && window.document);
}

export default isServer;