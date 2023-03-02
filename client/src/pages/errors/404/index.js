import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const Pag0404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/overview">Back Home</Link>
        </Button>
      }
    />
  );
};
export default Pag0404;
