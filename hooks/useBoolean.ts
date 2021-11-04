import { useCallback, useState } from 'react';

type UseBooleanProps = {
  initialState: boolean | (() => boolean);
};

type UseBooleanReturnType = [
  boolean,
  { setFalse: () => void; setTrue: () => void; toggleValue: () => void },
];

export const useBoolean = ({
  initialState,
}: UseBooleanProps): UseBooleanReturnType => {
  const [value, setValue] = useState(initialState);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const toggleValue = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, { setFalse, setTrue, toggleValue }];
};
