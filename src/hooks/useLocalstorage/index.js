const getter = ({ key }) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
};

const setter = ({ key, setValue }) => {
    localStorage.setItem(key, JSON.stringify(setValue));
};

const deletter = ({ key }) => {
    localStorage.removeItem(key);
};

export { getter, setter, deletter };
