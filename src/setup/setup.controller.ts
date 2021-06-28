/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { SetupService } from './setup.service';
import { CreateSetupDto } from './dto/create-setup.dto';
import { UpdateSetupDto } from './dto/update-setup.dto';
import { response, Response } from 'express';

@Controller('setup')
export class SetupController {
  constructor(private readonly setupService: SetupService) {}

  @Post('/license')
  create(@Body() createSetupDto: CreateSetupDto) {
    console.log('createSetupDto',createSetupDto);

    if (createSetupDto.licenseKey != 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx') {
      throw new HttpException('invalid license',HttpStatus.BAD_REQUEST)

    }

    if (createSetupDto.username != 'luisaguilar_92@hotmail.com') {
      throw new HttpException('invalid username',HttpStatus.BAD_REQUEST)

    }

    if (createSetupDto.password != '123456') {
      throw new HttpException('invalid password',HttpStatus.BAD_REQUEST)

    }

    return {
      step: 3,
      application: {
          appKey: "822d2778-6c77-4cda-8874-783ff000a88a",
          name: "Control Volumétrico",
          description: "Licencia de control volumétrico general"
      },
      type: {
          id: "eeb0611d-8f4a-4a9c-a4f0-255f580493ea",
          type: "LIFETIME"
      },
      owner: {
          rfc: "HMDR890624F1",
          name: "Himex",
          email: "contacto@himex.mx",
          phone: "8332587577",
          staticDevice: 0,
          dynamicDevice: 0
      },
      licenseKey: "KGETG-HQLYG-8P8L2-KVHBV-Y2SF1",
      status: "NEW",
      createdAt: "2020-11-05",
      id: "720c783d-a82a-47b7-9b3a-9d20e6fcc8f3"
    }


  }

  @Post('/fiscalCharacter/:id')
  createCharacter(@Body() character:any,@Param('id') id: string) {
    console.log('createSetupDto',character);
    console.log('id',id);

    return {
      ok:'ok'
    }


  }

  @Get()
  findAll() {
    return this.setupService.findAll();
  }

  @Get('/character/:id')
  getLicense(@Param('id') id: string) {
    console.log("------------------------------",id);
    return [
      'contratista',
      'asignatario',
      'permisionario',
      'usuario'
    ]
  }

  

