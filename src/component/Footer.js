import "./footerStyle.css";

export const Footer = () => {
  const paragraphStyle = {
    color: "blue",
    fontSize: "14px",
    // Các thuộc tính CSS khác mà bạn muốn áp dụng
  };

  return (
    <div className="footer-style">
      Đây là footer
      <p style={paragraphStyle}>aaa</p>
    </div>
  );
};
