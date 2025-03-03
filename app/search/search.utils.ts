import { Request, AllOpenChatJSON, AllOpenChat } from './search.type';
import { GET, CONTENT_TYPE, BASE_URL, GET_CHAT_ALL } from './search.constant';

export const fetchAllOpenChat = async (accessToken: string) => {
	const Request: Request = {
		method: GET,
		headers: {
			'content-type': CONTENT_TYPE,
			serverId: process.env.NEXT_PUBLIC_SERVER_ID as string, // 서버 아이디 임시 사용
			Authorization: `Bearer ${accessToken}`,
		},
	};

	const res = await fetch(`${BASE_URL}${GET_CHAT_ALL}`, Request);
	const resJson: AllOpenChatJSON = await res.json();
	const allOpenChat: AllOpenChat = resJson.chats;

	return allOpenChat;
};
