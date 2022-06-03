import React, { useState, useRef } from "react";
import axios from "axios";


const SignUp = () => {

    //입력한 이메일과 비밀번호를 서버에 넘길수 있도록 state에서 받고 있음

    // react hook에서 state 사용
   const [userEmail, setUserEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repassword, setRepassword] = useState('');
   const [userCompany, setUserCompany] = useState('');
   const [userName, setUserName] = useState('');
   const [passwordError, setPasswordError] = useState(false);


    const passInput = useRef();
    
    //핸들러 함수
    const onEmailHandler = (event) => {
        setUserEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onRepasswordHandler = (event) => {
        setRepassword(event.target.value);
        setPasswordError(event.currentTarget.value !== password);
    };

    const onCompanyHandler = (event) => {
        setUserCompany(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setUserName(event.currentTarget.value);
    };

    const onSubmitHanbler = (event) =>{
        event.preventDefault();
    }


    //이메일 중복확인
    const emailCheck = (event) => {
        const userEmailCheck = setUserEmail;
        var url = '/greencube/emailtest';
        const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        axios({
            method: 'get',
            url: url,
            params: ({
                userEmail: userEmailCheck
            }),

        }).then(function (res) {
            if (userEmailCheck.match(regEmail) != null) {
                if (res.data.userEmail != null) {
                    alert('이미 가입된 이메일이 있습니다.')
                    setUserEmail(event.currentTarget.value = '') 
                } else {
                    alert('중복 된 회원이 없습니다.')
                }
            } else {
                alert("이메일 형식이 잘못 되었습니다.")
            }
        }).catch(function (error) {
            return false;
        });
    }

    const passConfirm = (event) => {
    
		const regPw = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
		
		if(password.match(regPw) != null){
            alert("올바른 비밀번호 형식입니다.")
		} else{
            alert("비밀번호 형식을 다시 한번 확인해주세요.")
            setPassword(event.currentTarget.value = '') 
		}
    }
    return (
        <>
            <div className="container mt-4">
                <form action="/greencube/signUp" method="post" onSubmit={onSubmitHanbler}>
                    <h3 style={{ textAlign: 'center' }}>Greencube 계정 만들기</h3>

                    <div className="form-data">
                        <br />
                        <div className="forms-inputs mb-4"><input type="text" style={{ width: "75%" }} name="userEmail" value={userEmail} onChange={onEmailHandler} placeholder="이메일" required />
                            <button type="button" className="btn btn-dark" style={{ width: '23 %', marginBottom: '5px', marginLeft: '1.6px', fontSize: '11.5px' }} onClick={emailCheck}>
                                이메일 중복확인
                            </button>
                        </div>
                        <div><input type="password" onBlur= {passConfirm} style={{ width: '100%' }} placeholder="비밀번호" ref={passInput} name="password" value={password} onChange={onPasswordHandler} required />
                        </div>
                        <span >*8자 이상이면서 영문, 숫자를 모두 포함하세요</span>
                        <div className="forms-inputs mt-4"><input type="password" style={{ width: '100%' }} placeholder=" 비밀번호 확인" name="repassword" value={repassword} onChange={onRepasswordHandler} required />
                        </div>
                        {passwordError && <span style={{color:'red'}}>*비밀번호를 다시 입력해주세요</span>}
                        <div className="forms-inputs mb-4 forms-inputs mt-4"><input type="text" style={{ width: '100%' }} placeholder="회사" name="userCompany" value={userCompany} onChange={onCompanyHandler} required />
                        </div>
                        <div className="forms-inputs mb-4"><input type="text" style={{ width: '100%' }} placeholder="이름" name="userName" value={userName} onChange={onNameHandler} required />
                        </div>
                    </div>
                    <div id="chk" >
                        <label>
                            <input type="checkbox" value="N" name="agreedTerms" required /> <a href={"#"}>이용약관</a><span>에 동의합니다.</span><br /><br />
                        </label>
                    </div>
                    <div id="chk" >
                        <label>
                            <input type="checkbox" value="N" name="agreedPrivacy" required /> <a href={"#"}>개인정보 취급정책</a><span>에 동의합니다.</span><br />
                        </label>
                    </div>

                    <div className="mb-3" style={{ marginTop: '50px' }}> <button type="submit" className="btn btn-dark w-100" id="IdSubmit">계정 생성</button></div>
                    <div style={{ textAlign: 'right' }}>
                        <span>이미 계정이 있나요?</span><a href={"/"} >로그인</a><br />
                    </div>
                    <div>
                        <span>-전화번호는 경고 알림 문자에 사용됩니다.</span><br />
                        <span>-이메일은 패스워드 초기화, 이벤트 알람에 사용됩니다.</span><br />
                        <span>-수신되지 않을 경우, 스팸 메일을 확인하여 주시기 바랍니다.</span><br />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;





