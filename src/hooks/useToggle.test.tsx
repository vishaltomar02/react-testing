import { act, render, renderHook } from "@testing-library/react";
import { useToggle } from "./useToggle";

describe('useToggle', () => {
  test('the initial value is false', () => {
    const { result } = renderHook(useToggle, {
      initialProps: {
        initialState: false
      }
    });
    expect(result.current.state).toEqual(false);
  });


  //test the toggle value after toggling for once is true

  test('toggleState becomes true when toggle gets called once', () => {
    const { result } = renderHook(useToggle, {
      initialProps: {
        initialState: false
      }
    });
    act(() => result.current.toggle());

    expect(result.current.state).toEqual(true);
  })
  
})