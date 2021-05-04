const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/amirs-frontity-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "amirs-frontity-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
