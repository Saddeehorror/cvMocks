/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ReceptionsService } from './receptions.service';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { UpdateReceptionDto } from './dto/update-reception.dto';
import { stringify } from 'querystring';

@Controller('receptions')
export class ReceptionsController {
  constructor(private readonly receptionsService: ReceptionsService) {}

  @Get(':id')
  findAll() {
    return [
    {
      publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
      origen:{
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
        type:'ducto',
        key:'DUC-DES-004'
      },
      numeroDeRegistro:'1993',
      volumenPuntoEntrada: {
        valorNumerico:'20000',
        um:'UM03'
      },
      volumenInicialTanque:null,
      volumenFinalTanque:null,
      uMCVolumenFinalTanque:null,
      volumenRecepcion:{
        valorNumerico:'130000',
        um:'UM03'
      },
      temperatura:'20',
      presionAbsoluta:'101.325',
      fechaYHoraInicioRecepcion:'2020-10-31T10:59:45-01:00',
      fechaYHoraFinalRecepcion:'2020-10-31T11:59:45-01:00',
    },
    {
      publicKey:'5e935f97-5034-4697-805a-d7e14f54b85f',
      origen:{
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85g',
        type:'tanque',
        key:'TQS-TDA-0001'
      },
      numeroDeRegistro:'1994',
      volumenPuntoEntrada: null,
      volumenInicialTanque:{
        valorNumerico:'20000',
        um:'UM03'
      },
      volumenFinalTanque:{
        valorNumerico:'150000'
      },
      uMCVolumenFinalTanque:'UM03',
      volumenRecepcion:{
        valorNumerico:'130000',
        um:'UM03'
      },
      temperatura:'20',
      presionAbsoluta:'101.325',
      fechaYHoraInicioRecepcion:'2020-10-31T10:59:45-01:00',
      fechaYHoraFinalRecepcion:'2020-10-31T11:59:45-01:00',
    },
    {
      publicKey:'5e935f97-5034-4697-805a-d7e14f54b85x',
      origen:{
        publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
        type:'pozo',
        key:'POZ-NOBLES0001DEL'
      },
      numeroDeRegistro:'199',
      volumenPuntoEntrada: null,
      volumenInicialTanque:null,
      volumenFinalTanque:null,
      uMCVolumenFinalTanque:null,
      volumenRecepcion:{
        valorNumerico:'130000',
        um:'UM03'
      },
      temperatura:'20',
      presionAbsoluta:'101.325',
      fechaYHoraInicioRecepcion:'2020-10-31T10:59:45-01:00',
      fechaYHoraFinalRecepcion:'2020-10-31T11:59:45-01:00',
    }

    ]
  }

  @Get(':id/:id2')
  findAlls(@Param('id2') id: string) {

    if (id === '5e935f97-5034-4697-805a-d7e14f54b85d') {
      return {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
        origen:{
          publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
          type:'ducto',
          key:'DUC-DES-004'
        },
        numeroDeRegistro:'1993',
        volumenPuntoEntrada: {
          valorNumerico:'20000',
          um:'UM03'
        },
        volumenInicialTanque:null,
        volumenFinalTanque:null,
        uMCVolumenFinalTanque:null,
        volumenRecepcion:{
          valorNumerico:'130000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2020-10-31T10:59:45-01:00',
        fechaYHoraFinalRecepcion:'2020-10-31T11:59:45-01:00',
      }          
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85f') {
      return {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85f',
        origen:{
          publicKey:'5e935f97-5034-4698-805a-d7e14f54b85g',
          type:'tanque',
          key:'TQS-TDA-0001'
        },
        numeroDeRegistro:'1994',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'20000',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'150000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'130000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2020-10-31T10:59:45-01:00',
        fechaYHoraFinalRecepcion:'2020-10-31T11:59:45-01:00',
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85x'){
      return {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85x',
        origen:{
          publicKey:'5e935f97-5034-4698-805a-d7e14f54b85d',
          type:'pozo',
          key:'POZ-NOBLES0001DEL'
        },
        numeroDeRegistro:'199',
        volumenPuntoEntrada: null,
        volumenInicialTanque:null,
        volumenFinalTanque:null,
        uMCVolumenFinalTanque:null,
        volumenRecepcion:{
          valorNumerico:'130000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2020-10-31T10:59:45-01:00',
        fechaYHoraFinalRecepcion:'2020-10-31T11:59:45-01:00',
      }
    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)
    }

  }
}
