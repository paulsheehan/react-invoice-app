import moment from "moment";

export default function prettyDate(date) {
  return moment(date).format("D MMM YYYY");
}
