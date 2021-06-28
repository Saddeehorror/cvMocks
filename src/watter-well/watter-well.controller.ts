/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { WatterWellService } from './watter-well.service';
import { CreateWatterWellDto } from './dto/create-watter-well.dto';
import { UpdateWatterWellDto } from './dto/update-watter-well.dto';

@Controller('watter-well')
export class WatterWellController {
  constructor(private readonly watterWellService: WatterWellService) { }

  @Get(':id')
  findAll() {
    return [
      {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
        clavePozo: 'POZ-NOBLES0001DEL',
        descripcionPozo:'Pozo delimitador ubicado en el área contractual México 45, profundidad 4534 m.',
        medicionPozo: [
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL001',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL002',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
        ],
      },
      {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
        clavePozo: 'POZ-NOBLES0002DEL',
        descripcionPozo: 'Pozo delimitador ubicado en el área contractual México 45, profundidad 4534 m.',
        medicionPozo: [
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL003',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL004',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
        ],
      },
      {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
        clavePozo: 'POZ-NOBLES0003DEL',
        descripcionPozo: 'Pozo delimitador ubicado en el área contractual México 45, profundidad 4534 m.',
        medicionPozo: [
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL005',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL006',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
        ],
      },


    ]
  }

  @Get(':id/:id2')
  findAlls(@Param('id2') id: string) {

    if (id === '5e935f97-5034-4697-805a-d7e14f54b85d') {
      return            {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
        clavePozo: 'POZ-NOBLES0001DEL',
        descripcionPozo:'Pozo delimitador ubicado en el área contractual México 45, profundidad 4534 m.',
        medicionPozo: [
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL001',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL002',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
        ],
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85e') {
      return       {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
        clavePozo: 'POZ-NOBLES0002DEL',
        descripcionPozo: 'Pozo delimitador ubicado en el área contractual México 45, profundidad 4534 m.',
        medicionPozo: [
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL003',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL004',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
        ],
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85e') {
      return             {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
        clavePozo: 'POZ-NOBLES0003DEL',
        descripcionPozo: 'Pozo delimitador ubicado en el área contractual México 45, profundidad 4534 m.',
        medicionPozo: [
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL005',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
          {
            SistemaMedicionPozo: 'SMD-POZ-NOBLES0001DEL006',
            LocalizODescripSistMedicionPozo: 'medidor multifásico instalado en el cabezal del pozo POZ-NOBLES0001DEL.',
            VigenciaCalibracionSistMedicionPozo: '2020-07-07',
            IncertidumbreMedicionSistMedicionPozo: '0.10',
          },
        ],
      }
    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)

    }

  }

}
