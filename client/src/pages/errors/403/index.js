import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const Pag0403 = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary">
          <Link to="/overview">Back Home</Link>
        </Button>
      }
    />
  );
};
export default Pag0403;
