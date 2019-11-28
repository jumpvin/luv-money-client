const TRIGGER_EXAMPLE = 'TRIGGER_EXAMPLE';
const EXAMPLE_LOADING = 'EXAMPLE_LOADING';
const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
const EXAMPLE_FAIL = 'EXAMPLE_FAIL';

const triggerExample = () => ({
  type: TRIGGER_EXAMPLE,
});

const exampleLoading = (isLoading) => ({
  type: EXAMPLE_LOADING,
  isLoading,
});

const exampleSuccess = (examples) => ({
  type: EXAMPLE_SUCCESS,
  examples,
});

const exampleFail = (err) => ({
  type: EXAMPLE_FAIL,
  err,
});

export {
  TRIGGER_EXAMPLE,
  EXAMPLE_LOADING,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAIL,
  triggerExample,
  exampleLoading,
  exampleSuccess,
  exampleFail,
};
