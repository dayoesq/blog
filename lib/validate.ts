export const validate = (data: Data): boolean => {
  const { email, name, message } = data;
  if (email && name && message) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email.trim())) {
      return false;
    } else if (name.trim().length < 2 || name.trim().length > 25) {
      return false;
    } else if (message.trim().length === 0) {
      return false;
    }
    return true;
  }
  return false;
};