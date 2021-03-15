export const pintarEstrellas = (valor) => {
  if (valor) {
    const numeroAString = valor.toString();
    const numero = numeroAString.split(".");
    const estrellasVacias = Math.trunc(5 - valor);

    const render = [];
    for (let i = 0; i < +numero[0]; i++) {
      render.push("../corazon-estrellas/estrella-100.png");
    }
    if (+numero[1] <= 20) {
      render.push("../corazon-estrellas/estrella-0.png");
    } else if (+numero[1] > 20 && +numero[1] <= 40) {
      render.push("../corazon-estrellas/estrella-25.png");
    } else if (+numero[1] > 40 && +numero[1] <= 70) {
      render.push("../corazon-estrellas/estrella-50.png");
    } else if (+numero[1] > 70 && +numero[1] <= 95) {
      render.push("../corazon-estrellas/estrella-75.png");
    } else if (+numero[1] > 95 && +numero[1] < 100) {
      render.push("../corazon-estrellas/estrella-100.png");
    }
    for (let i = 0; i < estrellasVacias; i++) {
      render.push("../corazon-estrellas/estrella-0.png");
    }

    return render;
  }
};
