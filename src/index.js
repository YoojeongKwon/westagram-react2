import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />); // 초기 설정
// Main 컴포넌트 확인 시에는 root.render(<Main />);
// Login 컴포넌트 확인 시에는 root.render(<Login />);
