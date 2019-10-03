import * as React from 'react';

/** Helloコンポーネントで取得するpropsの型定義 */
interface IHelloProps {
  greeting: string;
}
/** Helloコンポーネントのstateの型定義 */
interface IHelloState {
  inputName: string;
  outputName: string;
}
/** Helloコンポーネント */
class Hello extends React.Component<IHelloProps, IHelloState> {
  constructor(props: IHelloProps) {
    super(props);
    this.state = {
      inputName: '',
      outputName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  public handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      inputName: event.currentTarget.value,
    });
  }
  public handleClick(): void {
    this.setState({
      inputName: '',
      outputName: this.state.inputName,
    });
  }
  public render(): JSX.Element {
    const { greeting } = this.props;
    return (
      <div>
        <Input
          name={this.state.inputName}
          handleChange={this.handleChange}
        />
        <Button handleClick={this.handleClick} />
        <Output greeting={greeting} name={this.state.outputName} />
      </div>
    );
  }
}

/** Inputコンポーネントで取得するpropsの型定義 */
interface IInputProps {
  name: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
/** Inputコンポーネント */
const Input: React.SFC<IInputProps> = props => {
  const { name, handleChange }: IInputProps = props;
  return (
    <input
      type="text"
      placeholder="Input any name."
      value={name}
      onChange={handleChange}
    />
  );
};

/** Buttonコンポーネントで取得するpropsの型定義 */
interface IButtonProps {
  handleClick: () => void;
}
/** Buttonコンポーネント */
const Button: React.SFC<IButtonProps> = props => {
  const { handleClick }: IButtonProps = props;
  return <button onClick={handleClick}>Say Hello</button>;
};

/** Outputコンポーネントで取得するpropsの型定義 */
interface IOutputProps {
  greeting: string;
  name: string;
}
/** Outputコンポーネント */
const Output: React.SFC<IOutputProps> = props => {
  const { greeting, name }: IOutputProps = props;
  const hasName: boolean = name !== '';
  const result: JSX.Element | '' = hasName ? (
    <h1>
      {greeting} {name}!
    </h1>
  ) : (
    ''
  );
  return <div>{result}</div>;
};

export default Hello;
