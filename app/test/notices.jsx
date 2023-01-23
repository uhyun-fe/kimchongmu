import { Link, Outlet } from "@remix-run/react";

export default function Notices() {
    return (
        <div>
            <Outlet />
            <hr />
            <ul>
                <li>
                    <Link to="/notices/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/notices/1">게시글 2</Link>
                </li>
                <li>
                    <Link to="/notices/1">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
}
