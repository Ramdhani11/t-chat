export interface IRoles {
  id: number;
  role_name: string;
}
export interface IRooms {
  user_id: number;
  company_name: string;
  name: string;
  chat_room_id: number;
  last_message: {
    english: string;
    japanese: string;
    user_id: number;
    date: number;
  };
  last_message_user: number;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  company_name: string;
  role_name: string;
}
