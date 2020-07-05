type User = {
  id: string;
  name: string;
};

const users: User[] = [];

export const addUser = ({ id, name }: { id: string; name: string }) => {
  interface IResponse {
    error: null | string;
    user: User | null;
  }
  let response: IResponse = {
    error: null,
    user: null,
  };
  const existingUser = users.find((user) => user.name === name);

  if (existingUser) {
    response.error = "Username is taken";
    return response;
  }

  const user = { id, name };

  users.push(user);

  response.user = user;

  return response;
};

export const removeUser = (id: string) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id: string) => users.find((user) => user.id === id);

export const getUsers = () => {
  return users.map((user) => user.name);
};
