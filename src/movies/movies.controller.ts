import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return "This will return all Movies";
  }

  @Get("search")
  search(@Query("year") searchingYear: string) {
    return `We ar searching for a movie made after : ${searchingYear}`;
  }

  @Get(":id")
  getOne(@Param("id") movieId: string) {
    return `This will return one Movies with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This will create a movie';
  }

  @Delete(":id")
  remove(@Param('id') movieId: string ) {
    return `This will delete a movie with id: ${movieId}`;
  }

  @Patch(':id')
  path(
    @Param('id') movieId: string,
    @Body() updataData
  ) {
    return {
      updatedMovie: movieId,
      ...updataData,
    };
  }
}
