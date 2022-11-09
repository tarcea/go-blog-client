type Post = {
	id: number,
	title: string,
	body: string,
	published: boolean,
	userId: number,
	author: string,
	message?: string
}

interface AppContextInterface {
  currentUser: CurrentUser;
}

type CurrentUser = {
  email: string
}