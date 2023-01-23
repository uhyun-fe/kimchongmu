import { Link } from "@remix-run/react";

export default function Index() {
    return (
        <div className="d-fr jc-c h-100">
            <div className="d-fc jc-c">
                <h1 className="mb-3">
                    정산의 정석, <span className="fc-blue">김총무</span>
                </h1>
                <button className="btn p-2">시작하기</button>
            </div>
        </div>
    );
}
