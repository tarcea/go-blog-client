import { useParams } from "react-router-dom";

const EditPost = () => {
	const params = useParams();
	return (
		<div>Edit Post {params.id}</div>
	);
}

export default EditPost;
