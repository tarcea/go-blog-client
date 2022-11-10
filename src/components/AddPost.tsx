import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMessage } from '../context/MessageContext';
import { useAuth } from '../context/UserContext';
import style from '../styles/AddPost.module.css';

const AddPost = () => {
	const [inputs, setInputs] = useState<any>({
		title: "",
		body: "",
	})
	const [server] = useState(process.env.REACT_APP_SERVER_URL)
	const [isChecked, setPublic] = useState(false)

	const navigate = useNavigate()
	const {setMessage} = useMessage()
	const {uid} = useAuth()

	const newPost = async (data: Post) => {
		try {
			const response = await fetch(`${server}/posts`, {
				method: 'POST',
				// mode: 'cors',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'Accept':       '*/*',
				},
				body: JSON.stringify(data)
			})

			if (!response.ok) {
				const {message} = await response.json()
				setMessage(message)
				return
			}
			
			// await getPosts()
			
		} catch (err) {
			
			console.log(err)
		}
		
	}


	const handleSubmit = async (e: any) => {
		e.preventDefault()
		await newPost({...inputs, userId: +uid, published: isChecked})
		navigate("/posts")
	}

	const handleChange = (e: any) => {
		setInputs((prevState: any) => {
			return {
				...prevState, [e.target.name]: e.target.value
			}
		})
	}

	const handleChangeCheckbox = (e: any) => {
    setPublic(current => !current);
  };

 
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
				<h2 className={style.header}>
          Add post
        </h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="title">title</label>
					<input
						type="text"
						name="title"
						placeholder="title"
						value={inputs.title}
						onChange={handleChange}
					/>
					<label htmlFor="body">add content</label>
					<textarea
						name="body"
						rows={4}
						cols={50}
						value={inputs.body}
						onChange={handleChange}
					>
					</textarea>
					<label htmlFor="publish">public</label>
					<input
						type="checkbox"
						name="publish"
						checked={isChecked}
						value="false"
						onChange={handleChangeCheckbox}
					/>
					<input type="submit" value="Add Post"/>
				</form>
			</div>
    </div>
  );
}

export default AddPost;
