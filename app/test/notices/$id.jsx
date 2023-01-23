import { useParams } from "@remix-run/react";

export default function Notice() {
    const params = useParams();
    return <div>게시글 ID: {params.id}</div>;
}
