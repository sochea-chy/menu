import React from "react";
import { Form, message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";



const UploadComponent = (props) => {
    
  const { label, name, required, requiredMessage, image } = props;

  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState();
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
      message.success("upload successfully");
    }
    if (info.file.status === "error") {
      setLoading(false);
      message.error(info?.file?.response?.message);
      return;
    }
  };
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: requiredMessage || "this field is required!",
        },
      ]}
    >
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://127.0.0.1:8000/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        headers={{
          Accept: "application/json",
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%", height:"100px", objectFit: "contain" }} />
        ) : (
          <div>
            {image ? (
              <img src={image} alt="avatar" style={{ width: "100%", height:"100px" }} />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </div>
        )}
      </Upload>
    </Form.Item>
  );
};

export default UploadComponent;
