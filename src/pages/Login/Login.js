import React from 'react';
import "./Login.css" ;

function Login(props) {
    return (
        <>
         <div class="container">
        <div class="login_container">
            <div class="login_logo">Westagram</div>
           <div class="login_account">
               <input type="text" class="account_id" placeholder="전화번호, 사용자 이름 또는 이메일"/>
               <input type="password" class="account_pw" placeholder="비밀번호"/>
           </div>
           <div class="login_button">
               <button class="login_button_button" disabled onclick="login()">로그인</button>
           </div>
            <div class="forgot_pw">
                <a href="/">비밀번호를 잊으셨나요?</a>
            </div>
        </div>
    </div>
        </>
    );
}

export default Login;