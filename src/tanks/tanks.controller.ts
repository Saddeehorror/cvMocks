/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { TanksService } from './tanks.service';
import { CreateTankDto } from './dto/create-tank.dto';
import { UpdateTankDto } from './dto/update-tank.dto';

@Controller('tanks')
export class TanksController {
  constructor(private readonly tanksService: TanksService) {}

  @Get(':id/:id2/stockHistory')
  findAlls(@Param('id2') id: string) {

    console.log(id);

    if (id === '762e8463-5070-4e82-ae5f-5b1e74449302') {
      return [
        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },
        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },
        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        },        {

          pulicKey:'5e935f97-5034-4697-805a-d7e14f54b85d',
          volumenExistenciasAnterior:{
            valorNumerico:'20343'
          },
          volumenAcumOpsRecepcion:{
            valorNumerico:'50488',
            um:'UM03'
          },
          horaRecepcionAcumulado:'11:15:45-01:00',
          volumenAcumOpsEntrega:{
            valorNumerico:'50000',
            um:'UM03'
          },
          horaEntregaAcumulado:'11:32:14-01:00',
          volumenExistencias:{
            valorNumerico:'20831'
          },
          fechaYHoraEstaMedicion:'2020-10-31T11:59:45-01:00',
          fechaYHoraMedicionAnterior:'2020-10-30T11:59:45-01:00'
  
        }

      ]
    }else{
      throw new HttpException('invalid key',HttpStatus.BAD_REQUEST)
    }

  }

}
