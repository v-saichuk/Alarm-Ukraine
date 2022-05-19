export const lengthInterval = (start, end) => {
    let interval = end - start;
    interval /= 1000;
    const hour = Math.round((interval / 60 / 60) % 24) + Math.round(interval / 60 / 60 / 24) * 24;
    const minute = Math.round((interval / 60) % 60);
    return { hour, minute };
};
