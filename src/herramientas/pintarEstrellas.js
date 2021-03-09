export const pintarEstrellas = (valor) => {
  const numeroAString = valor.toString();
  const numero = numeroAString.split(".");
  const estrellasVacias = 4 - +numero[0];
  const render = [];
  for (let i = 0; i < +numero[0]; i++) {
    render.push("./corazon-estrellas/estrella-100.png");
  }
  if (+numero[1] <= 20) {
    render.push("./corazon-estrellas/estrella-0.png");
  } else if (+numero[1] > 20 && +numero[1] <= 40) {
    render.push("./corazon-estrellas/estrella-25.png");
  } else if (+numero[1] > 40 && +numero[1] <= 70) {
    render.push("./corazon-estrellas/estrella-50.png");
  } else if (+numero[1] > 70 && +numero[1] <= 95) {
    render.push("./corazon-estrellas/estrella-75.png");
  } else {
    render.push("./corazon-estrellas/estrella-100.png");
  }
  for (let i = 0; i < estrellasVacias; i++) {
    render.push("./corazon-estrellas/estrella-0.png");
  }
  console.log(render);
  return render;

  // let render = "";
  // for (let i = 0; i < +numero[0]; i++) {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-100.png" alt="estrella" />`;
  // }
  // if (+numero[1] <= 20) {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-0.png" alt="estrella" />`;
  // } else if (+numero[1] > 20 && +numero[1] <= 40) {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-25.png" alt="estrella" />`;
  // } else if (+numero[1] > 40 && +numero[1] <= 70) {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-50.png" alt="estrella" />`;
  // } else if (+numero[1] > 70 && +numero[1] <= 95) {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-75.png" alt="estrella" />`;
  // } else {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-100.png" alt="estrella" />`;
  // }
  // for (let i = 0; i < estrellasVacias; i++) {
  //   render =
  //     render +
  //     `<img src="./corazon-estrellas/estrella-0.png" alt="estrella" />`;
  // }
  // console.log(render);
  // return render;
};
