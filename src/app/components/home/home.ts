import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface plantas {
  nome: string;
  imgURL: string;
  preco: number;
  categoria: 'Suculenta' | 'Flores' | 'Temperos';
  emPromocao: boolean;
}

interface PlantasAgrupadas {
  [categoria: string]: plantas[];
}

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  tipoPlanta: plantas[] = [
    {
      nome: 'Rosa-de-Pedra',
      imgURL: 'imagem/rosa-de-pedra.png',
      preco: 22.3,
      categoria: 'Suculenta',
      emPromocao: true,
    },
    {
      nome: 'Orelha de Shrek',
      imgURL: '/imagem/orelha-de-shrek.png',
      preco: 12.3,
      categoria: 'Suculenta',
      emPromocao: false,
    },
    {
      nome: 'Rabo-De-Burro',
      imgURL: '/imagem/orelha-de-burro.png',
      preco: 10.0,
      categoria: 'Suculenta',
      emPromocao: false,
    },
    {
      nome: 'Zebra',
      imgURL: '/imagem/zebra.png',
      preco: 25.5,
      categoria: 'Suculenta',
      emPromocao: false,
    },
    {
      nome: 'Rosa',
      imgURL: '/imagem/rosa.png',
      preco: 22.3,
      categoria: 'Flores',
      emPromocao: false,
    },
    {
      nome: 'Girassol',
      imgURL: '/imagem/girassol.png',
      preco: 22.3,
      categoria: 'Flores',
      emPromocao: false,
    },
    {
      nome: 'Orquídea',
      imgURL: '/imagem/orquidea.png',
      preco: 22.3,
      categoria: 'Flores',
      emPromocao: true,
    },
    {
      nome: 'Tulipa',
      imgURL: '/imagem/tulipa.png',
      preco: 22.3,
      categoria: 'Flores',
      emPromocao: false,
    },
    {
      nome: 'Manjericão',
      imgURL: '/imagem/manjericao.png',
      preco: 22.3,
      categoria: 'Temperos',
      emPromocao: true,
    },
    {
      nome: 'Alecrim',
      imgURL: '/imagem/alecrim.png',
      preco: 22.3,
      categoria: 'Temperos',
      emPromocao: false,
    },
    {
      nome: 'Salsa',
      imgURL: '/imagem/salsa.png',
      preco: 22.3,
      categoria: 'Temperos',
      emPromocao: false,
    },
    {
      nome: 'Orégano',
      imgURL: '/imagem/oregano.png',
      preco: 22.3,
      categoria: 'Temperos',
      emPromocao: false,
    },
  ];

  plantasAgrupadas: PlantasAgrupadas = {};

  categorias: string[] = [];

  ngOnInit(): void {
    this.plantasAgrupadas = this.agruparPorCategoria(this.tipoPlanta);

    this.categorias = Object.keys(this.plantasAgrupadas);

  }

  agruparPorCategoria(plantas: plantas[]): PlantasAgrupadas {
    const agrupado: PlantasAgrupadas = {};

    plantas.forEach((planta) => {
      const categoria = planta.categoria;

      if (!agrupado[categoria]) {
        agrupado[categoria] = [];
      }

      agrupado[categoria].push(planta);
    });

    return agrupado;
  }

}
