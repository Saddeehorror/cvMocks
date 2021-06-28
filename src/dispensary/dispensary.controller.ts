/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { DispensaryService } from './dispensary.service';
import { CreateDispensaryDto } from './dto/create-dispensary.dto';
import { UpdateDispensaryDto } from './dto/update-dispensary.dto';

@Controller('dispensary')
export class DispensaryController {
  constructor(private readonly dispensaryService: DispensaryService) {}

  @Get(':id')
  findAll() {
    return [
    {
      publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
      claveDispensario:'DISP-0001',
      medidores:[
        {
          SistemaMedicionDispensario:'SMD-DISP-0001',
          LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0001.',
          VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
          IncertidumbreMedicionSistMedicionDispensario:"0.10"
        },
        {
          SistemaMedicionDispensario:'SMD-DISP-0002',
          LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0001.',
          VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
          IncertidumbreMedicionSistMedicionDispensario:"0.10"
        }
      ],
      manguera:[
        {
          IdentificadorManguera:'DISP-0001-MGA-0001'
        },
        {
          IdentificadorManguera:'DISP-0001-MGA-0002'
        },
        {
          IdentificadorManguera:'DISP-0001-MGA-0003'
        }
      ]
    },

    {
      publicKey:'5e935f97-5034-4698-805a-d7e14f54b85f',
      claveDispensario:'DISP-0002',
      medidores:[
        {
          SistemaMedicionDispensario:'SMD-DISP-0003',
          LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0003.',
          VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
          IncertidumbreMedicionSistMedicionDispensario:"0.10"
        },
        {
          SistemaMedicionDispensario:'SMD-DISP-0004',
          LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0004.',
          VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
          IncertidumbreMedicionSistMedicionDispensario:"0.10"
        }
      ],
      manguera:[
        {
          IdentificadorManguera:'DISP-0001-MGA-0004'
        },
        {
          IdentificadorManguera:'DISP-0001-MGA-0005'
        },
      ]
    }


    ]
  }

  @Get(':id/:id2')
  findAlls(@Param('id2') id: string) {

    if (id === '5e935f97-5034-4698-805a-d7e14f54b85d') {
      return        {
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
        claveDispensario:'DISP-0001',
        medidores:[
          {
            SistemaMedicionDispensario:'SMD-DISP-0001',
            LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0001.',
            VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
            IncertidumbreMedicionSistMedicionDispensario:"0.10"
          },
          {
            SistemaMedicionDispensario:'SMD-DISP-0002',
            LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0001.',
            VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
            IncertidumbreMedicionSistMedicionDispensario:"0.10"
          }
        ],
        manguera:[
          {
            IdentificadorManguera:'DISP-0001-MGA-0001'
          },
          {
            IdentificadorManguera:'DISP-0001-MGA-0002'
          },
          {
            IdentificadorManguera:'DISP-0001-MGA-0003'
          }
        ]
      }       
    }else if (id === '5e935f97-5034-4698-805a-d7e14f54b85f') {
      return          {
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85f',
        claveDispensario:'DISP-0002',
        medidores:[
          {
            SistemaMedicionDispensario:'SMD-DISP-0003',
            LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0003.',
            VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
            IncertidumbreMedicionSistMedicionDispensario:"0.10"
          },
          {
            SistemaMedicionDispensario:'SMD-DISP-0004',
            LocalizODescripSistMedicionDispensario: 'Medidor multifásico instalado en el cabezal del dispensario DISP-0004.',
            VigenciaCalibracionSistMedicionDispensario: "2020-07-07",
            IncertidumbreMedicionSistMedicionDispensario:"0.10"
          }
        ],
        manguera:[
          {
            IdentificadorManguera:'DISP-0001-MGA-0004'
          },
          {
            IdentificadorManguera:'DISP-0001-MGA-0005'
          },
        ]
      }
    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)

    }

  }
}
