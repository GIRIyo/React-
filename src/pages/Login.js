import { useState } from "react";

const Login = () => {
    return (
        <>
            <div className="container mt-4">
                <form>
                    <h2 style={{ textAlign: 'center' }}>로그인</h2><br />
                    <div className="form-data" >
                        <div className="forms-inputs mb-4"> <span>이메일</span> <input type="text" style={{ width: '100%' }} required />
                        </div>
                        <div className="forms-inputs mb-4"> <span>비밀번호</span> <input type="password" style={{ width: '100%' }} required />
                        </div>
                        <br />
                        <div className="mb-3"> <button type="submit" className="btn btn-dark w-100">로그인</button> </div>
                        <div id="chk" >
                            <label><input type="checkbox" id="uChk1" /><span>로그인 상태 유지 &nbsp;  본 사이트는 chrome 브라우저에 최적화 되어 있습니다.</span></label>
                        </div><br /><br />
                        <div style={{ textAlign: 'left' }}>
                            <a href="#">비밀번호를 분실하셨습니까?</a><br />
                            <span>무료 계정을 만들어 보세요.</span> <a href="/signUp" >계정 생성하기</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;