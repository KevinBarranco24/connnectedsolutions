import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorias: Categoria[] = [
    {
      "nombre": "Conectividad",
      "requisitor": "Kevin K.",
      "descripcion": "Problemas con la red, wifi, ethernet, problemas con proyectores, pizarrones electrónicos y problemas generales relacionados con la transferencia de datos."
    },
    {
      "nombre": "Infraestructura",
      "requisitor": "Kevin K.",
      "descripcion": "Problemas relacionados con la infraestructura del centro, piso levantado, lozas despegadas, jardineras en mal estado, etc."
    },
    {
      "nombre": "Seguridad",
      "requisitor": "Kevin K.",
      "descripcion": "Problemas en relación a la seguridad del centro, entradas sin guardias, puertas abiertas, salones cerrados en horario de clase y anomalías que tengan que ver con temas de seguridad."
    }
  ]
  constructor() { }

  ngOnInit(): void {
    
  }
}
