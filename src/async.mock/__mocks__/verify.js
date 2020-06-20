const verifyPassword = jest.fn().mockImplementation(() => true);
const verifyUsername = jest.fn();
verifyUsername.mockReturnValueOnce(true);
verifyUsername.mockReturnValueOnce(false);

export { verifyPassword, verifyUsername };
