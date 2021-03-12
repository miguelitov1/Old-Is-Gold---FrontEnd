export const formatearFecha = (fecha) => {
  if (fecha) {
    const year = fecha.substr(0, 4);
    const month = fecha.substr(5, 2);
    const day = fecha.substr(8, 2);

    return day + "/" + month + "/" + year;
  }
};
