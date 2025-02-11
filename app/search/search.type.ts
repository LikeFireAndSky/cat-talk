// search.type.ts

export type AllOpenChat = Chat[];

export type AllOpenChatJSON = {
	chats: AllOpenChat;
};

export type Chat = {
	id: string;
	name: string;
	users: User[];
	isPrivate: boolean;
	latestMessage: Message | null;
	updatedAt: Date;
};

export type User = {
	id: string;
	name: string;
	picture: string;
};

type Message = {
	id: string;
	text: string;
	userId: string;
	createAt: Date;
};

export type Request = {
	method: string;
	headers: {
		'content-type': string;
		serverId: string;
		Authorization: string;
	};
};
