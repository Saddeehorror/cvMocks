/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Get(':id')
  findAll(@Query() params: any) {

    console.log(params);


    if (params.type) {

      if (params.type === 'pozo') {
        return [
          {
            origen:{
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b85h',
              key:'POZ-NOBLES0001DEL',
              type:'pozo'
            },
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85i',
            numeroDeRegistro:'7',
            volumenInicialTanque:null,
            volumenFinalTanque:null,  
            volumenEntregado:{
              valorNumerico:'504',
              um:'UM01'
            },
            volumenPuntoSalida:null,
            temperatura:'20',
            presionAbsoluta:'101.325',
            fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
            fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
            complemento:null,
            tipoDeRegistro:null,
            volumenEntregadoTotalizadorAcum:null,
            volumenEntregadoTotalizadorInsta:null,
            precioVentaTotalizadorInsta:null,
            fechaYHoraEntrega:null,
          }
        ]
      }else if (params.type === 'tanque') {

        return [
          {
            origen:{
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
              key:'TQS-TDA-0001',
              type:'tanque'
            },
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
            numeroDeRegistro:'56523',
            volumenInicialTanque:{
              valorNumerico:'150000',
              um:'UM03',
            },
            volumenFinalTanque:{
              valorNumerico:'100000'
            },    
            volumenEntregado:{
              valorNumerico:'50000',
              um:'UM03'
            },
            volumenPuntoSalida:null,
            temperatura:'20',
            presionAbsoluta:'101.325',
            fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
            fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
            complemento:null,
            tipoDeRegistro:null,
            volumenEntregadoTotalizadorAcum:null,
            volumenEntregadoTotalizadorInsta:null,
            precioVentaTotalizadorInsta:null,
            fechaYHoraEntrega:null,
          },
        ]

        
      }else if (params.type === 'ducto') {
        return [
          {
            origen:{
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b85f',
              key:'DUC-DIS-0001',
              type:'ducto'
            },
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85g',
            numeroDeRegistro:'1987',
            volumenInicialTanque:null,
            volumenFinalTanque:null,  
            volumenEntregado:{
              valorNumerico:'50000',
              um:'UM03'
            },
            volumenPuntoSalida:{
              valorNumerico:'1987',
              um:'UM03'
            },
            temperatura:'20',
            presionAbsoluta:'101.325',
            fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
            fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
            complemento:null,
            tipoDeRegistro:null,
            volumenEntregadoTotalizadorAcum:null,
            volumenEntregadoTotalizadorInsta:null,
            precioVentaTotalizadorInsta:null,
            fechaYHoraEntrega:null,
          },
        ]
      }else if (params.type === 'manguera') {
        return [
          {
            origen:{
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b85j',
              key:'DISP-0004-MGA-0002',
              type:'manguera'
            },
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85k',
            numeroDeRegistro:'670',
            volumenInicialTanque:null,
            volumenFinalTanque:null,  
            volumenEntregado:null,
            volumenPuntoSalida:null,
            temperatura:null,
            presionAbsoluta:null,
            fechaYHoraInicialEntrega:null,
            fechaYHoraFinalEntrega:null,
            complemento:null,
            tipoDeRegistro:'D',
            volumenEntregadoTotalizadorAcum:{
              valorNumerico:'23940',
              um:'UM03'
            },
            volumenEntregadoTotalizadorInsta:{
              valorNumerico:'30',
              um:'UM03'
            },
            precioVentaTotalizadorInsta:'570',
            fechaYHoraEntrega:'2020-12-25T20:34:10-01:00',
          }
        ]
      }



      
    }else{
      return [
        {
          origen:{
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
            key:'TQS-TDA-0001',
            type:'tanque'
          },
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
          numeroDeRegistro:'56523',
          volumenInicialTanque:{
            valorNumerico:'150000',
            um:'UM03',
          },
          volumenFinalTanque:{
            valorNumerico:'100000'
          },    
          volumenEntregado:{
            valorNumerico:'50000',
            um:'UM03'
          },
          volumenPuntoSalida:null,
          temperatura:'20',
          presionAbsoluta:'101.325',
          fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
          fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
          complemento:null,
          tipoDeRegistro:null,
          volumenEntregadoTotalizadorAcum:null,
          volumenEntregadoTotalizadorInsta:null,
          precioVentaTotalizadorInsta:null,
          fechaYHoraEntrega:null,
        },
        {
          origen:{
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85f',
            key:'DUC-DIS-0001',
            type:'ducto'
          },
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85g',
          numeroDeRegistro:'1987',
          volumenInicialTanque:null,
          volumenFinalTanque:null,  
          volumenEntregado:{
            valorNumerico:'50000',
            um:'UM03'
          },
          volumenPuntoSalida:{
            valorNumerico:'1987',
            um:'UM03'
          },
          temperatura:'20',
          presionAbsoluta:'101.325',
          fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
          fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
          complemento:null,
          tipoDeRegistro:null,
          volumenEntregadoTotalizadorAcum:null,
          volumenEntregadoTotalizadorInsta:null,
          precioVentaTotalizadorInsta:null,
          fechaYHoraEntrega:null,
        },
        {
          origen:{
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85h',
            key:'POZ-NOBLES0001DEL',
            type:'pozo'
          },
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85i',
          numeroDeRegistro:'7',
          volumenInicialTanque:null,
          volumenFinalTanque:null,  
          volumenEntregado:{
            valorNumerico:'504',
            um:'UM01'
          },
          volumenPuntoSalida:null,
          temperatura:'20',
          presionAbsoluta:'101.325',
          fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
          fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
          complemento:null,
          tipoDeRegistro:null,
          volumenEntregadoTotalizadorAcum:null,
          volumenEntregadoTotalizadorInsta:null,
          precioVentaTotalizadorInsta:null,
          fechaYHoraEntrega:null,
        },
        {
          origen:{
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b85j',
            key:'DISP-0004-MGA-0002',
            type:'manguera'
          },
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85k',
          numeroDeRegistro:'670',
          volumenInicialTanque:null,
          volumenFinalTanque:null,  
          volumenEntregado:null,
          volumenPuntoSalida:null,
          temperatura:null,
          presionAbsoluta:null,
          fechaYHoraInicialEntrega:null,
          fechaYHoraFinalEntrega:null,
          complemento:null,
          tipoDeRegistro:'D',
          volumenEntregadoTotalizadorAcum:{
            valorNumerico:'23940',
            um:'UM03'
          },
          volumenEntregadoTotalizadorInsta:{
            valorNumerico:'30',
            um:'UM03'
          },
          precioVentaTotalizadorInsta:'570',
          fechaYHoraEntrega:'2020-12-25T20:34:10-01:00',
        }
      ]
    }



  }

  @Get(':id/:id2')
  findAlls(@Param('id2') id: string) {

    console.log(id);

    if (id === '5e935f97-5034-4697-805a-d7e14f54b85i') {
      return {
        origen:{
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85h',
          key:'POZ-NOBLES0001DEL',
          type:'pozo'
        },
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85i',
        numeroDeRegistro:'7',
        volumenInicialTanque:null,
        volumenFinalTanque:null,  
        volumenEntregado:{
          valorNumerico:'504',
          um:'UM01'
        },
        volumenPuntoSalida:null,
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
        fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
        complemento:null,
        tipoDeRegistro:null,
        volumenEntregadoTotalizadorAcum:null,
        volumenEntregadoTotalizadorInsta:null,
        precioVentaTotalizadorInsta:null,
        fechaYHoraEntrega:null,
      }        
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85e') {
      return {
        origen:{
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          key:'TQS-TDA-0001',
          type:'tanque'
        },
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85e',
        numeroDeRegistro:'56523',
        volumenInicialTanque:{
          valorNumerico:'150000',
          um:'UM03',
        },
        volumenFinalTanque:{
          valorNumerico:'100000'
        },    
        volumenEntregado:{
          valorNumerico:'50000',
          um:'UM03'
        },
        volumenPuntoSalida:null,
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
        fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
        complemento:null,
        tipoDeRegistro:null,
        volumenEntregadoTotalizadorAcum:null,
        volumenEntregadoTotalizadorInsta:null,
        precioVentaTotalizadorInsta:null,
        fechaYHoraEntrega:null,
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85g'){
      return           {
        origen:{
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85f',
          key:'DUC-DIS-0001',
          type:'ducto'
        },
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85g',
        numeroDeRegistro:'1987',
        volumenInicialTanque:null,
        volumenFinalTanque:null,  
        volumenEntregado:{
          valorNumerico:'50000',
          um:'UM03'
        },
        volumenPuntoSalida:{
          valorNumerico:'1987',
          um:'UM03'
        },
        temperatura:'20',
        presionAbsoluta:'101.325',
        fechaYHoraInicialEntrega:'2020-10-31T07:59:45-01:00',
        fechaYHoraFinalEntrega:'2020-10-31T08:10:45-01:00',
        complemento:null,
        tipoDeRegistro:null,
        volumenEntregadoTotalizadorAcum:null,
        volumenEntregadoTotalizadorInsta:null,
        precioVentaTotalizadorInsta:null,
        fechaYHoraEntrega:null,
      }
    }else if (id === '5e935f97-5034-4697-805a-d7e14f54b85k'){
      return           {
        origen:{
          publicKey:'5e935f97-5034-4697-805a-d7e14f54b85j',
          key:'DISP-0004-MGA-0002',
          type:'manguera'
        },
        publicKey:'5e935f97-5034-4697-805a-d7e14f54b85k',
        numeroDeRegistro:'670',
        volumenInicialTanque:null,
        volumenFinalTanque:null,  
        volumenEntregado:null,
        volumenPuntoSalida:null,
        temperatura:null,
        presionAbsoluta:null,
        fechaYHoraInicialEntrega:null,
        fechaYHoraFinalEntrega:null,
        complemento:null,
        tipoDeRegistro:'D',
        volumenEntregadoTotalizadorAcum:{
          valorNumerico:'23940',
          um:'UM03'
        },
        volumenEntregadoTotalizadorInsta:{
          valorNumerico:'30',
          um:'UM03'
        },
        precioVentaTotalizadorInsta:'570',
        fechaYHoraEntrega:'2020-12-25T20:34:10-01:00',
      }
    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)
    }

  }

}
