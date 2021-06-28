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
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'TQS-TDA-0001',
        entregas:'60000',
        recepciones:'30000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'TQS-TDA-0002',
        entregas:'120000',
        recepciones:'100000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'TQS-TDA-0003',
        entregas:'20000',
        recepciones:'9500'
      },

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
        entregas:'30000',
        recepciones:'30000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-NOBLES0001DEL',
        entregas:'5000',
        recepciones:'0'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-NOBLES0001DEL',
        entregas:'0',
        recepciones:'2500'
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
        entregas:'4000',
        recepciones:'30000'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-DUC-DES-005',
        entregas:'5000',
        recepciones:'100'
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'POZ-DUC-DES-006',
        entregas:'10000',
        recepciones:'2500'
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
        entregas:'4000',
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0002',
        entregas:'5000',
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0003',
        entregas:'10000',
      },
      {
        publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
        key:'DISP-0004-MGA-0004',
        entregas:'10000',
      },

    ]


  }

  @Get(':id/tanque/:id2/entregas')
  findentregas(@Param('id2') id: string) {

    const date = id;
    console.log('fecha a filtrar',date);

    return       {
      publicKey:'6e935f97-5034-4697-805a-d7e14f54b85d',
      key:'TQS-TDA-0001',
      totalEntregas:'60000',
      totalRecepciones:'30000',
      entregas:[],
      recepciones:[]
    }


  }


}
