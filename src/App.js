import logo from './logo.svg';
import './App.css';
import React from 'react';

class Paragraph extends React.Component {
  render() {
    return (
      <input type="number" />
    )
  }
}

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

function Body() {
  return (
    <div>
      <h3>Body</h3>
    </div>
  )
}
function Footer() {
  return (
    <div className='footer'>
      <h3>Footer</h3>
    </div>
  )
}

function PostItem() {
  return (
    <div className='post-item'>
      <img src="c:\Users\Admin\Videos\Captures\81060643b4caa74c0bffa7f51b351d3a.jpg" alt="" />
      <h2 className='post-title'>Tạo dự án React cơ bản</h2>
      <p className='post-desc'>Tải ảnh đẹp trong bộ sưu tập những hình ảnh đẹp nhất trên thế giới của chúng tôi! ✓Tải ảnh hoàn toàn miễn phí ✓Hình ảnh chất lượng HD ✓Nhiều lựa chọn ..</p>
      <p>Một ngày trước</p>
    </div>
  )
}


function App() {
  return (
    <div className='post-list'>
      {/* <Header />
      <Body />
      <Footer /> */}
      <PostItem />
    </div>
  );
}

export default App;
