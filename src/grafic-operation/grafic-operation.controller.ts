/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GraficOperationService } from './grafic-operation.service';
import { CreateGraficOperationDto } from './dto/create-grafic-operation.dto';
import { UpdateGraficOperationDto } from './dto/update-grafic-operation.dto';

@Controller('graficoperation')
export class GraficOperationController {
  constructor(
    private readonly graficOperationService: GraficOperationService,
  ) {}

  @Get(':id/tanque/')
  findTanques(@Param('id') id: string) {

    const date = id;
    console.log('fecha a filtrar',date);

    return [

      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
        key:'TQS-TDA-0001',
        totalEntregas:'50000',
        totalRecepciones:'200000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85b',
        key:'TQS-TDA-0002',
        totalEntregas:'125000',
        totalRecepciones:'100000'
      }

    ]

  }

  @Get(':id/pozo/')
  findPozos(@Param('id') id: string) {

    const date = id;
    console.log('fecha a filtrar',date);

    return [

      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-NOBLES0001DEL',
        totalEntregas:'30000',
        totalRecepciones:'30000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-NOBLES0001DEL',
        totalEntregas:'5000',
        totalRecepciones:'0'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-NOBLES0001DEL',
        totalEntregas:'0',
        totalRecepciones:'2500'
      },

    ]


  }

  @Get(':id/ducto/')
  findDuctos(@Param('id') id: string) {

    const date = id;
    console.log('fecha a filtrar',date);

    return [

      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-DUC-DES-004',
        totalEntregas:'4000',
        totalRecepciones:'30000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-DUC-DES-005',
        totalEntregas:'5000',
        totalRecepciones:'100'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-DUC-DES-006',
        totalEntregas:'10000',
        totalRecepciones:'2500'
      },

    ]


  }

  @Get(':id/manguera/')
  findMangueras(@Param('id') id: string) { 

    const date = id;
    console.log('fecha a filtrar',date);

    return [

      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0001',
        totalEntregas:'4000',
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0002',
        totalEntregas:'5000',
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0003',
        totalEntregas:'10000',
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0004',
        totalEntregas:'10000',
      },

    ]


  }

  @Get(':id/tanque/:id2')
  findenOperations(@Param('id2') id2: string) {

    const key = id2;
    console.log('tankey',key);

    if (key === '6e935f97-5034-4697-805a-d7e14f54b85a') {
      return {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85a',
        key:'TQS-TDA-0001',
        totalEntregas:'50000',
        totalRecepciones:'200000',
        entregas:[
          {
            origen:{
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
              key:'TQS-TDA-0001',
              type:'tanque'
            },
            publicKey:'5e935f97-5034-4697-805a-d7e14f54b8E1',
            numeroDeRegistro:'56523',
            volumenInicialTanque:{
              valorNumerico:'300000',
              um:'UM03',
            },
            volumenFinalTanque:{
              valorNumerico:'250000'
            },    
            volumenEntregado:{
              valorNumerico:'50000',
              um:'UM03'
            },
            volumenPuntoSalida:null,
            temperatura:'20',
            presionAbsoluta:'101.325',
            fechaYHoraInicialEntrega:'2021-06-28T12:05:15-06:00',
            fechaYHoraFinalEntrega:'2021-06-28T13:01:45-06:00',
            complemento:null,
            tipoDeRegistro:null,
            volumenEntregadoTotalizadorAcum:null,
            volumenEntregadoTotalizadorInsta:null,
            precioVentaTotalizadorInsta:null,
            fechaYHoraEntrega:null,
          },
        ],
        recepciones:[
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
          }
        ]
      }
    }else if (key === '6e935f97-5034-4697-805a-d7e14f54b85b') {
      return {
          publicKey:'6e935f97-5034-4697-805a-d7e14f54b85b',
          key:'TQS-TDA-0002',
          totalEntregas:'120000',
          totalRecepciones:'100000',
          entregas:[
            {
              origen:{
                publicKey:'6e935f97-5034-4697-805a-d7e14f54b85b',
                key:'TQS-TDA-0002',
                type:'tanque'
              },
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b8E2',
              numeroDeRegistro:'56524',
              volumenInicialTanque:{
                valorNumerico:'100000',
                um:'UM03',
              },
              volumenFinalTanque:{
                valorNumerico:'25000'
              },    
              volumenEntregado:{
                valorNumerico:'75000',
                um:'UM03'
              },
              volumenPuntoSalida:null,
              temperatura:'20',
              presionAbsoluta:'101.325',
              fechaYHoraInicialEntrega:'2021-06-28T09:05:15-06:00',
              fechaYHoraFinalEntrega:'2021-06-28T10:01:45-06:00',
              complemento:null,
              tipoDeRegistro:null,
              volumenEntregadoTotalizadorAcum:null,
              volumenEntregadoTotalizadorInsta:null,
              precioVentaTotalizadorInsta:null,
              fechaYHoraEntrega:null,
            },
            {
              origen:{
                publicKey:'6e935f97-5034-4697-805a-d7e14f54b85b',
                key:'TQS-TDA-0002',
                type:'tanque'
              },
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b8E3',
              numeroDeRegistro:'56524',
              volumenInicialTanque:{
                valorNumerico:'25000',
                um:'UM03',
              },
              volumenFinalTanque:{
                valorNumerico:'0'
              },    
              volumenEntregado:{
                valorNumerico:'25000',
                um:'UM03'
              },
              volumenPuntoSalida:null,
              temperatura:'20',
              presionAbsoluta:'101.325',
              fechaYHoraInicialEntrega:'2021-06-28T12:05:15-06:00',
              fechaYHoraFinalEntrega:'2021-06-28T13:01:45-06:00',
              complemento:null,
              tipoDeRegistro:null,
              volumenEntregadoTotalizadorAcum:null,
              volumenEntregadoTotalizadorInsta:null,
              precioVentaTotalizadorInsta:null,
              fechaYHoraEntrega:null,
            },
            {
              origen:{
                publicKey:'6e935f97-5034-4697-805a-d7e14f54b85b',
                key:'TQS-TDA-0002',
                type:'tanque'
              },
              publicKey:'5e935f97-5034-4697-805a-d7e14f54b8E4',
              numeroDeRegistro:'56524',
              volumenInicialTanque:{
                valorNumerico:'25000',
                um:'UM03',
              },
              volumenFinalTanque:{
                valorNumerico:'0'
              },    
              volumenEntregado:{
                valorNumerico:'25000',
                um:'UM03'
              },
              volumenPuntoSalida:null,
              temperatura:'20',
              presionAbsoluta:'101.325',
              fechaYHoraInicialEntrega:'2021-06-28T15:05:15-06:00',
              fechaYHoraFinalEntrega:'2021-06-28T16:01:45-06:00',
              complemento:null,
              tipoDeRegistro:null,
              volumenEntregadoTotalizadorAcum:null,
              volumenEntregadoTotalizadorInsta:null,
              precioVentaTotalizadorInsta:null,
              fechaYHoraEntrega:null,
            }
          ],
          recepciones:[
            {
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
            },
          ]
        }
      
    }




    


  }


}
