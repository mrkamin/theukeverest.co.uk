const KEY = 'formData';

export const saveFormData = (data) => {
    const existingData = getFormData();
    const newData = [...existingData, data];
    localStorage.setItem(KEY, JSON.stringify(newData));
};

export const getFormData = () => {
    const data = localStorage.getItem(KEY);
    return JSON.parse(data) || [];
};