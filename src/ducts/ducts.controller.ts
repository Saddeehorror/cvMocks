/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { DuctsService } from './ducts.service';
import { CreateDuctDto } from './dto/create-duct.dto';
import { UpdateDuctDto } from './dto/update-duct.dto';

@Controller('ducts')
export class DuctsController {
  constructor(private readonly ductsService: DuctsService) {}

  @Get(':id')
  findAll() {
    return [
    {
      publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
      claveIdentificacionDucto:'DUC-DES-004',
      descripcionDucto:'Ducto de descarga del autotanque de clave TQS-ATQ-1234 de distribución de petrolíferos.',
      diametroDucto:'3',
      medidores:[
        {
          sistemaMedicionDucto:'SMD- DUC-DES-004',
          localizODescripSistMedicionDucto: 'Medidor dinámico Marca DuctMex.',
          vigenciaCalibracionSistMedicionDucto: "2018-06-30",
          incertidumbreMedicionSistMedicionDucto:"0.009"
        },
      ],
      capacidadGasTalon:{
        valorNumerico:'1500',
        um:'m3'
      }
    },
    {
      publicKey:'5e935f97-5034-4698-805a-d7e14f54b85e',
      claveIdentificacionDucto:'DUC-DES-005',
      descripcionDucto:'Ducto de descarga del autotanque de clave TQS-ATQ-1235 de distribución de petrolíferos.',
      diametroDucto:'50',
      medidores:[
        {
          sistemaMedicionDucto:'SMD- DUC-DES-005',
          localizODescripSistMedicionDucto: 'Medidor dinámico Marca DuctMex.',
          vigenciaCalibracionSistMedicionDucto: "2018-06-30",
          incertidumbreMedicionSistMedicionDucto:"0.009"
        },
        {
          sistemaMedicionDucto:'SMD- DUC-DES-006',
          localizODescripSistMedicionDucto: 'Medidor dinámico Marca DuctMex.',
          vigenciaCalibracionSistMedicionDucto: "2018-06-30",
          incertidumbreMedicionSistMedicionDucto:"0.009"
        },
      ],
      capacidadGasTalon:{
        valorNumerico:'24000',
        um:'m3'
      }
    }
    ]
  }

  @Get(':id/:id2')
  findAlls(@Param('id2') id: string) {

    if (id === '5e935f97-5034-4698-805a-d7e14f54b85d') {
      return      {
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
        claveIdentificacionDucto:'DUC-DES-004',
        descripcionDucto:'Ducto de descarga del autotanque de clave TQS-ATQ-1234 de distribución de petrolíferos.',
        diametroDucto:'3',
        medidores:[
          {
            sistemaMedicionDucto:'SMD- DUC-DES-004',
            localizODescripSistMedicionDucto: 'Medidor dinámico Marca DuctMex.',
            vigenciaCalibracionSistMedicionDucto: "2018-06-30",
            incertidumbreMedicionSistMedicionDucto:"0.009"
          },
        ],
        capacidadGasTalon:{
          valorNumerico:'1500',
          um:'m3'
        }
      }         
    }else if (id === '5e935f97-5034-4698-805a-d7e14f54b85e') {
      return         {
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85e',
        claveIdentificacionDucto:'DUC-DES-005',
        descripcionDucto:'Ducto de descarga del autotanque de clave TQS-ATQ-1235 de distribución de petrolíferos.',
        diametroDucto:'50',
        medidores:[
          {
            sistemaMedicionDucto:'SMD- DUC-DES-005',
            localizODescripSistMedicionDucto: 'Medidor dinámico Marca DuctMex.',
            vigenciaCalibracionSistMedicionDucto: "2018-06-30",
            incertidumbreMedicionSistMedicionDucto:"0.009"
          },
          {
            sistemaMedicionDucto:'SMD- DUC-DES-006',
            localizODescripSistMedicionDucto: 'Medidor dinámico Marca DuctMex.',
            vigenciaCalibracionSistMedicionDucto: "2018-06-30",
            incertidumbreMedicionSistMedicionDucto:"0.009"
          },
        ],
        capacidadGasTalon:{
          valorNumerico:'24000',
          um:'m3'
        }
      }     
    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)

    }

  }


}
