//JSX => extended JS XML
//class => reserved keyword
//{} => template syntax
//custom component
// 1.First letter must be capital
// 2.It return a JSX element
function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}