  @Get('/permits/:id')
  findOne(@Param('id') id: string) {
    return [
      {nombre:"Comercialización de hidrocarburos, petrolíferos y petroquímicos (combinados)",exprValidacion:"^H/[0-9]{1,5}/COM/[0-9]{4}$",nomenclatura:"H/XXXXX/COM/AAAA",clave:"PER1"},
        {nombre:"Comercialización de petrolíferos, petroquímicos y bioenergéticos",exprValidacion:"^H/[0-9]{1,5}/COM/[0-9]{4}$",nomenclatura:"H/XXXXX/COM/AAAA",clave:"PER6"},
        {nombre:"Comercialización de gas natural",exprValidacion:"^G/[0-9]{1,5}/COM/GN/[0-9]{4}$",nomenclatura:"G/XXXXX/COM/GN/AAAA",clave:"PER17"},
        {nombre:"Comercialización de petróleo",exprValidacion:"^G/[0-9]{1,5}/COM/PETRO/[0-9]{4}$",nomenclatura:"G/XXXXX/COM/PETRO/AAAA",clave:"PER18"},
        {nombre:"Comercialización de gas Natural y petróleo para contratistas de exploración y extracción",exprValidacion:"^G/[0-9]{1,5}/COM/CEE/[0-9]{4}$",nomenclatura:"G/XXXXX/COM/CEE/AAAA",clave:"PER19"},
        {nombre:"Comercialización de gas licuado de petróleo",exprValidacion:"^LP/[0-9]{1,5}/COM/[0-9]{4}$",nomenclatura:"LP/XXXXX/COM/AAAA",clave:"PER45"},
        {nombre:"Expendio al público de gasolinas y diésel mediante estación de servicio",exprValidacion:"^PL/[0-9]{1,5}/EXP/ES/[0-9]{4}$",nomenclatura:"PL/XXXXX/EXP/ES/AAAA",clave:"PER2"},
        {nombre:"Expendio al público de gasolinas y diésel mediante estación de servicio multimodal",exprValidacion:"^PL/[0-9]{1,5}/EXP/ES/MM/[0-9]{4}$",nomenclatura:"PL/XXXXX/EXP/ES/MM/AAAA",clave:"PER3"},
        {nombre:"Expendio de autoconsumo de gasolinas y diésel",exprValidacion:"^PL/[0-9]{1,5}/EXP/ESA/[0-9]{4}$",nomenclatura:"PL/XXXXX/EXP/ESA/AAAA",clave:"PER4"},
        {nombre:"Expendio al público de gas natural mediante estación de servicio con fin específico",exprValidacion:"^G/[0-9]{1,5}/EXP/ES/FE/[0-9]{4})",nomenclatura:"G/XXXXX/EXP/ES/FE/AAAA",clave:"PER24"},
        {nombre:"Expendio al público de gas natural mediante estación de servicio multimodal",exprValidacion:"^G/[0-9]{1,5}/EXP/ES/MM/[0-9]{4}$",nomenclatura:"G/XXXXX/EXP/ES/MM/AAAA",clave:"PER25"},
        {nombre:"Expendio en aeródromos",exprValidacion:"^PL/[0-9]{1,5}/EXP/AE/[0-9]{4}$",nomenclatura:"PL/XXXXX/EXP/AE/AAAA",clave:"PER14"},
        {nombre:"Expendio al público de gas licuado de petróleo mediante estación de servicio con fin específico",exprValidacion:"^LP/[0-9]{1,5}/EXP/ES/[0-9]{4}$",nomenclatura:"LP/XXXXX/EXP/ES/AAAA",clave:"PER43"},
        {nombre:"Expendio de gas licuado de petróleo mediante estación de servicio para autoconsumo",exprValidacion:"^LP/[0-9]{1,5}/EXP/AUT/[0-9]{4}$",nomenclatura:"LP/XXXXX/EXP/AUT/AAAA",clave:"PER44"},
        {nombre:"Expendio de petrolíferos en estaciones de servicio para autoconsumo multimodal",exprValidacion:"^PL/[0-9]{1,5}/EXP/ESA/MM/[0-9]{4}$",nomenclatura:"PL/XXXXX/EXP/ESA/MM/AAAA",clave:"PER52"},
        {nombre:"Transporte por medios distintos a ducto de petrolíferos, petroquímicos y bioenergéticos",exprValidacion:"^PL/[0-9]{1,5}/TRA/OM/[0-9]{4}$",nomenclatura:"PL/XXXXX/TRA/OM/AAAA",clave:"PER7"},
        {nombre:"Transporte por ducto de petrolíferos, petroquímicos y bioenergéticos",exprValidacion:"^PL/[0-9]{1,5}/TRA/DUC/[0-9]{4}$",nomenclatura:"PL/XXXXX/TRA/DUC/AAAA",clave:"PER8"},
        {nombre:"Transporte por medios distintos a ducto de petrolíferos, petroquímicos y bioenergéticos",exprValidacion:"^PL/[0-9]{1,5}$/TRA/TM/[0-9]{4})",nomenclatura:"PL/XXXXX/TRA/TM/AAAA",clave:"PER9"},
        {nombre:"Transporte por ducto de petrolíferos, petroquímicos y bioenergéticos",exprValidacion:"^PQ/[0-9]{1,5}/TRA/DUC/[0-9]{4}$",nomenclatura:"PQ/XXXXX/TRA/DUC/AAAA",clave:"PER10"},
        {nombre:"Transporte de gas natural para usos",exprValidacion:"^G/[0-9]{1,5}/TUP/[0-9]{4}$",nomenclatura:"G/XXXXX/TUP/AAAA",clave:"PER29"},
        {nombre:"Transporte de gas natural para usos propios mediante Sociedad de Autoabastecimiento de Gas Natural",exprValidacion:"^G/[0-9]{1,5}/SAB/[0-9]{4}",nomenclatura:"G/XXXXX/SAB/AAAA",clave:"PER30"},
        {nombre:"Transporte de gas natural por medios distintos a ducto",exprValidacion:"^G/[0-9]{1,5}/TRA/OM/[0-9]{4}$",nomenclatura:"G/XXXXX/TRA/OM/AAAA",clave:"PER31"},
        {nombre:"Transporte de petróleo por medios distintos a ducto (Transporte Marítimo)",exprValidacion:"^P/[0-9]{1,5}/TRA/TM/[0-9]{4}$",nomenclatura:"P/XXXXX/TRA/TM/AAAA",clave:"PER32"},
        {nombre:"Transporte de petróleo por medios distintos a ducto",exprValidacion:"^P/[0-9]{1,5}/TRA/OM/[0-9]{4}$",nomenclatura:"P/XXXXX/TRA/OM/AAAA",clave:"PER33"},
        {nombre:"Transporte por ducto de gas natural procesado",exprValidacion:"^G/[0-9]{1,5}/TRA/[0-9]{4}$",nomenclatura:"G/XXXXX/TRA/AAAA",clave:"PER34"},
        {nombre:"Transporte por ducto de gas natural sin procesar (provisional)",exprValidacion:"^GN/[0-9]{1,5}/P/TRA/DUC/[0-9]{4}$",nomenclatura:"GN/XXXXX/P/TRA/DUC/AAAA",clave:"PER35"},
        {nombre:"Transporte por ducto de gas natural sin procesar",exprValidacion:"^GN/[0-9]{1,5}/TRA/DUC/[0-9]{4}$",nomenclatura:"GN/XXXXX/TRA/DUC/AAAA",clave:"PER36"},
        {nombre:"Transporte por ducto de petróleo",exprValidacion:"^P/[0-9]{1,5}/TRA/DUC/[0-9]{4}$",nomenclatura:"P/XXXXX/TRA/DUC/AAAA",clave:"PER37"},
        {nombre:"Transporte por ducto de petróleo (provisional)",exprValidacion:"^P/[0-9]{1,5}/P/TRA/DUC/[0-9]{4}$",nomenclatura:"P/XXXXX/P/TRA/DUC/AAAA",clave:"PER38"},
        {nombre:"Transporte de gas licuado de petróleo por medio de ductos",exprValidacion:"^LP/[0-9]{1,5}/TRA/DUC/[0-9]{4$",nomenclatura:"LP/XXXXX/TRA/DUC/AAAA",clave:"PER46"},
        {nombre:"Transporte de gas licuado de petróleo por medio de ductos",exprValidacion:"^G/[0-9]{1,5}/LPT/[0-9]{4}$",nomenclatura:"G/XXXXX/LPT/AAAA",clave:"PER47"},
        {nombre:"Transporte de gas licuado de petróleo por medios distintos a ductos",exprValidacion:"^LP/[0-9]{1,5}/TRA/[0-9]{4})$",nomenclatura:"LP/XXXXX/TRA/AAAA",clave:"PER48"},
        {nombre:"Almacenamiento de petrolíferos y bioenergéticos",exprValidacion:"^PL/[0-9]{1,5}/ALM/[0-9]{4}$",nomenclatura:"PL/XXXXX/ALM/AAAA",clave:"PER11"},
        {nombre:"Almacenamiento de petroquímicos y bioenergéticos",exprValidacion:"^PQ/[0-9]{1,5}/ALM/[0-9]{4}$",nomenclatura:"PQ/XXXXX/ALM/AAAA",clave:"PER12"},
        {nombre:"Almacenamiento en aeródromos",exprValidacion:"^PL/[0-9]{1,5}/ALM/AE/[0-9]{4}$",nomenclatura:"PL/XXXXX/ALM/AE/AAAA",clave:"PER13"},
        {nombre:"Almacenamiento de gas natural",exprValidacion:"^G/[0-9]{1,5}/ALM/[0-9]{4}$",nomenclatura:"G/XXXXX/ALM/AAAA",clave:"PER15"},
        {nombre:"Almacenamiento de petróleo",exprValidacion:"^P/[0-9]{1,5}/ALM/[0-9]{4}$",nomenclatura:"P/XXXXX/ALM/AAAA",clave:"PER16"},
        {nombre:"Almacenamiento de gas licuado de petróleo",exprValidacion:"^LP/[0-9]{1,5}/ALM/[0-9]{4}$",nomenclatura:"LP/XXXXX/ALM/AAAA",clave:"PER49"},
        {nombre:"Almacenamiento de gas licuado de petróleo",exprValidacion:"^G/[0-9]{1,5}/LPA/[0-9]{4}$",nomenclatura:"G/XXXXX/LPA/AAAA",clave:"PER50"},
        {nombre:"Distribución de gas natural por medio de ductos",exprValidacion:"^G/[0-9]{1,5}/DIS/[0-9]{4})$",nomenclatura:"G/XXXXX/DIS/AAAA",clave:"PER22"},
        {nombre:"Distribución de gas natural por medios distintos a ductos",exprValidacion:"^G/[0-9]{1,5}/DIS/OM/[0-9]{4}$",nomenclatura:"G/XXXXX/DIS/OM/AAAA",clave:"PER23"},
        {nombre:"Distribución de gas licuado de petróleo por medio de Auto-Tanques",exprValidacion:"^LP/[0-9]{1,5}/DIST/AUT/[0-9]{4}$",nomenclatura:"LP/XXXXX/DIST/AUT/AAAA",clave:"PER39"},
        {nombre:"Distribución de gas licuado de petróleo mediante Planta de Distribución",exprValidacion:"^LP/[0-9]{1,5}/DIST/PLA/[0-9]{4}$",nomenclatura:"LP/XXXXX/DIST/PLA/AAAA",clave:"PER40"},
        {nombre:"Distribución de gas licuado de petróleo por medio de ductos",exprValidacion:"^LP/[0-9]{1,5}/DIST/DUC/[0-9]{4}$",nomenclatura:"LP/XXXXX/DIST/DUC/AAAA",clave:"PER41"},
        {nombre:"Distribución de gas licuado de petróleo por medio de ductos",exprValidacion:"^G/[0-9]{1,5}/LPD/[0-9]{4}$",nomenclatura:"G/XXXXX/LPD/AAAA",clave:"PER42"},
        {nombre:"Distribución de gas licuado de petróleo",exprValidacion:"^LP/[0-9]{1,5}/DIST/REP/[0-9]{4}$",nomenclatura:"LP/XXXXX/DIST/REP/AAAA",clave:"PER51"},
        {nombre:"Distribución por ductos",exprValidacion:"^PL/[0-9]{1,5}/DIS/DUC/[0-9]{4}$",nomenclatura:"PL/XXXXX/DIS/DUC/AAAA",clave:"PER53"},
        {nombre:"Distribución por medios distintos a ductos de petrolíferos, petroquímicos y bioenergéticos",exprValidacion:"^PL/[0-9]{1,5}/DIS/OM/[0-9]{4}$",nomenclatura:"PL/XXXXX/DIS/OM/AAAA",clave:"PER5"},
        {nombre:"Gestión de sistemas integrados de sistemas de transporte y almacenamiento de gas natural",exprValidacion:"^G/[0-9]{1,5}/GES/[0-9]{4}$",nomenclatura:"G/XXXXX/GES/AAAA",clave:"PER26"},
        {nombre:"Licuefacción de gas natural",exprValidacion:"^G/[0-9]{1,5}/LICUE/[0-9]{4}$",nomenclatura:"G/XXXXX/LICUE/AAAA",clave:"PER27"},
        {nombre:"Regasificación de gas natural",exprValidacion:"^G/[0-9]{1,5}/REG/[0-9]{4}$",nomenclatura:"G/XXXXX/REG/AAAA",clave:"PER28"},
        {nombre:"Refinación de petróleo",exprValidacion:"^SENER-REF-[0-9]{1,3}-[0-9]{4}$",nomenclatura:"SENER-REF-XXX-AAAA",clave:"PER54"},
        {nombre:"Tratamiento de petróleo",exprValidacion:"^SENER-TP-[0-9]{1,3}-[0-9]{4}$",nomenclatura:"SENER-TP-XXX-AAAA",clave:"PER55"},
        {nombre:"Procesamiento de gas natural",exprValidacion:"^SENER-CPG-[0-9]{1,3}-[0-9]{4}$",nomenclatura:"SENER-CPG-XXX-AAAA",clave:"PER56"},
        {nombre:"Compresión de gas natural",exprValidacion:"^G/[0-9]{1,5}/COMP/[0-9]{4}$",nomenclatura:"G/XXXXX/COMP/AAAA",clave:"PER20"},
        {nombre:"Descompresión de gas natural",exprValidacion:"^G/[0-9]{1,5}/DESC/[0-9]{4}$",nomenclatura:"G/XXXXX/DESC/AAAA",clave:"PER21"}
    ]
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetupDto: UpdateSetupDto) {
    return this.setupService.update(+id, updateSetupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setupService.remove(+id);
  }
}
