import "./index.scss";
type showMessageProps = {
  text: string;
  show: boolean;
};

export const ShowMessage = ({text, show}: showMessageProps) => {
  return (
    <div className="show-message" style={show ? {display: "flex"} : {display: "none"}}>
      {text}
    </div>
  );
};
