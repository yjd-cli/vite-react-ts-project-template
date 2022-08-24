import React from 'react';
import { connect } from 'react-redux';
import { RootState, RootDispatch } from '@src/store';

const mapStateToProps = (state: RootState) => ({
  count: state.login.count,
  list: state.global.list,
});

const mapDispatchToProps = (dispatch: RootDispatch) => ({
  increment: () => dispatch.login.increment(1),
  incrementAsync: () => dispatch.login.incrementAsync(1),
});

/**
 * 映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
 */
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>;

/**
 * 组件派发 action 集合的类型声明
 */
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;

/**
 * 组件最终接收的所有 Props 类型声明
 */
// eslint-disable-next-line @typescript-eslint/ban-types
type LoginProps = MapStateFromStoreProps & ComponentDispatchProps & {};

class Login extends React.Component<LoginProps> {
  render() {
    const { count, list, increment, incrementAsync } = this.props;

    return (
      <div>
        <h2>LoginContainer</h2>
        <div>The count is {count}</div>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => incrementAsync()}>incrementAsync</button>
      </div>
    );
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
