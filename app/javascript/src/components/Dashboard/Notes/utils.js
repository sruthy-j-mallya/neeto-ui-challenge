import dayjs from "dayjs";

const formatCreatedAt = dateString => dayjs(dateString).format("dddd, hh:mmA");

const calculateCreatedAgo = dateString => dayjs(dateString).fromNow();

export { formatCreatedAt, calculateCreatedAgo };
