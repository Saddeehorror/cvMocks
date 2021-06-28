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
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b8R1',
        origen:{
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
          type:'tanque',
          key:'TQS-TDA-0001'
        },
        numeroDeRegistro:'1994',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'100000',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'200000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'100000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2021-06-28T08:00:45-06:00',
        fechaYHoraFinalRecepcion:'2021-06-28T10:00:00-01:00',
      },
      {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b8R2',
        origen:{
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
          type:'tanque',
          key:'TQS-TDA-0001'
        },
        numeroDeRegistro:'1997',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'200000',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'300000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'100000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2021-06-28T10:05:00-06:00',
        fechaYHoraFinalRecepcion:'2021-06-28T11:15:00-06:00',
      },
      {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b8R3',
        origen:{
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
          type:'tanque',
          key:'TQS-TDA-0001'
        },
        numeroDeRegistro:'1994',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'0',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'100000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'100000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2021-06-28T14:00:45-06:00',
        fechaYHoraFinalRecepcion:'2021-06-28T15:00:00-01:00',
      },
    ]
  }

  @Get(':id/:id2')
  findAlls(@Param('id2') id: string) {

    if (id === '5e935f97-5034-4697-805a-d7e14f54b8R1') {
      return  {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b8R1',
        origen:{
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
          type:'tanque',
          key:'TQS-TDA-0001'
        },
        numeroDeRegistro:'1994',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'100000',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'200000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'100000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2021-06-28T08:00:45-06:00',
        fechaYHoraFinalRecepcion:'2021-06-28T10:00:00-01:00',
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b8R2'){
      return           {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b8R2',
        origen:{
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
          type:'tanque',
          key:'TQS-TDA-0001'
        },
        numeroDeRegistro:'1997',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'200000',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'300000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'100000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2021-06-28T10:05:00-06:00',
        fechaYHoraFinalRecepcion:'2021-06-28T11:15:00-06:00',
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b8R3') {

      return {
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b8R3',
        origen:{
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
          type:'tanque',
          key:'TQS-TDA-0002'
        },
        numeroDeRegistro:'1996',
        volumenPuntoEntrada: null,
        volumenInicialTanque:{
          valorNumerico:'0',
          um:'UM03'
        },
        volumenFinalTanque:{
          valorNumerico:'100000'
        },
        uMCVolumenFinalTanque:'UM03',
        volumenRecepcion:{
          valorNumerico:'100000',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicioRecepcion:'2021-06-28T14:00:45-06:00',
        fechaYHoraFinalRecepcion:'2021-06-28T15:00:00-01:00',
      }

    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)
    }

  }
}
